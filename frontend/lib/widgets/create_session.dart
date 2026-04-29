import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import 'alerts.dart';

class CreateSession extends StatefulWidget {
  const CreateSession({super.key, required this.id});

  final int id;

  @override
  State<CreateSession> createState() => _CreateSessionState();
}

class _CreateSessionState extends State<CreateSession> {
  String? selectedMode;
  String? selectedTransportMode;
  bool _can = false;
  late final Dio _dio;

  void _checkCan() {
    if (selectedMode != null && selectedTransportMode != null) {
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
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 20),
      padding: EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: ColorThema.colorBorder, width: 1),
        color: ColorThema.panelColor,
      ),
      constraints: BoxConstraints(maxWidth: 400),
      child: IntrinsicHeight(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Запись на квест',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w700,
                color: ColorThema.colorText,
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Тип',
              style: TextStyle(color: Color.fromRGBO(164, 168, 185, 1)),
            ),
            SizedBox(height: 5),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(30),
                border: Border.all(color: ColorThema.colorBorder, width: 1),
                color: ColorThema.panelColor,
              ),
              height: 40,
              child: Material(
                color: Colors.transparent,
                child: DropdownButton<String>(
                  dropdownColor: ColorThema.backgroundColor,
                  value: selectedMode,
                  isExpanded: true,
                  underline: SizedBox(),
                  items: [
                    DropdownMenuItem(
                      value: 'solo',
                      child: Text(
                        'Одиночный',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'team',
                      child: Text(
                        'Командный',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                  ],
                  onChanged: (value) {
                    if (value != null) {
                      setState(() {
                        selectedMode = value;
                      });
                      _checkCan();
                    }
                  },
                ),
              ),
            ),
            SizedBox(height: 10),
            Text(
              'Вид транспорта',
              style: TextStyle(color: Color.fromRGBO(164, 168, 185, 1)),
            ),
            SizedBox(height: 5),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(30),
                border: Border.all(color: ColorThema.colorBorder, width: 1),
                color: ColorThema.panelColor,
              ),
              height: 40,
              child: Material(
                color: Colors.transparent,
                child: DropdownButton<String>(
                  value: selectedTransportMode,
                  dropdownColor: ColorThema.backgroundColor,
                  isExpanded: true,
                  underline: const SizedBox(),
                  items: [
                    DropdownMenuItem(
                      value: 'walk',
                      child: Text(
                        'Пешком',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'public_transport',
                      child: Text(
                        'На общественном транспорте',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'car',
                      child: Text(
                        'На личном транспорте',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'offroad',
                      child: Text(
                        'Только по грунтовкам',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                    DropdownMenuItem(
                      value: 'no_roads',
                      child: Text(
                        'Без дорог',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                  ],
                  onChanged: (value) {
                    if (value != null) {
                      setState(() {
                        selectedTransportMode = value;
                      });
                      _checkCan();
                    }
                  },
                ),
              ),
            ),
            SizedBox(height: 15),
            Container(
              width: double.infinity,
              height: 40,
              child: PrimaryButton(
                onPressed: _can
                    ? () async {
                        try {
                          await _dio.post(
                            '/api/session/new',
                            data: jsonEncode({
                              'questIdStr': widget.id,
                              'mode': selectedMode,
                              'transportMode': selectedTransportMode
                            }),
                          );
                          Navigator.pushNamed(context, '/session');
                        } on DioException catch (e) {
                          Alerts.showError(context, e.response!.data['error']);
                        }
                      }
                    : null,
                text: 'Записаться',
              ),
            ),
            SizedBox(height: 15),
            Container(
              width: double.infinity,
              height: 40,
              child: FilledButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                child: Text('Отмена'),
                style: FilledButton.styleFrom(
                  backgroundColor: ColorThema.colorBorder,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
