import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/widgets/input.dart';
import 'package:frontend/widgets/input_password.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:dio/dio.dart';
import 'package:provider/provider.dart';

import '../widgets/alerts.dart';

class Entrance extends StatefulWidget {
  const Entrance({super.key});

  @override
  State<Entrance> createState() => _EntranceState();
}

class _EntranceState extends State<Entrance> {
  final _controllerUsername = TextEditingController();
  final _controllerPassword = TextEditingController();
  bool _can = false;
  late final Dio _dio;

  void _check() {
    if (_controllerUsername.text.isNotEmpty &&
        _controllerPassword.text.isNotEmpty) {
      setState(() {
        _can = true;
      });
    } else {
      setState(() {
        _can = false;
      });
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _controllerUsername.addListener(() {
      _check();
    });
    _controllerPassword.addListener(() {
      _check();
    });
    _dio = Provider.of<Dio>(context, listen: false);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorThema.backgroundColor,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        leading: SizedBox.shrink(),
        actions: [
          IconButton(
            onPressed: () {
              ColorThema.changeThema();
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
                width: double.infinity,
                height:
                    MediaQuery.of(context).size.height -
                    AppBar().preferredSize.height -
                    MediaQuery.of(context).padding.top,
                constraints: BoxConstraints(maxWidth: 300),
                margin: EdgeInsets.symmetric(horizontal: 10),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: EdgeInsets.all(15),
                      decoration: BoxDecoration(
                        border: Border.all(
                          color: ColorThema.colorBorder,
                          width: 1,
                        ),
                        borderRadius: BorderRadius.circular(12),
                        color: ColorThema.panelColor,
                      ),
                      child: Column(
                        children: [
                          Container(
                            padding: EdgeInsets.only(bottom: 10),
                            decoration: BoxDecoration(
                              border: Border(
                                bottom: BorderSide(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                  width: 0.1,
                                ),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    GestureDetector(
                                      child: Container(
                                        decoration: BoxDecoration(
                                          border: Border(
                                            bottom: BorderSide(
                                              color: Color.fromRGBO(
                                                255,
                                                159,
                                                90,
                                                1,
                                              ),
                                              width: 1,
                                            ),
                                          ),
                                        ),
                                        child: Text(
                                          'Вход',
                                          style: TextStyle(
                                            fontSize: 16,
                                            color: Color.fromRGBO(
                                              255,
                                              159,
                                              90,
                                              1,
                                            ),
                                          ),
                                        ),
                                      ),
                                      onTap: () {},
                                    ),
                                    SizedBox(width: 10),
                                    GestureDetector(
                                      child: Text(
                                        'Регистрация',
                                        style: TextStyle(
                                          fontSize: 16,
                                          color: Color.fromRGBO(
                                            164,
                                            168,
                                            185,
                                            1,
                                          ),
                                        ),
                                      ),
                                      onTap: () {
                                        Navigator.pushNamed(
                                          context,
                                          '/register',
                                        );
                                      },
                                    ),
                                  ],
                                ),
                                Icon(
                                  Icons.person,
                                  color: Color.fromRGBO(255, 159, 90, 1),
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: 10),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Никнейм',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5,),
                          SizedBox(
                            height: 40,
                            child: Input(
                              controller: _controllerUsername,
                              hintText: '',
                            ),
                          ),
                          SizedBox(height: 10),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Пароль',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5,),
                          SizedBox(
                            height: 40,
                            child: InputPassword(
                              controller: _controllerPassword,
                              hintText: '',
                            ),
                          ),
                          SizedBox(height: 15),
                          SizedBox(
                            height: 40,
                            width: double.infinity,
                            child: PrimaryButton(
                              text: 'Войти',
                              onPressed: _can
                                  ? () async {
                                      try {
                                        final response = await _dio.post(
                                          '/api/user/entrance',
                                          data: jsonEncode({
                                            'nickname':
                                                _controllerUsername.text,
                                            'password':
                                                _controllerPassword.text,
                                          }),
                                        );
                                        final storage = FlutterSecureStorage();
                                        String token = response.data['token'];
                                        await storage.write(
                                          key: 'token',
                                          value: token,
                                        );
                                        _dio.options.headers['Authorization'] =
                                            'Bearer $token';
                                        Navigator.pushNamed(
                                          context,
                                          '/profile',
                                        );
                                      } on DioException catch (e) {
                                        Alerts.showError(
                                          context,
                                          'Неверный логин или пароль',
                                        );
                                      }
                                    }
                                  : null,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
