import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_polyline_points/flutter_polyline_points.dart';
import 'package:frontend/widgets/alerts.dart';
import 'package:frontend/widgets/input.dart';
import 'package:frontend/widgets/left_create_route.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:image_picker/image_picker.dart';
import 'package:latlong2/latlong.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/theme_button.dart';

class CreateRoute extends StatefulWidget {
  const CreateRoute({super.key});

  @override
  State<CreateRoute> createState() => _CreateRouteState();
}

class _CreateRouteState extends State<CreateRoute> {
  final _points = [];
  List<LatLng> _routePoints = [];
  final _controllerName = TextEditingController();
  final _controllerDescription = TextEditingController();
  final _controllerPlace = TextEditingController();
  final _controllerLevel = TextEditingController();
  final _controllerTime = TextEditingController();
  bool _isHidden = false;
  List<Map> _markers = [];
  var _bytes;
  List controllersCheckPoint = [];
  bool _can = false;
  late final Dio _dio;

  Future<void> _createRoute() async {
    int? number = int.tryParse(_controllerTime.text);
    if (_controllerName.text.length < 5) {
      Alerts.showError(
          context, 'Название квеста должно быть минимум 5 символов');
    } else if (_controllerDescription.text.length < 30) {
      Alerts.showError(
          context, 'Описание квеста должно быть минимум 30 символов');
    } else if (_controllerPlace.text.isEmpty) {
      Alerts.showError(context, 'Место обязательно');
    } else if (_controllerLevel.text != '1' && _controllerLevel.text != '2' &&
        _controllerLevel.text != '3' && _controllerLevel.text != '4' &&
        _controllerLevel.text != '5') {
      Alerts.showError(context, 'Введите корректную сложность');
    } else if (number == null) {
      Alerts.showError(context, 'Введите корректное время');
    } else if (_bytes == null) {
      Alerts.showError(context, 'Загрузите изображение');
    } else if (_points.length < 3){
      Alerts.showError(context, 'У квеста должно быть миниму 3 чекпоинта');
    } else {
      bool canCreate = true;
      for (final point in _points) {
        if (point['name'].text.length < 5) {
          Alerts.showError(
              context, 'У чекпоинта название должно быть минимум 5 символов');
          canCreate = false;
          break;
        } else if (point['question'].text.length < 30) {
          Alerts.showError(
              context, 'У чекпоинта вопрос должен быть минимум 30 символов');
          canCreate = false;
          break;
        } else if (point['answer'].text.length == 0) {
          Alerts.showError(context, 'У чекпоинта ответ обязателен');
          canCreate = false;
          break;
        }
      }
      if (canCreate){
        final response = await _dio.post(
          '/api/quest/create',
          data: FormData.fromMap({
            "title": _controllerName.text,
            "description": _controllerDescription.text,
            "location_text": _controllerPlace.text,
            "difficulty": int.parse(
              _controllerLevel.text,
            ),
            "duration_minutes": int.parse(
              _controllerTime.text,
            ),
            "is_hidden": _isHidden,
            'image': MultipartFile.fromBytes(
              _bytes,
              filename: 'image.png',
            ),
          }),
        );
        int questId = response.data['quest']['id'];
        for (int i = 0; i < _points.length; ++i) {
          print({
            'quest_id': questId,
            'title': _points[i]['name'].text,
            'task_description':
            _points[i]['question'].text,
            'code_word': _points[i]['answer'].text,
            'latitude': _points[i]['latitude'],
            'longitude': _points[i]['longitude'],
          });
          await _dio.post(
            '/api/checkpoint/new',
            data: jsonEncode({
              'quest_id': questId,
              'title': _points[i]['name'].text,
              'task_description':
              _points[i]['question'].text,
              'code_word': _points[i]['answer'].text,
              'latitude': _points[i]['latitude'],
              'longitude': _points[i]['longitude'],
            }),
          );
        }
        Navigator.pop(context);
      }
    }
  }

