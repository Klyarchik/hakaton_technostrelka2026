import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/widgets/card_route.dart';
import 'package:frontend/widgets/dialog_about_route.dart';
import 'package:frontend/widgets/input.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/custom_drawer.dart';

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
      drawer: CustomDrawer(currentIndex: 4,),
      backgroundColor: ColorThema.backgroundColor,
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
      body: Center(
        child: Container(
          constraints: BoxConstraints(maxWidth: 700),
          width: double.infinity,
          child: SafeArea(
            child: GridView.builder(
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 3,
                childAspectRatio: 3 / 4,
                crossAxisSpacing: 10,
                mainAxisSpacing: 10,
              ),
              itemCount: _routers.length,
              itemBuilder: (context, i) {
                return CardRoute(
                  data: _routers[i],
                  onTap: () {
                    showDialog(
                      context: context,
                      builder: (context) {
                        return DialogAboutRoute(
                          data: _routers[i],
                          update: _init,
                          moderation: true,
                        );
                      },
                    );
                  },
                );
              },
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
    );
  }
}
