import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/widgets/input_password.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:frontend/widgets/theme_button.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/alerts.dart';

class ChangePassword extends StatefulWidget {
  const ChangePassword({super.key});

  @override
  State<ChangePassword> createState() => _ChangePasswordState();
}

class _ChangePasswordState extends State<ChangePassword> {
  final _controllerOldPassword = TextEditingController();
  final _controllerNewPassword = TextEditingController();
  bool _can = false;
  late final Dio _dio;

  void _check() {
    if (_controllerOldPassword.text.isNotEmpty &&
        _controllerNewPassword.text.isNotEmpty) {
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
    _dio = Provider.of<Dio>(context, listen: false);
    _controllerOldPassword.addListener(() => _check());
    _controllerNewPassword.addListener(() => _check());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorThema.backgroundColor,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        leading: MediaQuery.of(context).size.width > 540
            ? SizedBox.shrink()
            : null,
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
          )
        ],
      ),
      body: SafeArea(
        child: ListView(
          children: [
            Center(
              child: SizedBox(
                height:
                    MediaQuery.of(context).size.height -
                    MediaQuery.of(context).padding.top -
                    kToolbarHeight,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: double.infinity,
                      padding: EdgeInsets.symmetric(vertical: 20),
                      margin: EdgeInsets.only(left: 10, right: 10),
                      constraints: BoxConstraints(maxWidth: 350),
                      decoration: BoxDecoration(
                        color: ColorThema.panelColor,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: ColorThema.colorBorder,
                          width: 1,
                        ),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            padding: EdgeInsets.only(
                              bottom: 10
                            ),
                            decoration: BoxDecoration(
                              border: Border(
                                bottom: BorderSide(
                                  color: Color.fromRGBO(
                                    164,
                                    168,
                                    185,
                                    1,
                                  ),
                                  width: 0.1,
                                ),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment:
                              MainAxisAlignment.spaceBetween,
                              children: [
                                Row(
                                  children: [
                                    SizedBox(width: 20, ),
                                    Icon(
                                      Icons.lock,
                                      color: Color.fromRGBO(
                                        255,
                                        159,
                                        90,
                                        1,
                                      ),
                                    ),
                                    SizedBox(width: 5),
                                    Text(
                                      'Изменение пароля',
                                      style: TextStyle(
                                        color: ColorThema.colorText,
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          SizedBox(height: 10),
                          Container(
                            margin: EdgeInsets.only(left: 20),
                            child: Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Старый пароль',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5,),
                          Container(
                            height: 40,
                            margin: EdgeInsets.symmetric(horizontal: 20),
                            child: InputPassword(
                              controller: _controllerOldPassword,
                              hintText: 'Старый пароль',
                            ),
                          ),
                          SizedBox(height: 10),
                          Container(
                            margin: EdgeInsets.only(left: 20),
                            child: Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Старый пароль',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5,),
                          Container(
                            height: 40,
                            margin: EdgeInsets.symmetric(horizontal: 20),
                            child: InputPassword(
                              controller: _controllerNewPassword,
                              hintText: 'Новый пароль',
                            ),
                          ),
                          SizedBox(height: 15),
                          Container(
                            width: double.infinity,
                            height: 40,
                            margin: EdgeInsets.symmetric(horizontal: 20),
                            child: PrimaryButton(
                              text: 'Изменить',
                              onPressed: _can
                                  ? () async {
                                      try {
                                        await _dio.put(
                                          '/api/user/changePassword',
                                          data: {
                                            'oldPassword':
                                                _controllerOldPassword.text,
                                            'newPassword':
                                                _controllerNewPassword.text,
                                          },
                                        );
                                        Navigator.pop(context);
                                      } on DioException catch (e) {
                                        Alerts.showError(
                                          context,
                                          e.response?.data['error'],
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
