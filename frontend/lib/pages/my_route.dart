import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/widgets/about_route.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:provider/provider.dart';

import '../widgets/card_route.dart';
import '../widgets/dialog_about_route.dart';
import '../widgets/theme_button.dart';

class MyRoute extends StatefulWidget {
  const MyRoute({super.key});

  @override
  State<MyRoute> createState() => _MyRouteState();
}

class _MyRouteState extends State<MyRoute> {
  late final Dio _dio;
  List _routers = [];

  Future<void> _init() async {
    final response = await _dio.get('/api/quest/get-all-quests-current-user');
    setState(() {
      _routers = response.data['quests'];
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
    return Scaffold(
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
          title: Text(
            'Мои квесты',
            style: TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 20,
              color: ColorThema.colorText,
            ),
          )
      ),
      drawer: CustomDrawer(currentIndex: 3),
      body: SafeArea(
        child: Center(
          child: Container(
            constraints: BoxConstraints(maxWidth: 700),
            width: double.infinity,
            child: SafeArea(
              child: Column(
                children: [
                  Center(
                    child: Container(
                      width: 700,
                      margin: EdgeInsets.symmetric(horizontal: 20),
                      child: Row(
                        children: [
                        ],
                      ),
                    ),
                  ),
                  SizedBox(height: 10),
                  Expanded(
                    child: Container(
                      margin: EdgeInsets.only(bottom: 20, left: 20, right: 20),
                      child: GridView.builder(
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount:
                              MediaQuery.of(context).size.width > 725
                              ? 3
                              : MediaQuery.of(context).size.width > 450
                              ? 2
                              : 1,
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
                                    child: AboutRoute(
                                      data: data,
                                      isSession: false,
                                      update: _init,
                                      isHidden: true,
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
                ],
              ),
              // ListView.builder(
              //   itemCount: _routers.length,
              //   itemBuilder:
              //   (context, i) {
              //     return CardRoute(
              //       name: _routers[i]['title'],
              //       image: _routers[i]['image'],
              //       onTap: () {},
              //     );
              //   },
              // ),
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          await Navigator.pushNamed(context, '/create_route');
          await _init();
          setState(() {

          });
        },
        backgroundColor: Color.fromRGBO(255, 98, 64, 1),
        child: Icon(Icons.add, color: Colors.white),
      ),
      backgroundColor: ColorThema.backgroundColor,
    );
  }
}
