import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class AboutRoute extends StatefulWidget {
  const AboutRoute({super.key, required this.id});

  final int id;

  @override
  State<AboutRoute> createState() => _AboutRouteState();
}

class _AboutRouteState extends State<AboutRoute> {
  late final Dio _dio;
  bool _isLoaded = false;
  late Map _data;

  Future<void> _init() async {
    final response = await _dio.get(
      '/api/quest/get-quest-by-id',
      queryParameters: {'id': widget.id},
    );
    setState(() {
      _data = response.data['questById'];
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
    return _isLoaded
        ? Scaffold(
            backgroundColor: Color.fromRGBO(245, 245, 245, 1.0),
            body: SafeArea(
              child: ListView(
                children: [
                  Center(
                    child:
                    Container(
                      padding: EdgeInsets.symmetric(
                        vertical: 10,
                        horizontal: 20
                      ),
                      margin: EdgeInsets.symmetric(horizontal: 20),
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(15),
                        border: Border.all(color: Colors.black12, width: 1),
                      ),
                      constraints: BoxConstraints(
                        maxWidth: 500
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(_data['title']),
                          Text('Статус: ${_data['status'] == 'draft' ? 'Черновик' : ''}'),
                          Container(
                            width: double.infinity,
                            constraints: BoxConstraints(
                                maxWidth: 500
                            ),
                            margin: EdgeInsets.symmetric(horizontal: 20),
                            child: Column(
                              children: [
                                Image.network(_data['image']),
                              ],
                            ),
                          ),
                          Text('Описание: ${_data['description']}'),
                          Text('Локация: ${_data['location_text']}'),
                          Text('Длительность: ${_data['duration_minutes']}')
                        ],
                      ),
                    ),
                  )
                ],
              ),
            ),
          )
        : Scaffold(
            backgroundColor: Color.fromRGBO(245, 245, 245, 1.0),
            body: Center(child: CircularProgressIndicator(color: Colors.blue)),
          );
  }
}
