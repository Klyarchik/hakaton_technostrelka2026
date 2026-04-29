import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';
import 'package:provider/provider.dart';

class CustomDrawer extends StatefulWidget {
  const CustomDrawer({super.key, required this.currentIndex});

  final int currentIndex;

  @override
  State<CustomDrawer> createState() => _CustomDrawerState();
}

class _CustomDrawerState extends State<CustomDrawer> {
  late final Dio _dio;
  bool _isAdmin = false;
  bool _isSession = false;

  Future<void> _init() async {
    final responseMe = await _dio.get('/api/user/me');
    if (responseMe.data['role'] == 'moderator') {
      setState(() {
        _isAdmin = true;
      });
      print('ADMIN');
    }
    final responseSession = await _dio.get('/api/session/current');
    if (responseSession.data['message'] != 'Нет активной сессии'){
      setState(() {
        _isSession = true;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
    _init();
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: ColorThema.panelColor,
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height: 20),
            _buildDrawerItem(
              title: 'Профиль',
              index: 0,
              route: '/profile',
              icon: Icons.person_outline,
            ),
            _buildDrawerItem(
              title: 'Главная',
              index: 1,
              route: '/head',
              icon: Icons.home_outlined,
            ),
            _buildDrawerItem(
              title: 'Черновики',
              index: 2,
              route: '/drafts',
              icon: Icons.drafts_outlined,
            ),
            _buildDrawerItem(
              title: 'Мои квесты',
              index: 3,
              route: '/my_route',
              icon: Icons.map_outlined,
            ),
            _buildDrawerItem(
              title: 'Команда',
              index: 4,
              route: '/team',
              icon: Icons.people,
            ),
            _buildDrawerItem(
              title: 'Рейтинг',
              index: 7,
              route: '/leadboard',
              icon: Icons.leaderboard,
            ),
            if (_isAdmin)
              _buildDrawerItem(
                title: 'Модерация',
                index: 5,
                route: '/moderation',
                icon: Icons.verified_outlined,
              ),
            if (_isSession)
              _buildDrawerItem(
                title: 'Сессия',
                index: 6,
                route: '/session',
                icon: Icons.gamepad,
              ),
          ],
        ),
      ),
    );
  }

  Widget _buildDrawerItem({
    required String title,
    required int index,
    required String route,
    required IconData icon,
  }) {
    final isSelected = widget.currentIndex == index;

    return Container(
      margin: EdgeInsets.symmetric(horizontal: 12, vertical: 4),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: isSelected
            ? Color.fromRGBO(255, 98, 64, 0.15)
            : Colors.transparent,
      ),
      child: InkWell(
        onTap: () {
          Navigator.pushNamed(context, route);
        },
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          child: Row(
            children: [
              Icon(
                icon,
                size: 22,
                color: isSelected
                    ? Color.fromRGBO(255, 98, 64, 1)
                    : ColorThema.colorText.withOpacity(0.7),
              ),
              SizedBox(width: 16),
              Expanded(
                child: Text(
                  title,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: isSelected ? FontWeight.w600 : FontWeight.w500,
                    color: isSelected
                        ? Color.fromRGBO(255, 98, 64, 1)
                        : ColorThema.colorText,
                  ),
                ),
              ),
              if (isSelected)
                Container(
                  width: 4,
                  height: 20,
                  decoration: BoxDecoration(
                    color: Color.fromRGBO(255, 98, 64, 1),
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}