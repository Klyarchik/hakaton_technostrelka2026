import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:latlong2/latlong.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/card_route.dart';

class Head extends StatefulWidget {
  const Head({super.key});

  @override
  State<Head> createState() => _HeadState();
}

class _HeadState extends State<Head> {
  late final Dio _dio;
  List _routers = [];
  String _selectedValue = '';

  Future<void> _init(String difficultyOption) async {
    final response = await _dio.get(
      '/api/quest/get-quest-by-difficulty',
      queryParameters: {'difficultyOption': difficultyOption},
    );
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
    return Scaffold(
      backgroundColor: ColorThema.backgroundColor,
      drawer: CustomDrawer(currentIndex: 1,),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        iconTheme: IconThemeData(color: ColorThema.colorIcon),
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
        child: Column(
          children: [
            Container(
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
            SizedBox(height: 10,),
            Container(
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
            SizedBox(height: 10),
            Expanded(
              child: Center(
                child: Container(
                  width: 700,
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  child:
                  GridView.builder(
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: MediaQuery.of(context).size.width > 725 ?  3 : MediaQuery.of(context).size.width > 450 ? 2 : 1,
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
                                child: Container(
                                  padding: EdgeInsets.symmetric(
                                    vertical: 10,
                                    horizontal: 20,
                                  ),
                                  margin: EdgeInsets.symmetric(horizontal: 20),
                                  width: double.infinity,
                                  decoration: BoxDecoration(
                                    color: ColorThema.panelColor,
                                    borderRadius: BorderRadius.circular(15),
                                    border: Border.all(
                                      color: ColorThema.colorBorder,
                                      width: 1,
                                    ),
                                  ),
                                  constraints: BoxConstraints(maxWidth: 500),
                                  child: Column(
                                    mainAxisSize: MainAxisSize.min,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        data['title'],
                                        style: TextStyle(
                                          fontSize: 20,
                                          fontWeight: FontWeight.w700,
                                          color: ColorThema.colorText
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Container(
                                        padding: EdgeInsets.symmetric(
                                          horizontal: 10,
                                          vertical: 2.5,
                                        ),
                                        decoration: BoxDecoration(
                                          borderRadius: BorderRadius.circular(
                                            15,
                                          ),
                                          color: data['status'] == 'draft'
                                              ? Colors.grey.withAlpha(127)
                                              : data['status'] == 'published'
                                              ? Colors.lightGreen.withAlpha(127)
                                              : data['status'] == 'rejected'
                                              ? Colors.redAccent.withAlpha(127)
                                              : data['status'] == 'moderation'
                                              ? Colors.orangeAccent.withAlpha(
                                                  127,
                                                )
                                              : Colors.black.withAlpha(127),
                                        ),
                                        child: Text(
                                          'Статус: ${data['status'] == 'draft'
                                              ? 'Черновик'
                                              : data['status'] == 'published'
                                              ? 'Опубликован'
                                              : data['status'] == 'rejected'
                                              ? 'Отменён'
                                              : data['status'] == 'moderation'
                                              ? 'На модерации'
                                              : 'В архиве'}',
                                          style: TextStyle(
                                              color: ColorThema.colorText
                                          ),
                                        ),
                                      ),
                                      SizedBox(height: 5),
                                      Center(
                                        child: AspectRatio(
                                          aspectRatio: 1,
                                          child: ClipRRect(
                                            borderRadius: BorderRadius.circular(
                                              15,
                                            ),
                                            child: Image.network(
                                              data['image'],
                                              fit: BoxFit.cover,
                                            ),
                                          ),
                                        ),
                                      ),
                                      SizedBox(height: 7.5),
                                      Row(
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Описание: ',
                                            style: TextStyle(
                                              fontWeight: FontWeight.w700,
                                                color: ColorThema.colorText
                                            ),
                                          ),
                                          Expanded(
                                            child: Text(
                                              '${data['description']}',
                                              softWrap: true,
                                              style: TextStyle(
                                                  color: ColorThema.colorText
                                              ),
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
                                                color: ColorThema.colorText
                                            ),
                                          ),
                                          Text(data['location_text'], style: TextStyle(
                                              color: ColorThema.colorText
                                          ),),
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
                                        crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            'Длительность: ',
                                            style: TextStyle(
                                              fontWeight: FontWeight.w700,
                                                color: ColorThema.colorText
                                            ),
                                          ),
                                          Expanded(
                                            child: Text(
                                              '${data['duration_minutes']}',
                                              softWrap: true,
                                              style: TextStyle(
                                                  color: ColorThema.colorText
                                              ),// Перенос текста
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
                                            style: TextStyle(
                                              color: ColorThema.colorText,
                                              fontSize: 12,
                                            ),
                                          ),
                                          Text(
                                            '☆',
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: data['difficulty'] >= 1
                                                  ? Color.fromRGBO(255, 159, 90, 1)
                                                  : ColorThema.colorText,
                                            ),
                                          ),
                                          SizedBox(width: 4,),
                                          Text(
                                            '☆',
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: data['difficulty'] >= 2
                                                  ? Color.fromRGBO(255, 159, 90, 1)
                                                  : ColorThema.colorText,
                                            ),
                                          ),
                                          SizedBox(width: 4,),
                                          Text(
                                            '☆',
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: data['difficulty'] >= 3
                                                  ? Color.fromRGBO(255, 159, 90, 1)
                                                  : ColorThema.colorText,
                                            ),
                                          ),
                                          SizedBox(width: 4,),
                                          Text(
                                            '☆',
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: data['difficulty'] >= 4
                                                  ? Color.fromRGBO(255, 159, 90, 1)
                                                  : ColorThema.colorText,
                                            ),
                                          ),
                                          SizedBox(width: 4,),
                                          Text(
                                            '☆',
                                            style: TextStyle(
                                              fontSize: 14,
                                              color: data['difficulty'] >= 5
                                                  ? Color.fromRGBO(255, 159, 90, 1)
                                                  : ColorThema.colorText,
                                            ),
                                          )
                                        ],
                                      ),
                                    ],
                                  ),
                                ),
                              );
                            },
                          );
                          // Navigator.pushNamed(context, '/about_route', arguments: {
                          //   'id': _routers[i]['id']
                          // });
                        },
                      );
                    },
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
