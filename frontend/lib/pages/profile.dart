import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:frontend/widgets/alerts.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:frontend/widgets/input.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';

class Profile extends StatefulWidget {
  const Profile({super.key});

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  late final Dio _dio;
  final controllerNickname = TextEditingController();
  String _imageSrc = '';
  bool _isLoaded = false;
  bool _isCan = true;
  final _picker = ImagePicker();
  var _bytes;

  Future<void> _init() async {
    final response = await _dio.get('/api/user/me');
    setState(() {
      controllerNickname.text = response.data['nickname'];
      _imageSrc = response.data['avatar'];
      _isLoaded = true;
    });
  }

  void _check() {
    if (controllerNickname.text.isNotEmpty) {
      setState(() {
        _isCan = true;
      });
    } else {
      setState(() {
        _isCan = false;
      });
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
    controllerNickname.addListener(() => _check());
    _init();
  }

  @override
  Widget build(BuildContext context) {
    return _isLoaded
        ? Scaffold(
            drawer: CustomDrawer(currentIndex: 0),
            backgroundColor: ColorThema.backgroundColor,
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
              child: Stack(
                children: [
                  Container(
                    padding: EdgeInsets.only(
                      bottom: AppBar().preferredSize.height,
                      left: 15,
                      right: 15
                    ),
                    width: double.infinity,
                      height: double.infinity,
                      child: SvgPicture.asset('images/fon.svg', color: ColorThema.backIcon,)),
                  SizedBox(
                    child: ListView(
                      children: [
                        SizedBox(
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
                                child: SizedBox(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Container(
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
                                                SizedBox(width: 20),
                                                Icon(
                                                  Icons.person,
                                                  color: Color.fromRGBO(
                                                    255,
                                                    159,
                                                    90,
                                                    1,
                                                  ),
                                                ),
                                                SizedBox(width: 5),
                                                Text(
                                                  'Мой профиль',
                                                  style: TextStyle(
                                                    color: ColorThema.colorText,
                                                    fontWeight: FontWeight.w600,
                                                  ),
                                                ),
                                              ],
                                            ),
                                            Container(
                                              margin: EdgeInsets.only(right: 20),
                                              child: IconButton(
                                                onPressed: () async {
                                                  final storage =
                                                      FlutterSecureStorage();
                                                  await storage.delete(
                                                    key: 'token',
                                                  );
                                                  await _dio.delete('/api/token/device');
                                                  Navigator.pushNamed(
                                                    context,
                                                    '/entrance',
                                                  );
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
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      SizedBox(height: 10),
                                      GestureDetector(
                                        child: Center(
                                          child: SizedBox(
                                            width: 100,
                                            height: 100,
                                            child: ClipRRect(
                                              borderRadius: BorderRadius.circular(
                                                150,
                                              ),
                                              child: _bytes != null
                                                  ? Image.memory(
                                                      _bytes,
                                                      fit: BoxFit.cover,
                                                    )
                                                  : Image.network(
                                                      defaultTargetPlatform !=
                                                              TargetPlatform.android
                                                          ? _imageSrc
                                                          : _imageSrc.replaceAll(
                                                              'localhost',
                                                              '10.0.2.2',
                                                            ),
                                                      fit: BoxFit.cover,
                                                    ),
                                            ),
                                          ),
                                        ),
                                        onTap: () async {
                                          XFile? file = await _picker.pickImage(
                                            source: ImageSource.gallery,
                                          );
                                          if (file != null) {
                                            var newBytes = await file.readAsBytes();
                                            setState(() {
                                              _bytes = newBytes;
                                            });
                                          }
                                        },
                                      ),
                                      SizedBox(height: 10),
                                      Container(
                                        margin: EdgeInsets.only(left: 20),
                                        child: Align(
                                          alignment: Alignment.centerLeft,
                                          child: Text(
                                            'Никнейм',
                                            style: TextStyle(
                                              color: Color.fromRGBO(
                                                164,
                                                168,
                                                185,
                                                1,
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      SizedBox(height: 6.5),
                                      Container(
                                        width: double.infinity,
                                        height: 40,
                                        margin: EdgeInsets.symmetric(
                                          horizontal: 20,
                                        ),
                                        child: Input(
                                          controller: controllerNickname,
                                          hintText: '',
                                        ),
                                      ),
                                      SizedBox(height: 15),
                                      Container(
                                        width: double.infinity,
                                        height: 40,
                                        margin: EdgeInsets.symmetric(
                                          horizontal: 20,
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
                                              color: Color.fromRGBO(255, 98, 64, 1),
                                              width: 1.5, // Толщина обводки
                                            ),
                                          ),
                                          onPressed: () {
                                            Navigator.pushNamed(
                                              context,
                                              '/change_password',
                                            );
                                          },
                                          child: Text('Изменить пароль'),
                                        ),
                                      ),
                                      SizedBox(height: 15),
                                      Container(
                                        height: 40,
                                        width: double.infinity,
                                        margin: EdgeInsets.symmetric(
                                          horizontal: 20,
                                        ),
                                        child: PrimaryButton(
                                          text: 'Сохранить',
                                          onPressed: _isCan
                                              ? () async {
                                                  try {
                                                    await _dio.put(
                                                      '/api/user/changeData',
                                                      data: FormData.fromMap({
                                                        'nickname':
                                                            controllerNickname.text,
                                                        'avatar': _bytes != null
                                                            ? MultipartFile.fromBytes(
                                                                _bytes,
                                                                filename:
                                                                    'image.png',
                                                              )
                                                            : null,
                                                      }),
                                                    );
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
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          )
        : Scaffold(
            backgroundColor: Color.fromRGBO(230, 229, 229, 0.4),
            body: Center(child: CircularProgressIndicator(color: Colors.blue)),
          );
  }
}
