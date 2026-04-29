import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/widgets/alerts.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:frontend/widgets/input.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:provider/provider.dart';

import '../widgets/theme_button.dart';

class Team extends StatefulWidget {
  const Team({super.key});

  @override
  State<Team> createState() => _TeamState();
}

class _TeamState extends State<Team> {
  late final Dio _dio;
  bool has = false;
  late Map infoTeam;
  bool _isLoaded = false;
  bool _isLeader = false;

  Future<void> _init() async {
    final response = await _dio.get('/api/team/team-current-user');
    final responseMe = await _dio.get('/api/user/me');
    if (responseMe.data['id'] == response.data['creator_id']){
      _isLeader = true;
    }
    if (response.data['message'] != 'У пользователя нет команды') {
      print(response.data);
      setState(() {
        infoTeam = response.data;
        has = true;
      });
    }
    setState(() {
      _isLoaded = true;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
    _init();
  }

  @override
  Widget build(BuildContext context) {
    return _isLoaded == false
        ? Scaffold(
            backgroundColor: ColorThema.backgroundColor,
            body: Center(
              child: CircularProgressIndicator(
                color: Color.fromRGBO(255, 159, 90, 1),
              ),
            ),
          )
        : Scaffold(
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
            drawer: CustomDrawer(currentIndex: 4),
            backgroundColor: ColorThema.backgroundColor,
            body: SafeArea(
              child: has
                  ?                       ListView(
                children: [
                  Center(
                    child: Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 20,
                        vertical: 20,
                      ),
                      margin: EdgeInsets.symmetric(horizontal: 20),
                      decoration: BoxDecoration(
                        color: ColorThema.panelColor,
                        borderRadius: BorderRadius.circular(15),
                        border: Border.all(
                          color: ColorThema.colorBorder,
                          width: 1,
                        ),
                      ),
                      constraints: BoxConstraints(maxWidth: 550),
                      child: ListView(
                        shrinkWrap: true,
                        physics: NeverScrollableScrollPhysics(),
                        children: [
                          Center(
                            child: Container(
                              width: double.infinity,
                              child: Column(
                                crossAxisAlignment:
                                CrossAxisAlignment.start,
                                children: [
                                  SizedBox(
                                    width: double.infinity,
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                      children: [
                                        IconButton(onPressed: null, icon: Icon(
                                          Icons.exit_to_app, color: Colors.transparent,
                                        )),
                                        Text(
                                          infoTeam['name'],
                                          style: TextStyle(
                                            color: ColorThema.colorText,
                                            fontWeight: FontWeight.w700,
                                            fontSize: 20,
                                          ),
                                        ),
                                        IconButton(
                                          onPressed: () async {
                                            final answer =
                                            await Alerts.showConfirm(
                                              context,
                                              'Вы уверены что хотите выйти из команды',
                                            );
                                            if (answer) {
                                              try {
                                                await _dio.delete(
                                                  '/api/team/leave',
                                                );
                                                Navigator.pushNamed(
                                                  context,
                                                  '/head',
                                                );
                                              } on DioException catch (
                                              e
                                              ) {
                                                Alerts.showError(
                                                  context,
                                                  e
                                                      .response!
                                                      .data['error'],
                                                );
                                              }
                                            }
                                          },
                                          icon: Icon(
                                            Icons.exit_to_app,
                                            color: Color.fromRGBO(
                                              255,
                                              159,
                                              90,
                                              1,
                                            ),
                                          ),
                                        )
                                      ],
                                    ),
                                  ),
                                  Row(
                                    children: [
                                      Text(
                                        'Описание: ',
                                        style: TextStyle(
                                          color: ColorThema.colorText,
                                          fontWeight: FontWeight.w700,
                                        ),
                                      ),
                                      Text(
                                        infoTeam['description'],
                                        style: TextStyle(
                                          color: ColorThema.colorText,
                                        ),
                                      ),
                                    ],
                                  ),
                                  SizedBox(height: 7),
                                  Row(
                                    children: [
                                      Text(
                                        'Код приглашения: ',
                                        style: TextStyle(
                                          color: ColorThema.colorText,
                                          fontWeight: FontWeight.w700,
                                        ),
                                      ),
                                      Row(
                                        children: [
                                          Text(
                                            infoTeam['invite_code'],
                                            style: TextStyle(
                                              color:
                                              ColorThema.colorText,
                                            ),
                                          ),
                                          SizedBox(width: 5),
                                          IconButton(
                                            onPressed: () {
                                              Clipboard.setData(
                                                ClipboardData(
                                                  text:
                                                  infoTeam['invite_code'],
                                                ),
                                              );
                                            },
                                            icon: Icon(
                                              Icons.copy,
                                              size: 18,
                                              color:
                                              ColorThema.colorIcon,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                  SizedBox(height: 12),
                                ],
                              ),
                            ),
                          ),
                          Row(
                            children: [
                              Icon(
                                Icons.people,
                                color: ColorThema.colorText,
                              ),
                              SizedBox(width: 7),
                              Text(
                                'Участники: ',
                                style: TextStyle(
                                  color: ColorThema.colorText,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                            ],
                          ),
                          Center(
                            child: Container(
                              width: double.infinity,
                              // margin: EdgeInsets.symmetric(horizontal: 20),
                              child: ListView.builder(
                                shrinkWrap: true,
                                physics: NeverScrollableScrollPhysics(),
                                itemCount: infoTeam['members'].length,
                                itemBuilder: (context, i) {
                                  return Container(
                                    margin: EdgeInsets.only(top: 10),
                                    decoration: BoxDecoration(
                                      borderRadius:
                                      BorderRadius.circular(15),
                                      color: ColorThema.panelColor,
                                      border: Border.all(
                                        color: ColorThema.colorBorder,
                                        width: 1,
                                      ),
                                    ),
                                    padding: EdgeInsets.all(10),
                                    child: Stack(
                                      children: [
                                        Row(
                                          mainAxisAlignment:
                                          MainAxisAlignment
                                              .spaceBetween,
                                          children: [
                                            Row(
                                              children: [
                                                SizedBox(
                                                  height: 40,
                                                  width: 40,
                                                  child: ClipRRect(
                                                    borderRadius:
                                                    BorderRadius.circular(
                                                      100,
                                                    ),
                                                    child: Image.network(
                                                      defaultTargetPlatform == TargetPlatform.android ? infoTeam['members'][i]['avatar'].replaceAll('localhost', '10.0.2.2') : infoTeam['members'][i]['avatar'],
                                                      fit: BoxFit.cover,
                                                    ),
                                                  ),
                                                ),
                                                SizedBox(width: 10),
                                                Text(
                                                  infoTeam['members'][i]['nickname'],
                                                  style: TextStyle(
                                                    color: ColorThema
                                                        .colorText,
                                                  ),
                                                ),
                                              ],
                                            ),
                                            infoTeam['creator_id'] ==
                                                infoTeam['members'][i]['id']
                                                ? IconButton(
                                              onPressed: null,
                                              icon: Icon(
                                                Icons
                                                    .workspace_premium,
                                                color:
                                                Color.fromRGBO(
                                                  255,
                                                  159,
                                                  90,
                                                  1,
                                                ),
                                              ),
                                            )
                                                : _isLeader ? IconButton(
                                              onPressed: () async {
                                                final answer =
                                                await Alerts.showConfirm(
                                                  context,
                                                  'Выгнать участника?',
                                                );
                                                if (answer) {
                                                  await _dio.delete(
                                                    '/api/team/member/remove',
                                                    data: jsonEncode({
                                                      'memberId':
                                                      infoTeam['members'][i]['id'],
                                                    }),
                                                  );
                                                  await _init();
                                                }
                                              },
                                              icon: Icon(
                                                Icons.delete,
                                                color:
                                                Color.fromRGBO(
                                                  255,
                                                  159,
                                                  90,
                                                  1,
                                                ),
                                              ),
                                            ) : SizedBox.shrink(),
                                          ],
                                        ),

                                      ],
                                    ),
                                  );
                                },
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              )
                  :                       Center(
                child: Container(
                  decoration: BoxDecoration(
                    color: ColorThema.panelColor,
                    border: Border.all(
                      color: ColorThema.colorBorder,
                      width: 1,
                    ),
                    borderRadius: BorderRadius.circular(15),
                  ),
                  padding: EdgeInsets.symmetric(vertical: 20),
                  constraints: BoxConstraints(maxWidth: 500),
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  child: IntrinsicHeight(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.person_off, size: 100, color: ColorThema.colorText,),
                        Text(
                          textAlign: TextAlign.center,
                          'Вы не состоите в команде',
                          style: TextStyle(
                            fontSize: 16,
                            color: ColorThema.colorText,
                          ),
                        ),
                        Container(
                          margin: EdgeInsets.symmetric(horizontal: 20),
                          child: Text(
                            'Присоединитесь к существуей команде или создайте новую',
                            style: TextStyle(
                              color: ColorThema.colorText,
                            ),
                          ),
                        ),
                        SizedBox(height: 10),
                        if (MediaQuery.of(context).size.width < 450)
                          Column(
                            children: [
                              Container(
                                height: 40,
                                width: double.infinity,
                                margin: EdgeInsets.only(
                                  left: 20,
                                  right: 20,
                                ),
                                child: OutlinedButton(
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: Color.fromRGBO(
                                      255,
                                      98,
                                      64,
                                      1,
                                    ),
                                    side: BorderSide(
                                      color: Color.fromRGBO(
                                        255,
                                        98,
                                        64,
                                        1,
                                      ),
                                      width: 1.5, // Толщина обводки
                                    ),
                                  ),
                                  onPressed: () {
                                    showDialog(
                                      context: context,
                                      builder: (context) {
                                        final controllerCode =
                                        TextEditingController();
                                        return AlertDialog(
                                          backgroundColor:
                                          ColorThema.panelColor,
                                          title: Text(
                                            'Присоединение к команде',
                                          ),
                                          content: IntrinsicHeight(
                                            child: Column(
                                              children: [
                                                Align(
                                                  alignment: Alignment
                                                      .centerLeft,
                                                  child: Text(
                                                    'Код приглашения',
                                                    style: TextStyle(
                                                      color:
                                                      Color.fromRGBO(
                                                        164,
                                                        168,
                                                        185,
                                                        1,
                                                      ),
                                                    ),
                                                  ),
                                                ),
                                                SizedBox(height: 6.5),
                                                Container(
                                                  height: 40,
                                                  child: Input(
                                                    controller:
                                                    controllerCode,
                                                    hintText: '',
                                                  ),
                                                ),
                                                SizedBox(height: 15),
                                                Container(
                                                  height: 40,
                                                  width:
                                                  double.infinity,
                                                  child: PrimaryButton(
                                                    text:
                                                    'Присоединиться',
                                                    onPressed: () async {
                                                      try {
                                                        await _dio.post(
                                                          '/api/team/join',
                                                          data: jsonEncode({
                                                            'inviteCode':
                                                            controllerCode
                                                                .text,
                                                          }),
                                                        );
                                                        await _init();
                                                        Navigator.pop(
                                                          context,
                                                        );
                                                      } on DioException catch (
                                                      e
                                                      ) {
                                                        Alerts.showError(
                                                          context,
                                                          e
                                                              .response
                                                              ?.data['error'],
                                                        );
                                                      }
                                                    },
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                        );
                                      },
                                    );
                                  },
                                  child: Text('Присоединится'),
                                ),
                              ),
                              SizedBox(height: 10),
                              Container(
                                height: 40,
                                margin: EdgeInsets.only(
                                  right: 20,
                                  left: 20,
                                ),
                                width: double.infinity,
                                child: PrimaryButton(
                                  text: 'Создать',
                                  onPressed: () {
                                    showDialog(
                                      context: context,
                                      builder: (context) {
                                        final controllerName =
                                        TextEditingController();
                                        final controllerDescription =
                                        TextEditingController();
                                        return AlertDialog(
                                          backgroundColor:
                                          ColorThema.panelColor,
                                          title: Text(
                                            'Создание команды',
                                            style: TextStyle(
                                              color:
                                              ColorThema.colorText,
                                            ),
                                          ),
                                          content: Container(
                                            constraints: BoxConstraints(
                                              maxWidth: 300,
                                            ),
                                            width: double.infinity,
                                            child: IntrinsicHeight(
                                              child: Column(
                                                children: [
                                                  Align(
                                                    alignment: Alignment
                                                        .centerLeft,
                                                    child: Text(
                                                      'Название',
                                                      style: TextStyle(
                                                        color:
                                                        Color.fromRGBO(
                                                          164,
                                                          168,
                                                          185,
                                                          1,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  SizedBox(height: 6.5),
                                                  Container(
                                                    height: 40,
                                                    child: Input(
                                                      controller:
                                                      controllerName,
                                                      hintText: '',
                                                    ),
                                                  ),
                                                  SizedBox(height: 10),
                                                  Align(
                                                    alignment: Alignment
                                                        .centerLeft,
                                                    child: Text(
                                                      'Описание',
                                                      style: TextStyle(
                                                        color:
                                                        Color.fromRGBO(
                                                          164,
                                                          168,
                                                          185,
                                                          1,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  SizedBox(height: 6.5),
                                                  Container(
                                                    height: 40,
                                                    child: Input(
                                                      controller:
                                                      controllerDescription,
                                                      hintText: '',
                                                    ),
                                                  ),
                                                  SizedBox(height: 15),
                                                  Container(
                                                    height: 40,
                                                    width:
                                                    double.infinity,
                                                    child: PrimaryButton(
                                                      text: 'Создать',
                                                      onPressed: () async {
                                                        await _dio.post(
                                                          '/api/team/moderate',
                                                          data: jsonEncode({
                                                            "name":
                                                            controllerName
                                                                .text,
                                                            "description":
                                                            controllerDescription
                                                                .text,
                                                          }),
                                                        );
                                                        await _init();
                                                        Navigator.pop(
                                                          context,
                                                        );
                                                      },
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          ),
                                          actions: [],
                                        );
                                      },
                                    );
                                  },
                                ),
                              ),
                            ],
                          ),
                        if (MediaQuery.of(context).size.width > 450)
                          Row(
                            children: [
                              Expanded(
                                child: Container(
                                  height: 40,
                                  width: double.infinity,
                                  margin: EdgeInsets.only(left: 20),
                                  constraints: BoxConstraints(
                                    maxWidth: 250,
                                  ),
                                  child: OutlinedButton(
                                    style: OutlinedButton.styleFrom(
                                      foregroundColor: Color.fromRGBO(
                                        255,
                                        98,
                                        64,
                                        1,
                                      ),
                                      side: BorderSide(
                                        color: Color.fromRGBO(
                                          255,
                                          98,
                                          64,
                                          1,
                                        ),
                                        width: 1.5, // Толщина обводки
                                      ),
                                    ),
                                    onPressed: () {
                                      showDialog(
                                        context: context,
                                        builder: (context) {
                                          final controllerCode =
                                          TextEditingController();
                                          return AlertDialog(
                                            backgroundColor:
                                            ColorThema.panelColor,
                                            title: Text(
                                              'Присоединение к команде',
                                            ),
                                            content: IntrinsicHeight(
                                              child: Column(
                                                children: [
                                                  Align(
                                                    alignment: Alignment
                                                        .centerLeft,
                                                    child: Text(
                                                      'Код приглашения',
                                                      style: TextStyle(
                                                        color:
                                                        Color.fromRGBO(
                                                          164,
                                                          168,
                                                          185,
                                                          1,
                                                        ),
                                                      ),
                                                    ),
                                                  ),
                                                  SizedBox(height: 6.5),
                                                  Container(
                                                    height: 40,
                                                    child: Input(
                                                      controller:
                                                      controllerCode,
                                                      hintText: '',
                                                    ),
                                                  ),
                                                  SizedBox(height: 15),
                                                  Container(
                                                    height: 40,
                                                    width:
                                                    double.infinity,
                                                    child: PrimaryButton(
                                                      text:
                                                      'Присоединиться',
                                                      onPressed: () async {
                                                        try {
                                                          await _dio.post(
                                                            '/api/team/join',
                                                            data: jsonEncode({
                                                              'inviteCode':
                                                              controllerCode
                                                                  .text,
                                                            }),
                                                          );
                                                          await _init();
                                                          Navigator.pop(
                                                            context,
                                                          );
                                                        } on DioException catch (
                                                        e
                                                        ) {
                                                          Alerts.showError(
                                                            context,
                                                            e
                                                                .response
                                                                ?.data['error'],
                                                          );
                                                        }
                                                      },
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          );
                                        },
                                      );
                                    },
                                    child: Text('Присоединится'),
                                  ),
                                ),
                              ),
                              SizedBox(width: 20),
                              Expanded(
                                child: Container(
                                  height: 40,
                                  margin: EdgeInsets.only(right: 20),
                                  width: double.infinity,
                                  child: PrimaryButton(
                                    text: 'Создать',
                                    onPressed: () {
                                      showDialog(
                                        context: context,
                                        builder: (context) {
                                          final controllerName =
                                          TextEditingController();
                                          final controllerDescription =
                                          TextEditingController();
                                          return AlertDialog(
                                            backgroundColor:
                                            ColorThema.panelColor,
                                            title: Text(
                                              'Создание команды',
                                              style: TextStyle(
                                                color: ColorThema
                                                    .colorText,
                                              ),
                                            ),
                                            content: Container(
                                              constraints:
                                              BoxConstraints(
                                                maxWidth: 300,
                                              ),
                                              width: double.infinity,
                                              child: IntrinsicHeight(
                                                child: Column(
                                                  children: [
                                                    Align(
                                                      alignment: Alignment
                                                          .centerLeft,
                                                      child: Text(
                                                        'Название',
                                                        style: TextStyle(
                                                          color:
                                                          Color.fromRGBO(
                                                            164,
                                                            168,
                                                            185,
                                                            1,
                                                          ),
                                                        ),
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 6.5,
                                                    ),
                                                    Container(
                                                      height: 40,
                                                      child: Input(
                                                        controller:
                                                        controllerName,
                                                        hintText: '',
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 10,
                                                    ),
                                                    Align(
                                                      alignment: Alignment
                                                          .centerLeft,
                                                      child: Text(
                                                        'Описание',
                                                        style: TextStyle(
                                                          color:
                                                          Color.fromRGBO(
                                                            164,
                                                            168,
                                                            185,
                                                            1,
                                                          ),
                                                        ),
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 6.5,
                                                    ),
                                                    Container(
                                                      height: 40,
                                                      child: Input(
                                                        controller:
                                                        controllerDescription,
                                                        hintText: '',
                                                      ),
                                                    ),
                                                    SizedBox(
                                                      height: 15,
                                                    ),
                                                    Container(
                                                      height: 40,
                                                      width: double
                                                          .infinity,
                                                      child: PrimaryButton(
                                                        text: 'Создать',
                                                        onPressed: () async {
                                                          await _dio.post(
                                                            '/api/team/moderate',
                                                            data: jsonEncode({
                                                              "name": controllerName
                                                                  .text,
                                                              "description":
                                                              controllerDescription
                                                                  .text,
                                                            }),
                                                          );
                                                          await _init();
                                                          Navigator.pop(
                                                            context,
                                                          );
                                                        },
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                            ),
                                            actions: [],
                                          );
                                        },
                                      );
                                    },
                                  ),
                                ),
                              ),
                            ],
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          );
  }
}