  void _checkCan() {
    if (_controllerName.text.isNotEmpty &&
        _controllerDescription.text.isNotEmpty &&
        _controllerPlace.text.isNotEmpty &&
        _controllerLevel.text.isNotEmpty &&
        _controllerTime.text.isNotEmpty &&
        _points.length > 2) {
      setState(() {
        _can = true;
      });
    } else {
      setState(() {
        _can = false;
      });
    }
  }

  Future<void> _buildRoute() async {
    _routePoints = [];
    for (int i = 0; i < _points.length; ++i) {
      if (i + 1 != _points.length) {
        final url =
            'http://router.project-osrm.org/route/v1/driving/'
            '${_points[i]['longitude']},${_points[i]['latitude']};'
            '${_points[i + 1]['longitude']},${_points[i + 1]['latitude']}'
            '?overview=full&geometries=polyline';
        final dio = Dio();
        final response = await dio.get(url);
        final encodedPolyline = response.data['routes'][0]['geometry'];
        final points = PolylinePoints.decodePolyline(encodedPolyline);
        for (var point in points) {
          _routePoints.add(LatLng(point.latitude, point.longitude));
        }
      }
    }
    setState(() {});
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _dio = Provider.of<Dio>(context, listen: false);
    _controllerName.addListener(() => _checkCan());
    _controllerDescription.addListener(() => _checkCan());
    _controllerPlace.addListener(() => _checkCan());
    _controllerLevel.addListener(() => _checkCan());
    _controllerTime.addListener(() => _checkCan());
  }

