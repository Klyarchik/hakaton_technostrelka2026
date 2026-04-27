import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';
import 'package:provider/provider.dart';

import 'input.dart';

class DialogAboutRoute extends StatefulWidget {
  const DialogAboutRoute({
    super.key,
    required this.data,
    required this.update,
    required this.moderation,
  });

  final Map data;
  final Function update;
  final bool moderation;

  @override
  State<DialogAboutRoute> createState() => _DialogAboutRouteState();
}

class _DialogAboutRouteState extends State<DialogAboutRoute> {
  late final Dio _dio;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        padding: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
        margin: EdgeInsets.symmetric(horizontal: 20),
        width: double.infinity,
        decoration: BoxDecoration(
          color: ColorThema.panelColor,
          borderRadius: BorderRadius.circular(15),
          border: Border.all(color: ColorThema.colorBorder, width: 1),
        ),
        constraints: BoxConstraints(
          maxWidth: 500,
          maxHeight: MediaQuery.of(context).size.height * 0.9,
        ),
        child: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.data['title'],
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w700,
                  color: ColorThema.colorText,
                ),
              ),
              SizedBox(height: 5),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 2.5),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  color: widget.data['status'] == 'draft'
                      ? Colors.grey.withAlpha(127)
                      : widget.data['status'] == 'published'
                      ? Colors.lightGreen.withAlpha(127)
                      : widget.data['status'] == 'rejected'
                      ? Colors.redAccent.withAlpha(127)
                      : widget.data['status'] == 'moderation'
                      ? Colors.orangeAccent.withAlpha(127)
                      : Colors.black.withAlpha(127),
                ),
                child: Text(
                  'Статус: ${widget.data['status'] == 'draft'
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
              ),
              SizedBox(height: 5),
              Center(
                child: AspectRatio(
                  aspectRatio: 1,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.network(
                      widget.data['image'],
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              SizedBox(height: 7.5),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Описание: ',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      color: ColorThema.colorText,
                    ),
                  ),
                  Expanded(
                    child: Text(
                      '${widget.data['description']}',
                      softWrap: true,
                      style: TextStyle(color: ColorThema.colorText),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 2.5),
              Container(
                height: 1,
                width: double.infinity,
                color: Colors.black12,
              ),
              SizedBox(height: 2.5),
              Row(
                children: [
                  Text(
                    'Локация: ',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      color: ColorThema.colorText,
                    ),
                  ),
                  Text(
                    widget.data['location_text'],
                    style: TextStyle(color: ColorThema.colorText),
                  ),
                ],
              ),
              SizedBox(height: 2.5),
              Container(
                height: 1,
                width: double.infinity,
                color: Colors.black12,
              ),
              SizedBox(height: 2.5),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Длительность: ',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      color: ColorThema.colorText,
                    ),
                  ),
                  Expanded(
                    child: Text(
                      '${widget.data['duration_minutes']}',
                      softWrap: true,
                      style: TextStyle(
                        color: ColorThema.colorText,
                      ), // Перенос текста
                    ),
                  ),
                ],
              ),
              SizedBox(height: 2.5),
              Container(
                height: 1,
                width: double.infinity,
                color: Colors.black12,
              ),
              SizedBox(height: 2.5),
              Row(
                children: [
                  Text(
                    'Сложность: ',
                    style: TextStyle(color: ColorThema.colorText, fontSize: 12),
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
              if (widget.moderation)
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    TextButton(
                      onPressed: () {
                        showDialog(
                          context: context,
                          builder: (context) {
                            final controllerReason = TextEditingController();
                            return AlertDialog(
                              backgroundColor: ColorThema.panelColor,
                              title: Text(
                                'Причина',
                                style: TextStyle(color: ColorThema.colorText),
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
                                    foregroundColor: ColorThema.colorText,
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
                                    await widget.update();
                                    Navigator.pop(context);
                                    Navigator.pop(context);
                                  },
                                  child: Text('ок'),
                                  style: TextButton.styleFrom(
                                    foregroundColor: Colors.redAccent,
                                  ),
                                ),
                              ],
                            );
                          },
                        );
                      },
                      child: Text('Отклонить'),
                      style: TextButton.styleFrom(
                        foregroundColor: Colors.redAccent,
                      ),
                    ),
                    TextButton(
                      onPressed: () async {
                        await _dio.put(
                          '/api/quest/moderate',
                          data: jsonEncode({
                            "id": widget.data['id'],
                            "status": "published",
                          }),
                        );
                        await widget.update();
                        Navigator.pop(context);
                      },
                      child: Text('Принять'),
                      style: TextButton.styleFrom(
                        foregroundColor: Colors.lightGreen,
                      ),
                    ),
                  ],
                ),
            ],
          ),
        ),
      ),
    );
  }
}
