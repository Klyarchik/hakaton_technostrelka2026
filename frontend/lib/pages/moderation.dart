import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/widgets/card_route.dart';
import 'package:frontend/widgets/dialog_about_route.dart';
import 'package:frontend/widgets/input.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/about_route.dart';
import '../widgets/custom_drawer.dart';
import '../widgets/theme_button.dart';

class Moderation extends StatefulWidget {
  const Moderation({super.key});

  @override
  State<Moderation> createState() => _ModerationState();
}

class _ModerationState extends State<Moderation> {
  late final Dio _dio;
  List _routers = [];

  Future<void> _init() async {
    final response = await _dio.get('/api/quest/get-all-moderate-quests');
    setState(() {
      _routers = response.data['moderateQuests'];
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
      drawer: CustomDrawer(currentIndex: 5,),
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
          )
        ],
          title: Text(
            'Модерация',
            style: TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 20,
              color: ColorThema.colorText,
            ),
          )

      ),
      body: ListView(
        children: [
          Center(
            child:
            Container(
              constraints: BoxConstraints(maxWidth: 700),
              width: double.infinity,
              child: SafeArea(
                child: ListView(
                  shrinkWrap: true,
                  physics: NeverScrollableScrollPhysics(),
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
                    SizedBox(height: 10,),
                    Container(
                      margin: EdgeInsets.only(bottom: 20, left: 20, right: 20),
                      child: GridView.builder(
                        shrinkWrap: true,
                        physics: NeverScrollableScrollPhysics(),
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
                                  return Center(child: AboutRoute(data: data, isSession: false, isModeration: true, update: _init,));
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
        ],
      ),
    );
  }
}