  @override
  Widget build(BuildContext context) {
    List<Marker> markers = [];
    for (int i = 0; i < _markers.length; ++i) {
      markers.add(
        Marker(
          point: LatLng(_markers[i]['latitude'], _markers[i]['longitude']),
          child: Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              color: Color.fromRGBO(
                255,
                159,
                90,
                1,
              ),
              shape: BoxShape.circle,
            ),
            child: Center(
              child: Text(
                (i + 1).toString(),
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        ),
      );
    }
    return Scaffold(
      backgroundColor: ColorThema.backgroundColor,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        leading: MediaQuery
            .of(context)
            .size
            .width > 540
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
      body:
      MediaQuery
          .of(context)
          .size
          .width < 1200 ? ListView(
        children: [
          Center(
            child: Container(
              width: 550,
              decoration: BoxDecoration(
                color: ColorThema.panelColor,
                borderRadius: BorderRadius.circular(15),
                border: Border.all(color: ColorThema.colorBorder, width: 1),
              ),
              margin: EdgeInsets.symmetric(horizontal: 20),
              padding: EdgeInsets.all(20),
              child: IntrinsicHeight(
                child: Column(
                  children: [
                    if (MediaQuery
                        .of(context)
                        .size
                        .width > 450)
                      Container(
                        width: 550,
                        child:
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                              children: [
                                Icon(Icons.map, color: ColorThema.colorText),
                                SizedBox(width: 10),
                                Text(
                                  'Чекпоинты',
                                  style: TextStyle(
                                    fontSize: 18,
                                    color: ColorThema.colorText,
                                  ),
                                ),
                              ],
                            ),
                            Container(
                              padding: EdgeInsets.symmetric(
                                horizontal: 10,
                                vertical: 2.5,
                              ),
                              decoration: BoxDecoration(
                                color: Color.fromRGBO(255, 159, 90, 0.5),
                                borderRadius: BorderRadius.circular(15),
                              ),
                              child: Row(
                                children: [
                                  Icon(Icons.ads_click, size: 12),
                                  SizedBox(width: 5),
                                  Text(
                                    'Клик на карту - новый чекпоинт',
                                    style: TextStyle(fontSize: 12),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    if (MediaQuery
                        .of(context)
                        .size
                        .width < 450)
                      Column(
                        children: [
                          Row(
                            children: [
                              Icon(Icons.map, color: ColorThema.colorText),
                              SizedBox(width: 10),
                              Text(
                                'Чекпоинты',
                                style: TextStyle(
                                  fontSize: 18,
                                  color: ColorThema.colorText,
                                ),
                              ),
                            ],
                          ),
                          Container(
                            padding: EdgeInsets.symmetric(
                              horizontal: 10,
                              vertical: 2.5,
                            ),
                            decoration: BoxDecoration(
                              color: Color.fromRGBO(255, 159, 90, 0.5),
                              borderRadius: BorderRadius.circular(15),
                            ),
                            child: Row(
                              children: [
                                Icon(Icons.ads_click, size: 12),
                                SizedBox(width: 5),
                                Text(
                                  'Клик на карту - новый чекпоинт',
                                  style: TextStyle(fontSize: 12),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    SizedBox(height: 10),
                    SizedBox(
                      width: 550,
                      height: 400,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(15),
                        child:
                        FlutterMap(
                          options: MapOptions(
                            initialCenter: LatLng(56.324379, 43.984067),
                            initialZoom: 15,
                            onTap: (tapPosition, point) async {
                              _points.add({
                                'latitude': point.latitude,
                                'longitude': point.longitude,
                                'name': TextEditingController(),
                                'question': TextEditingController(),
                                'answer': TextEditingController(),
                              });
                              _checkCan();
                              _markers.add({
                                'latitude': point.latitude,
                                'longitude': point.longitude,
                              });
                              await _buildRoute();
                            },
                          ),
                          children: [
                            TileLayer(
                              urlTemplate:
                              'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                              //'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                              userAgentPackageName: 'com.example.app',
                            ),
                            PolylineLayer(
                              polylines: [
                                if (_routePoints.isNotEmpty)
                                  Polyline(
                                    points: _routePoints,
                                    color: Color.fromRGBO(255, 159, 90, 1),
                                    strokeWidth: 5.0,
                                  ),
                              ],
                            ),
                            MarkerLayer(markers: markers),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          Center(
            child: Container(
              width: 550,
              decoration: BoxDecoration(
                border: Border.all(color: ColorThema.colorBorder, width: 1),
                color: ColorThema.panelColor,
                borderRadius: BorderRadius.circular(15),
              ),
              margin: EdgeInsets.only(right: 20, top: 20, bottom: 20, left: 20),
              padding: EdgeInsets.symmetric(vertical: 20),
              child: ListView(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                children: [
                  Container(
                    margin: EdgeInsets.only(left: 20),
                    child: Text(
                      'Основная информация',
                      style: TextStyle(
                        color: ColorThema.colorText,
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                  Container(
                    margin: EdgeInsets.only(left: 20),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'Изображение',
                        style: TextStyle(
                          color: Color.fromRGBO(164, 168, 185, 1),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 6.5),
                  Container(
                    margin: EdgeInsets.only(left: 20),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: GestureDetector(
                        child: Container(
                          height: 120,
                          width: 120,
                          decoration: BoxDecoration(
                            color: Colors.grey,
                            borderRadius: BorderRadius.circular(15),
                          ),
                          child: _bytes != null
                              ? ClipRRect(
                            borderRadius: BorderRadius.circular(15),
                            child: Image.memory(_bytes, fit: BoxFit.cover),
                          )
                              : Icon(Icons.add, color: Colors.white),
                        ),
                        onTap: () async {
                          final picker = ImagePicker();
                          XFile? file = await picker.pickImage(
                            source: ImageSource.gallery,
                          );
                          if (file != null) {
                            final newBytes = await file.readAsBytes();
                            setState(() {
                              _bytes = newBytes;
                            });
                          }
                        },
                      ),
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    children: [
                      SizedBox(width: 20),
                      Expanded(
                        child: Column(
                          children: [
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Название',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                            SizedBox(height: 6.5),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _controllerName,
                                hintText: '',
                              ),
                            ),
                          ],
                        ),
                      ),
                      SizedBox(width: 20),
                      Expanded(
                        child: Column(
                          children: [
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Место',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                            SizedBox(height: 6.5),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _controllerPlace,
                                hintText: '',
                              ),
                            ),
                          ],
                        ),
                      ),
                      SizedBox(width: 20),
                    ],
                  ),
                  SizedBox(height: 10),
                  Row(
                    children: [
                      SizedBox(width: 20),
                      Expanded(
                        child: Column(
                          children: [
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Уровень сложности',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                            SizedBox(height: 6.5),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _controllerLevel,
                                hintText: '',
                              ),
                            ),
                          ],
                        ),
                      ),
                      SizedBox(width: 20),
                      Expanded(
                        child:
                        Column(
                          children: [
                            Align(
                              alignment: Alignment.centerLeft,
                              child: Text(
                                'Длительность',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                            ),
                            SizedBox(height: 6.5),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _controllerTime,
                                hintText: '',
                              ),
                            )
                          ],
                        ),
                      ),
                      SizedBox(width: 20),
                    ],
                  ),
                  SizedBox(height: 10),
                  Container(
                    margin: EdgeInsets.symmetric(horizontal: 20),
                    child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'Описание',
                        style: TextStyle(
                          color: Color.fromRGBO(164, 168, 185, 1),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 6.5),
                  Container(
                    height: 40,
                    margin: EdgeInsets.symmetric(horizontal: 20),
                    child: Input(
                      controller: _controllerDescription,
                      hintText: '',
                    ),
                  ),
                  Center(
                    child: Container(
                      margin: EdgeInsets.only(left: 20, right: 20),
                      constraints: BoxConstraints(maxWidth: 500),
                      width: double.infinity,
                      child: Row(
                        children: [
                          Checkbox(
                            value: _isHidden,
                            activeColor: Color.fromRGBO(255, 98, 64, 1),
                            onChanged: (newValue) {
                              setState(() {
                                _isHidden = newValue!;
                              });
                            },
                          ),
                          Text('Черновик', style: TextStyle(
                              color: ColorThema.colorText
                          ),),
                        ],
                      ),
                    ),
                  ),
                  Container(
                    margin: EdgeInsets.only(left: 20),
                    child: Text(
                      'Чекпоинты:',
                      style: TextStyle(
                        color: ColorThema.colorText,
                        fontSize: 18,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                  ListView.builder(
                    shrinkWrap: true, // Высота по содержимому
                    physics: NeverScrollableScrollPhysics(),
                    itemCount: _points.length,
                    itemBuilder: (context, i) {
                      return LeftCreateRoute(
                        child: Column(
                          children: [
                            SizedBox(height: 10),
                            Row(
                              children: [
                                Text(
                                  'Чекпоинт ${i + 1}',
                                  style: TextStyle(
                                      color: ColorThema.colorText
                                  ),
                                ),
                                SizedBox(width: 10),
                                TextButton(
                                  style: TextButton.styleFrom(
                                    foregroundColor: Colors.redAccent,
                                  ),
                                  onPressed: () async {
                                    _points.removeAt(i);
                                    _markers.removeAt(i);
                                    await _buildRoute();
                                  },
                                  child: Text(
                                    'Удалить',
                                    style: TextStyle(color: Colors.redAccent),
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height: 10),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _points[i]['name'],
                                hintText: 'Название',
                              ),
                            ),
                            SizedBox(height: 10),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _points[i]['question'],
                                hintText: 'Вопрос',
                              ),
                            ),
                            SizedBox(height: 10),
                            Container(
                              height: 40,
                              child: Input(
                                controller: _points[i]['answer'],
                                hintText: 'Ответ',
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                  SizedBox(height: 15),
                  Center(
                    child: Container(
                      margin: EdgeInsets.symmetric(horizontal: 20),
                      constraints: BoxConstraints(maxWidth: 500),
                      width: double.infinity,
                      height: 40,
                      child: PrimaryButton(
                        text: 'Создать',
                        onPressed: _createRoute,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ) : Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 550,
            decoration: BoxDecoration(
              border: Border.all(color: ColorThema.colorBorder, width: 1),
              color: ColorThema.panelColor,
              borderRadius: BorderRadius.circular(15),
            ),
            margin: EdgeInsets.only(right: 20, top: 20, bottom: 20),
            padding: EdgeInsets.symmetric(vertical: 20),
            child:               ListView(
              children: [
                Container(
                  margin: EdgeInsets.only(left: 20),
                  child: Text(
                    'Основная информация',
                    style: TextStyle(
                      color: ColorThema.colorText,
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(left: 20),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Изображение',
                      style: TextStyle(
                        color: Color.fromRGBO(164, 168, 185, 1),
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 6.5),
                Container(
                  margin: EdgeInsets.only(left: 20),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: GestureDetector(
                      child: Container(
                        height: 120,
                        width: 120,
                        decoration: BoxDecoration(
                          color: Colors.grey,
                          borderRadius: BorderRadius.circular(15),
                        ),
                        child: _bytes != null
                            ? ClipRRect(
                          borderRadius: BorderRadius.circular(15),
                          child: Image.memory(_bytes, fit: BoxFit.cover),
                        )
                            : Icon(Icons.add, color: Colors.white),
                      ),
                      onTap: () async {
                        final picker = ImagePicker();
                        XFile? file = await picker.pickImage(
                          source: ImageSource.gallery,
                        );
                        if (file != null) {
                          final newBytes = await file.readAsBytes();
                          setState(() {
                            _bytes = newBytes;
                          });
                        }
                      },
                    ),
                  ),
                ),
                SizedBox(height: 10),
                Row(
                  children: [
                    SizedBox(width: 20),
                    Expanded(
                      child: Column(
                        children: [
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Название',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _controllerName,
                              hintText: '',
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(width: 20),
                    Expanded(
                      child: Column(
                        children: [
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Место',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _controllerPlace,
                              hintText: '',
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(width: 20),
                  ],
                ),
                SizedBox(height: 10),
                Row(
                  children: [
                    SizedBox(width: 20),
                    Expanded(
                      child: Column(
                        children: [
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Уровень сложности',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _controllerLevel,
                              hintText: '',
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(width: 20),
                    Expanded(
                      child: Column(
                        children: [
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Длительность',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 6.5),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _controllerTime,
                              hintText: '',
                            ),
                          )
                        ],
                      ),
                    ),
                    SizedBox(width: 20),
                  ],
                ),
                SizedBox(height: 10),
                Container(
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'Описание',
                      style: TextStyle(
                        color: Color.fromRGBO(164, 168, 185, 1),
                      ),
                    ),
                  ),
                ),
                SizedBox(height: 6.5),
                Container(
                  height: 40,
                  margin: EdgeInsets.symmetric(horizontal: 20),
                  child: Input(
                    controller: _controllerDescription,
                    hintText: '',
                  ),
                ),
                Center(
                  child: Container(
                    margin: EdgeInsets.only(left: 20, right: 20),
                    constraints: BoxConstraints(maxWidth: 500),
                    width: double.infinity,
                    child: Row(
                      children: [
                        Checkbox(
                          value: _isHidden,
                          activeColor: Color.fromRGBO(255, 98, 64, 1),
                          onChanged: (newValue) {
                            setState(() {
                              _isHidden = newValue!;
                            });
                          },
                        ),
                        Text('Черновик', style: TextStyle(
                            color: ColorThema.colorText
                        ),),
                      ],
                    ),
                  ),
                ),
                Container(
                  margin: EdgeInsets.only(left: 20),
                  child: Text(
                    'Чекпоинты:',
                    style: TextStyle(
                      color: ColorThema.colorText,
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                ),
                ListView.builder(
                  shrinkWrap: true, // Высота по содержимому
                  physics: NeverScrollableScrollPhysics(),
                  itemCount: _points.length,
                  itemBuilder: (context, i) {
                    return LeftCreateRoute(
                      child: Column(
                        children: [
                          SizedBox(height: 10),
                          Row(
                            children: [
                              Text(
                                'Чекпоинт ${i + 1}',
                                style: TextStyle(
                                    color: ColorThema.colorText
                                ),
                              ),
                              SizedBox(width: 10),
                              TextButton(
                                style: TextButton.styleFrom(
                                  foregroundColor: Colors.redAccent,
                                ),
                                onPressed: () async {
                                  _points.removeAt(i);
                                  _markers.removeAt(i);
                                  await _buildRoute();
                                },
                                child: Text(
                                  'Удалить',
                                  style: TextStyle(color: Colors.redAccent),
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 10),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _points[i]['name'],
                              hintText: 'Название',
                            ),
                          ),
                          SizedBox(height: 10),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _points[i]['question'],
                              hintText: 'Вопрос',
                            ),
                          ),
                          SizedBox(height: 10),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _points[i]['answer'],
                              hintText: 'Ответ',
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
                SizedBox(height: 15),
                Center(
                  child: Container(
                    margin: EdgeInsets.symmetric(horizontal: 20),
                    constraints: BoxConstraints(maxWidth: 500),
                    width: double.infinity,
                    height: 40,
                    child: PrimaryButton(
                      text: 'Создать',
                      onPressed: _createRoute,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            decoration: BoxDecoration(
              color: ColorThema.panelColor,
              borderRadius: BorderRadius.circular(15),
              border: Border.all(color: ColorThema.colorBorder, width: 1),
            ),
            padding: EdgeInsets.all(20),
            child: IntrinsicHeight(
              child: Column(
                children: [
                  Container(
                    width: 550,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: [
                            Icon(Icons.map, color: ColorThema.colorText),
                            SizedBox(width: 10),
                            Text(
                              'Чекпоинты',
                              style: TextStyle(
                                fontSize: 18,
                                color: ColorThema.colorText,
                              ),
                            ),
                          ],
                        ),
                        Container(
                          padding: EdgeInsets.symmetric(
                            horizontal: 10,
                            vertical: 2.5,
                          ),
                          decoration: BoxDecoration(
                            color: Color.fromRGBO(255, 159, 90, 0.5),
                            borderRadius: BorderRadius.circular(15),
                          ),
                          child: Row(
                            children: [
                              Icon(Icons.ads_click, size: 12),
                              SizedBox(width: 5),
                              Text(
                                'Клик на карту - новый чекпоинт',
                                style: TextStyle(fontSize: 12),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  SizedBox(height: 10),
                  SizedBox(
                    width: 550,
                    height: 400,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(15),
                      child: FlutterMap(
                        options: MapOptions(
                          initialCenter: LatLng(56.324379, 43.984067),
                          initialZoom: 15,
                          onTap: (tapPosition, point) async {
                            _points.add({
                              'latitude': point.latitude,
                              'longitude': point.longitude,
                              'name': TextEditingController(),
                              'question': TextEditingController(),
                              'answer': TextEditingController(),
                            });
                            _checkCan();
                            _markers.add({
                              'latitude': point.latitude,
                              'longitude': point.longitude,
                            });
                            await _buildRoute();
                          },
                        ),
                        children: [
                          TileLayer(
                            urlTemplate:
                            'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                            userAgentPackageName: 'com.example.app',
                          ),
                          PolylineLayer(
                            polylines: [
                              if (_routePoints.isNotEmpty)
                                Polyline(
                                  points: _routePoints,
                                  color: Color.fromRGBO(255, 159, 90, 1),
                                  strokeWidth: 5.0,
                                ),
                            ],
                          ),
                          MarkerLayer(markers: markers),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
