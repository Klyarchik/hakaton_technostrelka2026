import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:flutter_polyline_points/flutter_polyline_points.dart';
import 'package:frontend/widgets/alerts.dart';
import 'package:frontend/widgets/input.dart';
import 'package:frontend/widgets/primary_button.dart';
import 'package:latlong2/latlong.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/custom_drawer.dart';

class Session extends StatefulWidget {
  const Session({super.key});

  @override
  State<Session> createState() => _SessionState();
}

class _SessionState extends State<Session> {
  late final Dio _dio;
  bool _isLoaded = false;
  late Map _current;
  List<Marker> _markers = [];
  late Map _session;
  List<LatLng> _routePoints = [];

  Future<void> _init() async {
    print('INIT');
    final responseSession = await _dio.get('/api/session/current');
    _routePoints = [];
    print(_routePoints.length);
    _markers = [];
    _session = responseSession.data;
    for (int i = 0; i < _session['checkpoints'].length; ++i) {
      if (_session['checkpoints'][i]['status'] == 'completed') {
        _markers.add(
          Marker(
            point: LatLng(
              double.parse(_session['checkpoints'][i]['latitude']),
              double.parse(_session['checkpoints'][i]['longitude']),
            ),
            child: Container(
              width: 50,
              height: 50,
              decoration: BoxDecoration(
                color: Color.fromRGBO(255, 159, 90, 1),
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
      } else if (_session['checkpoints'][i]['status'] == 'active') {
        _current = _session['checkpoints'][i];
        if (_session['current_checkpoint_order'] > 0){
          WidgetsBinding.instance.addPostFrameCallback((_){
            _controllerMap.move(LatLng(double.parse(_current['latitude']), double.parse(_current['longitude'])), 15);
          });
        }
        _markers.add(
          Marker(
            point: LatLng(
              double.parse(_session['checkpoints'][i]['latitude']),
              double.parse(_session['checkpoints'][i]['longitude']),
            ),
            child: Container(
              width: 50,
              height: 50,
              decoration: BoxDecoration(
                color: Color.fromRGBO(255, 159, 90, 1),
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
        break;
      }
    }
    for (int i = 0; i < _session['checkpoints'].length; ++i) {
      if (i + 1 != _session['checkpoints'].length &&
          (_session['checkpoints'][i + 1]['status'] == 'active' ||
              _session['checkpoints'][i + 1]['status'] == 'completed')) {
        final url =
            'http://router.project-osrm.org/route/v1/driving/'
            '${_session['checkpoints'][i]['longitude']},${_session['checkpoints'][i]['latitude']};'
            '${_session['checkpoints'][i + 1]['longitude']},${_session['checkpoints'][i + 1]['latitude']}'
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

  final _controllerAnswer = TextEditingController();
  final _controllerMap = MapController();

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
            drawer: CustomDrawer(currentIndex: 6),
            backgroundColor: ColorThema.backgroundColor,
            body: SafeArea(
              child: Stack(
                children: [
                  FlutterMap(
                    mapController: _controllerMap,
                    options: MapOptions(
                      initialCenter: LatLng(
                        double.parse(_current['latitude']),
                        double.parse(_current['longitude']),
                      ),
                      initialZoom: 15,
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
                      MarkerLayer(markers: _markers),
                    ],
                  ),
                  Positioned(
                    bottom: 10,
                    left: 10,
                    child: Container(
                      padding: EdgeInsets.symmetric(
                        vertical: 10,
                        horizontal: 15,
                      ),
                      constraints: BoxConstraints(maxWidth: 360),
                      width: double.infinity,
                      height: 230,
                      decoration: BoxDecoration(
                        color: ColorThema.panelColor,
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: ListView(
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                'Текущий чекпоинт: ${_current['title']}',
                                style: TextStyle(
                                  color: Color.fromRGBO(164, 168, 185, 1),
                                ),
                              ),
                              Row(
                                children: [
                                  Container(
                                    padding: EdgeInsets.symmetric(
                                      horizontal: 10,
                                      vertical: 2.5,
                                    ),
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(15),
                                      color: Color.fromRGBO(255, 159, 90, 0.5),
                                    ),
                                    margin: EdgeInsets.only(left: 20),
                                    child: Text(
                                      '${_session['current_checkpoint_order'] + 1} / ${_session['checkpoints'].length}',
                                    ),
                                  ),
                                  SizedBox(width: 10,),
                                  IconButton(onPressed: () async{
                                    final answer = await Alerts.showConfirm(context, 'Вы уверены что хотите завершить квест');
                                    if (answer){
                                      _dio.delete('/api/session/current/abandon');
                                      Navigator.pushNamedAndRemoveUntil(
                                        context,
                                        '/head',
                                            (route) => false,
                                      );
                                    }
                                  }, icon: Icon(Icons.cancel, color: Colors.redAccent,))
                                ],
                              ),
                            ],
                          ),
                          SizedBox(height: 5),
                          Text.rich(
                            TextSpan(
                              children: [
                                TextSpan(
                                  text: 'Вопрос: ',
                                  style: TextStyle(
                                    color: ColorThema.colorText,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                                TextSpan(
                                  text: _current['description'],
                                  style: TextStyle(
                                    color: ColorThema.colorText,
                                    fontWeight: FontWeight.normal,
                                  ),
                                ),
                              ],
                            ),
                            softWrap: true, // Для переноса
                          ),
                          SizedBox(height: 5),
                          Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Ответ',
                              style: TextStyle(
                                color: Color.fromRGBO(164, 168, 185, 1),
                              ),
                            ),
                          ),
                          SizedBox(height: 5),
                          Container(
                            height: 40,
                            child: Input(
                              controller: _controllerAnswer,
                              hintText: '',
                            ),
                          ),
                          SizedBox(height: 15),
                          Container(
                            width: double.infinity,
                            height: 40,
                            child: PrimaryButton(
                              text: 'Отправить',
                              onPressed: () async {
                                try {
                                  final response = await _dio.post(
                                    '/api/checkpoint/check',
                                    data: jsonEncode({
                                      'answer': _controllerAnswer.text,
                                    }),
                                  );
                                  if (response.data['completed']) {
                                    Alerts.showNotification(
                                      context,
                                      'Вы успешно прошли квест',
                                    );
                                  } else {
                                    _controllerAnswer.text = '';
                                    await _init();
                                    setState(() {});
                                  }
                                } on DioException catch (e) {
                                  Alerts.showError(
                                    context,
                                    e.response!.data['error'],
                                  );
                                }
                              },
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
