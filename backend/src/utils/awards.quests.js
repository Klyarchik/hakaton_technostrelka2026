const prisma = require('../client');

// Начисление очков команде за завершение квеста
const awardQuestPoints = async (teamId, quest, transportMode, sessionId) => {
  let points = 3; // базовая стоимость
  points += quest.difficulty * 2; // бонус за сложность

  const transportBonus = {
    walk: 5,
    public_transport: 3,
    car: 1,
    offroad: 7,
    no_roads: 10
  };
  if (transportMode && transportBonus[transportMode]) {
    points += transportBonus[transportMode];
  }

  await prisma.points_transactions.create({
    data: {
      team_id: teamId,
      session_id: sessionId,
      points: points,
      reason: 'quest_complete'
    }
  });
};

module.exports = {
  awardQuestPoints
};