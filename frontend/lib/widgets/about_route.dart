import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/widgets/create_session.dart';
import 'package:provider/provider.dart';

import 'alerts.dart';
import 'input.dart';

class AboutRoute extends StatefulWidget {
  AboutRoute({
    super.key,
    required this.data,
    required this.isSession,
    this.isModeration = false,
    this.update,
    this.isHidden = false,
  });

  final Map data;
  final bool isSession;
  final bool isModeration;
  final Function? update;
  final bool isHidden;

  @override
  State<AboutRoute> createState() => _AboutRouteState();
}

class _AboutRouteState extends State<AboutRoute> {
  late final Dio _dio;

  @override
  void initState() {
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: 700, maxHeight: 450),
      margin: EdgeInsets.symmetric(horizontal: 20),
      decoration: BoxDecoration(
        color: ColorThema.panelColor,
        borderRadius: BorderRadius.circular(15),
        border: Border.all(color: ColorThema.colorBorder, width: 1),
      ),
      width: double.infinity,
      child: Stack(
        children: [
          Row(
            children: [
              if (MediaQuery.of(context).size.width > 590)
                Container(
                  width: 200,
                  height: double.infinity,
                  child: Container(
                    margin: EdgeInsets.only(top: 6, left: 6, bottom: 6),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(15),
                        bottomLeft: Radius.circular(15),
                      ),
                      border: Border.all(color: Colors.grey, width: 0.4),
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(15),
                        bottomLeft: Radius.circular(15),
                      ),
                      child: Image.network(
                        defaultTargetPlatform == TargetPlatform.android ? widget.data['image'].replaceAll('localhost', '10.0.2.2') : widget.data['image'],
                        fit: BoxFit.cover,
                        width: 200,
                        height: double.infinity,
                      ),
                    ),
                  ),
                ),
              Expanded(
                child: SingleChildScrollView(
                  // 👈 Добавляем скролл
                  child: Container(
                    padding: EdgeInsets.all(15),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        if (widget.isHidden)
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              PopupMenuButton(
                                color: ColorThema.backgroundColor,
                                icon: Icon(
                                  Icons.more_horiz,
                                  color: ColorThema.colorIcon,
                                ),
                                itemBuilder: (context) => [
                                  PopupMenuItem(
                                    value: 'archive',
                                    child: Text(
                                      'В архив',
                                      style: TextStyle(
                                        color: ColorThema.colorText,
                                      ),
                                    ),
                                  ),
                                  PopupMenuItem(
                                    value: 'hide',
                                    child: Text(
                                      'В черновик',
                                      style: TextStyle(
                                        color: ColorThema.colorText,
                                      ),
                                    ),
                                  ),
                                ],
                                onSelected: (value) async {
                                  if (value != null) {
                                    await _dio.put(
                                      '/api/quest/hidden',
                                      data: {
                                        'questId': widget.data['id'],
                                        'action': value,
                                      },
                                    );
                                    await widget.update!();
                                    Navigator.pop(context);
                                  }
                                },
                              ),
                            ],
                          ),
                        if (widget.isModeration)
                          Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              PopupMenuButton(
                                color: ColorThema.backgroundColor,
                                icon: Icon(
                                  Icons.more_horiz,
                                  color: ColorThema.colorIcon,
                                ),
                                itemBuilder: (context) => [
                                  PopupMenuItem(
                                    value: 'rejected',
                                    child: Text(
                                      'Отклонить',
                                      style: TextStyle(
                                        color: ColorThema.colorText,
                                      ),
                                    ),
                                  ),
                                  PopupMenuItem(
                                    value: 'published',
                                    child: Text(
                                      'Принять',
                                      style: TextStyle(
                                        color: ColorThema.colorText,
                                      ),
                                    ),
                                  ),
                                ],
                                onSelected: (value) async {
                                  print(value);
                                  if (value == 'rejected') {
                                    showDialog(
                                      context: context,
                                      builder: (context) {
                                        final controllerReason =
                                            TextEditingController();
                                        return AlertDialog(
                                          backgroundColor:
                                              ColorThema.panelColor,
                                          title: Text(
                                            'Причина',
                                            style: TextStyle(
                                              color: ColorThema.colorText,
                                            ),
                                          ),
                                          content: SizedBox(
                                            height: 50,
                                            width: 300,
                                            child: Input(
                                              controller: controllerReason,
                                              hintText: 'Текст',
                                            ),
                                          ),
                                          actions: [
                                            TextButton(
                                              onPressed: () {
                                                Navigator.pop(context);
                                              },
                                              child: Text('Отмена'),
                                              style: TextButton.styleFrom(
                                                foregroundColor:
                                                    ColorThema.colorText,
                                              ),
                                            ),
                                            TextButton(
                                              onPressed: () async {
                                                await _dio.put(
                                                  '/api/quest/moderate',
                                                  data: jsonEncode({
                                                    "id": widget.data['id'],
                                                    "status": "rejected",
                                                    'rejection_reason':
                                                        controllerReason.text,
                                                  }),
                                                );
                                                await widget.update!();
                                                Navigator.pop(context);
                                                Navigator.pop(context);
                                              },
                                              child: Text('ок'),
                                              style: TextButton.styleFrom(
                                                foregroundColor:
                                                    Colors.redAccent,
                                              ),
                                            ),
                                          ],
                                        );
                                      },
                                    );
                                  } else if (value == 'published') {
                                    await _dio.put(
                                      '/api/quest/moderate',
                                      data: jsonEncode({
                                        "id": widget.data['id'],
                                        "status": 'published',
                                      }),
                                    );
                                    Navigator.pop(context);
                                    widget.update!();
                                  }
                                },
                              ),
                            ],
                          ),
                        if (MediaQuery.of(context).size.width < 590)
                          Container(
                            width: 120,
                            height: 120,
                            child: Container(
                              margin: EdgeInsets.only(
                                top: 6,
                                left: 6,
                                bottom: 6,
                              ),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(15),
                                child: Image.network(
                                  defaultTargetPlatform == TargetPlatform.android ? widget.data['image'].replaceAll('localhost', '10.0.2.2') : widget.data['image'],
                                  fit: BoxFit.cover,
                                  width: 120,
                                  height: 120,
                                ),
                              ),
                            ),
                          ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Expanded(
                              child: Text(
                                widget.data['title'],
                                style: TextStyle(
                                  color: ColorThema.colorText,
                                  fontSize: 18,
                                ),
                                overflow: TextOverflow.ellipsis,
                              ),
                            ),
                            SizedBox(width: 10),
                            Container(
                              padding: EdgeInsets.symmetric(
                                horizontal: 10,
                                vertical: 2.5,
                              ),
                              decoration: BoxDecoration(
                                color: Color.fromRGBO(255, 159, 90, 0.5),
                                borderRadius: BorderRadius.circular(15),
                              ),
                              child: Text(
                                '${widget.data['duration_minutes'].toString()} мин',
                                style: TextStyle(color: ColorThema.colorText),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 10),
                        Container(
                          padding: EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 2.5,
                          ),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(15),
                            color: widget.data['status'] == 'draft'
                                ? Colors.grey.withAlpha(127)
                                : widget.data['status'] == 'published'
                                ? Colors.lightGreen.withAlpha(127)
                                : widget.data['status'] == 'rejected'
                                ? Colors.redAccent.withAlpha(127)
                                : widget.data['status'] == 'moderation'
                                ? Colors.yellowAccent.withAlpha(127)
                                : Colors.orangeAccent.withAlpha(127),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                '• ${widget.data['status'] == 'draft'
                                    ? 'Черновик'
                                    : widget.data['status'] == 'published'
                                    ? 'Опубликован'
                                    : widget.data['status'] == 'rejected'
                                    ? 'Отменён'
                                    : widget.data['status'] == 'moderation'
                                    ? 'На модерации'
                                    : 'В архиве'}',
                                style: TextStyle(color: ColorThema.colorText),
                              ),
                              if (widget.data['status'] == 'rejected')
                                Text.rich(
                                  TextSpan(
                                    children: [
                                      TextSpan(
                                        text: 'Причина: ',
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          color: ColorThema.colorText,
                                        ),
                                      ),
                                      TextSpan(
                                        text: widget.data['rejection_reason'],
                                        style: TextStyle(
                                          fontWeight: FontWeight.normal,
                                          color: ColorThema.colorText,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                            ],
                          ),
                        ),
                        SizedBox(height: 15),
                        Row(
                          children: [
                            Icon(
                              Icons.description,
                              color: Color.fromRGBO(164, 168, 185, 1),
                            ),
                            SizedBox(width: 5),
                            Text(
                              'Описание',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 5),
                        Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            border: Border.all(
                              color: ColorThema.colorBorder,
                              width: 1,
                            ),
                            borderRadius: BorderRadius.circular(15),
                            color: ColorThema.backgroundColor,
                          ),
                          padding: EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 8,
                          ),
                          child: Text(
                            widget.data['description'],
                            style: TextStyle(color: ColorThema.colorText),
                          ),
                        ),
                        SizedBox(height: 15),
                        Row(
                          children: [
                            Icon(
                              Icons.location_on,
                              color: Color.fromRGBO(164, 168, 185, 1),
                            ),
                            SizedBox(width: 5),
                            Text(
                              'Локация',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 5),
                        Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            border: Border.all(
                              color: ColorThema.colorBorder,
                              width: 1,
                            ),
                            borderRadius: BorderRadius.circular(15),
                            color: ColorThema.backgroundColor,
                          ),
                          padding: EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 8,
                          ),
                          child: Text(
                            widget.data['location_text'],
                            style: TextStyle(color: ColorThema.colorText),
                          ),
                        ),
                        SizedBox(height: 15),
                        Row(
                          children: [
                            Icon(
                              Icons.ssid_chart,
                              color: Color.fromRGBO(164, 168, 185, 1),
                            ),
                            SizedBox(width: 5),
                            Text(
                              'Сложность',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height: 5),
                        Container(
                          width: double.infinity,
                          decoration: BoxDecoration(
                            border: Border.all(
                              color: ColorThema.colorBorder,
                              width: 1,
                            ),
                            borderRadius: BorderRadius.circular(15),
                            color: ColorThema.backgroundColor,
                          ),
                          padding: EdgeInsets.symmetric(
                            horizontal: 16,
                            vertical: 8,
                          ),
                          child: Row(
                            children: [
                              Text(
                                'Сложность: ',
                                style: TextStyle(
                                  color: ColorThema.colorText,
                                  fontSize: 12,
                                ),
                              ),
                              Text(
                                '☆',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: widget.data['difficulty'] >= 1
                                      ? Color.fromRGBO(255, 159, 90, 1)
                                      : ColorThema.colorText,
                                ),
                              ),
                              SizedBox(width: 4),
                              Text(
                                '☆',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: widget.data['difficulty'] >= 2
                                      ? Color.fromRGBO(255, 159, 90, 1)
                                      : ColorThema.colorText,
                                ),
                              ),
                              SizedBox(width: 4),
                              Text(
                                '☆',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: widget.data['difficulty'] >= 3
                                      ? Color.fromRGBO(255, 159, 90, 1)
                                      : ColorThema.colorText,
                                ),
                              ),
                              SizedBox(width: 4),
                              Text(
                                '☆',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: widget.data['difficulty'] >= 4
                                      ? Color.fromRGBO(255, 159, 90, 1)
                                      : ColorThema.colorText,
                                ),
                              ),
                              SizedBox(width: 4),
                              Text(
                                '☆',
                                style: TextStyle(
                                  fontSize: 14,
                                  color: widget.data['difficulty'] >= 5
                                      ? Color.fromRGBO(255, 159, 90, 1)
                                      : ColorThema.colorText,
                                ),
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height: 20), // Отступ перед кнопками
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            if (widget.isSession)
                              Container(
                                height: 40,
                                margin: EdgeInsets.only(right: 20),
                                child: FilledButton(
                                  onPressed: () async {
                                    Navigator.pop(context);
                                    showDialog(
                                      context: context,
                                      builder: (context) {
                                        return Center(
                                          child: CreateSession(
                                            id: widget.data['id'],
                                          ),
                                        );
                                      },
                                    );
                                  },
                                  child: Text('Записаться'),
                                  style: FilledButton.styleFrom(
                                    backgroundColor: Color.fromRGBO(
                                      255,
                                      98,
                                      64,
                                      1,
                                    ),
                                  ),
                                ),
                              ),
                            SizedBox(
                              height: 40,
                              child: FilledButton(
                                onPressed: () {
                                  Navigator.pop(context);
                                },
                                child: Text('Закрыть'),
                                style: FilledButton.styleFrom(
                                  backgroundColor: ColorThema.colorBorder,
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
            ],
          ),
        ],
      ),
    );
  }
}
