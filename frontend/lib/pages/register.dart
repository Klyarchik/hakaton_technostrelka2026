import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../color_thema.dart';
import '../widgets/alerts.dart';
import '../widgets/input.dart';
import '../widgets/input_password.dart';
import '../widgets/primary_button.dart';
import 'package:provider/provider.dart';

class Register extends StatefulWidget {
  const Register({super.key});

  @override
  State<Register> createState() => _RegisterState();
}

class _RegisterState extends State<Register> {
  final _controllerEmail = TextEditingController();
  final _controllerPassword = TextEditingController();
  final _controllerRepeatPassword = TextEditingController();
  final _controllerNickName = TextEditingController();
  bool _can = false;
  late final Dio _dio;
  String? _selectedAge;

  void _check() {
    final can =
        _controllerEmail.text.isNotEmpty &&
        _controllerNickName.text.isNotEmpty &&
        _controllerPassword.text.isNotEmpty &&
        _controllerRepeatPassword.text.isNotEmpty &&
        _selectedAge != null;

    if (can != _can) {
      setState(() {
        _can = can;
      });
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _controllerEmail.addListener(() {
      _check();
    });
    _controllerNickName.addListener(() {
      _check();
    });
    _controllerPassword.addListener(() {
      _check();
    });
    _controllerRepeatPassword.addListener(() {
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
                      padding: EdgeInsets.all(20),
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
                                        child: Text(
                                          'Вход',
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
                                      ),
                                      onTap: () {
                                        Navigator.pushNamed(
                                          context,
                                          '/entrance',
                                        );
                                      },
                                    ),
                                    SizedBox(width: 10),
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
                                          'Регистрация',
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
                                  ],
                                ),
                                Icon(
                                  Icons.person_add_alt_rounded,
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
                          SizedBox(height: 6.5),
                          SizedBox(
                            height: 40,
                            child: Input(
                              controller: _controllerNickName,
                              hintText: '',
                            ),
                          ),
                          SizedBox(height: 10),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Email',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          SizedBox(
                            height: 40,
                            child: Input(
                              controller: _controllerEmail,
                              hintText: '',
                            ),
                          ),
                          SizedBox(height: 10),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Выберите возраст',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          Container(
                            padding: EdgeInsets.symmetric(horizontal: 16),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(30),
                              border: Border.all(
                                color: ColorThema.colorBorder,
                                width: 1,
                              ),
                              color: ColorThema.panelColor
                            ),
                            height: 40,
                            child: DropdownButton<String>(
                              dropdownColor: ColorThema.backgroundColor,
                              underline: SizedBox(),
                              style: TextStyle(
                                color: ColorThema.colorText,
                                fontSize: 12,
                              ),
                              isExpanded: true,
                              value: _selectedAge,
                              items: [
                                DropdownMenuItem(
                                  value: '14-15',
                                  child: Text('14-15'),
                                ),
                                DropdownMenuItem(
                                  value: '16-17',
                                  child: Text('16-17'),
                                ),
                              ],
                              onChanged: (value) {
                                setState(() {
                                  _selectedAge = value;
                                });
                                _check();
                              },
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
                          SizedBox(height: 6.5),
                          SizedBox(
                            height: 40,
                            child: InputPassword(
                              controller: _controllerPassword,
                              hintText: 'Пароль',
                            ),
                          ),
                          SizedBox(height: 10),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Повторите пароль',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          SizedBox(
                            height: 40,
                            child: InputPassword(
                              controller: _controllerRepeatPassword,
                              hintText: 'Повторите пароль',
                            ),
                          ),
                          SizedBox(height: 15),
                          SizedBox(
                            height: 40,
                            width: double.infinity,
                            child: PrimaryButton(
                              text: 'Зарегистрироваться',
                              onPressed: _can
                                  ? () async {
                                      if (_controllerPassword.text !=
                                          _controllerRepeatPassword.text) {
                                        Alerts.showError(
                                          context,
                                          'Пароли не совпадают',
                                        );
                                      } else {
                                        try {
                                          final response = await _dio.post(
                                            '/api/user/register',
                                            data: jsonEncode({
                                              'nickname':
                                                  _controllerNickName.text,
                                              'password':
                                                  _controllerPassword.text,
                                              'email': _controllerEmail.text,
                                              'age_group': _selectedAge,
                                            }),
                                          );
                                          final storage =
                                              FlutterSecureStorage();
                                          String token = response.data['token'];
                                          await storage.write(
                                            key: 'token',
                                            value: token,
                                          );
                                          _dio
                                                  .options
                                                  .headers['Authorization'] =
                                              'Bearer $token';
                                          Navigator.pushNamed(
                                            context,
                                            '/profile',
                                          );
                                        } on DioException catch (e) {
                                          Alerts.showError(
                                            context,
                                            e.response?.data['error'],
                                          );
                                        }
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
