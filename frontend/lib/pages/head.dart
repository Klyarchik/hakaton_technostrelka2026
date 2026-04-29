import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:frontend/widgets/about_route.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:latlong2/latlong.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/card_route.dart';
import '../widgets/theme_button.dart';

class Head extends StatefulWidget {
  const Head({super.key});

  @override
  State<Head> createState() => _HeadState();
}

class _HeadState extends State<Head> {
  late final Dio _dio;
  List _routers = [];
  String _selectedValue = '';
  bool _isModerator = false;
  int _page = 1;
  int _totalPages = 1;

  Future<void> _update() async {
    await _init(_selectedValue);
  }

  Future<void> _init(String difficultyOption) async {
    final response = await _dio.get(
      '/api/quest/get-quest-by-difficulty',
      queryParameters: {'difficultyOption': difficultyOption, 'page': _page},
    );
    final responseMe = await _dio.get('/api/user/me');
    if (responseMe.data['role'] == 'moderator') {
      setState(() {
        _isModerator = true;
      });
    }
    print(_isModerator);
    _totalPages = response.data['totalPages'];
    setState(() {
      _routers = response.data['data'];
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
    _init('');
  }

  @override
  Widget build(BuildContext context) {
    List<Widget> _pagesButtons = [];
    for (int i = 0; i < _totalPages; ++i) {
      _pagesButtons.add(
          TextButton(
            onPressed: () {
              _page = i + 1;
              _init(_selectedValue);
            },
            style: TextButton.styleFrom(
                foregroundColor: Color.fromRGBO(255, 159, 90, 1)
            ),
            child: Text('${i + 1}'),
          )
      );
    }
    return Scaffold(
      backgroundColor: ColorThema.backgroundColor,
      drawer: CustomDrawer(currentIndex: 1),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        iconTheme: IconThemeData(color: ColorThema.colorIcon),
        actions: [
          IconButton(
            onPressed: () async {
              await ColorThema.changeThema();
              setState(() {});
            },
            icon: Icon(
              ColorThema.colorIcon == Colors.white
                  ? Icons.nightlight_outlined
                  : Icons.sunny,
              color: ColorThema.colorIcon,
            ),
          ),
        ],
      ),
      body: SafeArea(
        child: ListView(
          children: [
            Center(
              child: Container(
                constraints: BoxConstraints(maxWidth: 700),
                padding: EdgeInsets.symmetric(horizontal: 15),
                width: double.infinity,
                margin: EdgeInsets.symmetric(horizontal: 20),
                decoration: BoxDecoration(
                  color: ColorThema.panelColor,
                  border: Border.all(color: ColorThema.colorBorder, width: 1),
                  borderRadius: BorderRadius.circular(15),
                ),
                child: MediaQuery.of(context).size.width > 600
                    ? Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            children: [
                              Container(
                                width: double.infinity,
                                constraints: BoxConstraints(maxWidth: 300),
                                child: ShaderMask(
                                  shaderCallback: (bounds) => LinearGradient(
                                    colors: [
                                      Colors.brown,
                                      Color.fromRGBO(255, 159, 90, 1),
                                    ],
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                  ).createShader(bounds),
                                  child: Text(
                                    'Создавай квесты. Проходите командами. Соревнуйтесь в рейтинге',
                                    style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.bold,
                                      color: Colors
                                          .white, // Цвет должен быть белым
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(height: 10),
                              Container(
                                width: double.infinity,
                                constraints: BoxConstraints(maxWidth: 300),
                                child: Text(
                                  'Платформа городских квестов, где каждый может создать маршрут с заданиями, а другие - проходить их в одиночку или с командой. Контент проверяют модераторы.',
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: ColorThema.colorText,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          Container(
                            width: 200,
                            child: Image.asset(
                              'images/people.png',
                              fit: BoxFit.cover,
                            ),
                          ),
                        ],
                      )
                    : Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            children: [
                              Container(
                                width: double.infinity,
                                padding: EdgeInsets.only(top: 30),
                                constraints: BoxConstraints(maxWidth: 300),
                                child: ShaderMask(
                                  shaderCallback: (bounds) => LinearGradient(
                                    colors: [
                                      Colors.brown,
                                      Color.fromRGBO(255, 159, 90, 1),
                                    ],
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                  ).createShader(bounds),
                                  child: Text(
                                    'Создавай квесты. Проходите командами. Соревнуйтесь в рейтинге',
                                    style: TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.bold,
                                      color: Colors
                                          .white, // Цвет должен быть белым
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(height: 10),
                              Container(
                                width: double.infinity,
                                constraints: BoxConstraints(maxWidth: 300),
                                child: Text(
                                  'Платформа городских квестов, где каждый может создать маршрут с заданиями, а другие - проходить их в одиночку или с командой. Контент проверяют модераторы.',
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: ColorThema.colorText,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          Container(
                            width: 200,
                            child: Image.asset(
                              'images/people.png',
                              fit: BoxFit.cover,
                            ),
                          ),
                        ],
                      ),
              ),
            ),
            SizedBox(height: 10),
            Center(
              child: Container(
                width: 700,
                margin: EdgeInsets.only(left: 20, right: 20),
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(
                    color: Color.fromRGBO(255, 98, 64, 1),
                    width: 1,
                  ),
                ),
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      FilledButton(
                        onPressed: () {
                          _page = 1;
                          _init('');
                          setState(() {
                            _selectedValue = '';
                          });
                        },
                        child: Text('Все'),
                        style: FilledButton.styleFrom(
                          backgroundColor: _selectedValue == ''
                              ? Color.fromRGBO(255, 98, 64, 1)
                              : ColorThema.colorBorder,
                        ),
                      ),
                      SizedBox(width: 10),
                      FilledButton(
                        onPressed: () {
                          _page = 1;
                          _init('1');
                          setState(() {
                            _selectedValue = '1';
                          });
                        },
                        child: Text('Мне только спросить'),
                        style: FilledButton.styleFrom(
                          backgroundColor: _selectedValue == '1'
                              ? Color.fromRGBO(255, 98, 64, 1)
                              : ColorThema.colorBorder,
                        ),
                      ),
                      SizedBox(width: 10),
                      FilledButton(
                        onPressed: () {
                          _page = 1;
                          _init('2');
                          setState(() {
                            _selectedValue = '2';
                          });
                        },
                        child: Text('Я бы еще поиграл'),
                        style: FilledButton.styleFrom(
                          backgroundColor: _selectedValue == '2'
                              ? Color.fromRGBO(255, 98, 64, 1)
                              : ColorThema.colorBorder,
                        ),
                      ),
                      SizedBox(width: 10),
                      FilledButton(
                        onPressed: () {
                          _page = 1;
                          _init('3');
                          setState(() {
                            _selectedValue = '3';
                          });
                        },
                        child: Text('Работают профи'),
                        style: FilledButton.styleFrom(
                          backgroundColor: _selectedValue == '3'
                              ? Color.fromRGBO(255, 98, 64, 1)
                              : ColorThema.colorBorder,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            SizedBox(height: 10),
            Center(
              child: Container(
                margin: EdgeInsets.only(left: 20, right: 20),
                width: 700,
                child: Row(
                  children: [
                    Icon(Icons.map, color: Color.fromRGBO(255, 159, 90, 1)),
                    SizedBox(width: 10),
                    Text(
                      'Квесты',
                      style: TextStyle(
                        color: ColorThema.colorText,
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(height: 10),
            Center(
              child: Container(
                width: 700,
                margin: EdgeInsets.symmetric(horizontal: 20),
                child: GridView.builder(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: MediaQuery.of(context).size.width > 725
                        ? 3
                        : MediaQuery.of(context).size.width > 450
                        ? 2
                        : 1,
                    childAspectRatio: 4 / 5,
                    crossAxisSpacing: 20,
                    mainAxisSpacing: 20,
                  ),
                  itemCount: _routers.length,
                  itemBuilder: (context, i) {
                    return CardRoute(
                      data: _routers[i],
                      onTap: () async {
                        final response = await _dio.get(
                          '/api/quest/get-quest-by-id',
                          queryParameters: {'id': _routers[i]['id']},
                        );
                        final data = response.data['questById'];
                        showDialog(
                          context: context,
                          builder: (context) {
                            return Center(
                              child: AboutRoute(
                                data: _routers[i],
                                isSession: _routers[i]['status'] == 'published'
                                    ? true
                                    : false,
                                isHidden: _isModerator,
                                update: _update,
                              ),
                            );
                          },
                        );
                      },
                    );
                  },
                ),
              ),
            ),
            SizedBox(height: 20),
            Center(
              child: Container(
                constraints: BoxConstraints(
                  maxWidth: 700
                ),
                width: double.infinity,
                margin: EdgeInsets.symmetric(horizontal: 20),
                child: Row(children: _pagesButtons, spacing: 10,),
              ),
            ),
            SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
