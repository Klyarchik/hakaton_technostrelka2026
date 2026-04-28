const prisma = require("../client");

const getLeaderboard = async (req, res) => {
  try {
    // Группируем транзакции по team_id и суммируем points
    const aggregated = await prisma.points_transactions.groupBy({
      by: ['team_id'],
      _sum: {
        points: true
      },
      orderBy: {
        _sum: {
          points: 'desc'
        }
      }
    });

    if (!aggregated.length) {
      return res.status(200).json([]);
    }

    // Получаем id команд
    const teamIds = aggregated.map(item => item.team_id);

    // Загружаем информацию о командах (название)
    const teams = await prisma.teams.findMany({
      where: { id: { in: teamIds } },
      select: { id: true, name: true }
    });

    // Создаём map team_id -> team_name
    const teamMap = new Map(teams.map(team => [team.id, team.name]));

    // Формируем результат
    const leaderboard = aggregated.map(item => ({
      team_id: item.team_id,
      team_name: teamMap.get(item.team_id) || 'Неизвестная команда',
      total_points: item._sum.points || 0
    }));

    res.status(200).json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getLeaderboard,
};
