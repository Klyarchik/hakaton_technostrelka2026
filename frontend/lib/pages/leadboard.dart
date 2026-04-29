import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:provider/provider.dart';

class Leadboard extends StatefulWidget {
  const Leadboard({super.key});

  @override
  State<Leadboard> createState() => _LeadboardState();
}

class _LeadboardState extends State<Leadboard> {
  late final Dio _dio;
  List _teams = [];

  Future<void> _init() async {
    final response = await _dio.get('/api/leaderboard/');
    setState(() {
      _teams = response.data;
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
      backgroundColor: ColorThema.backgroundColor,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        surfaceTintColor: Colors.transparent,
        iconTheme: IconThemeData(color: ColorThema.colorIcon),
        title: Text(
          'Рейтинг',
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 20,
            color: ColorThema.colorText,
          ),
        ),
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
      drawer: CustomDrawer(currentIndex: 7),
      body: SafeArea(
        child: ListView.builder(
          itemCount: _teams.length,
          itemBuilder: (context, i) {
            return Center(
              child: Container(
                padding: EdgeInsets.symmetric(
                  vertical: 20,
                  horizontal: 15
                ),
                margin: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
                constraints: BoxConstraints(maxWidth: 550),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  border: Border.all(color: ColorThema.colorBorder, width: 1),
                  color: ColorThema.panelColor
                ),
                width: double.infinity,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        if (i == 0)
                          Text('🥇 ', style: TextStyle(
                            fontSize: 22
                          ),),
                        if (i == 1)
                          Text('🥈 ', style: TextStyle(
                              fontSize: 22
                          ),),
                        if (i == 2)
                          Text('🥉 ', style: TextStyle(
                              fontSize: 22
                          ),),
                        if (i > 2)
                          Text('${i + 1} ', style: TextStyle(
                            fontSize: 18,
                            color: ColorThema.colorText
                          ),),
                        Text(
                          _teams[i]['team_name'],
                          style: TextStyle(color: ColorThema.colorText, fontSize: 18),
                        ),
                      ],
                    ),
                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 10,
                        vertical: 2.5,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                        color: Colors.yellowAccent.withAlpha(127),
                      ),
                      child: Row(
                        children: [
                          Icon(Icons.star, color: Colors.yellow,),
                          Text(
                            _teams[i]['total_points'].toString(),
                            style: TextStyle(color: ColorThema.colorText),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}
