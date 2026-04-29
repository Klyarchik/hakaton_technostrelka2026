import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:frontend/widgets/about_route.dart';
import 'package:frontend/widgets/card_route.dart';
import 'package:frontend/widgets/custom_drawer.dart';
import 'package:provider/provider.dart';

import '../color_thema.dart';
import '../widgets/dialog_about_route.dart';
import '../widgets/theme_button.dart';

class Drafts extends StatefulWidget {
  const Drafts({super.key});

  @override
  State<Drafts> createState() => _DraftsState();
}

class _DraftsState extends State<Drafts> {
  late final Dio _dio;
  List _routers = [];

  Future<void> _init() async {
    final response = await _dio.get('/api/quest/get-all-draft-current-user');
    print(response.data);
    setState(() {
      _routers = response.data['drafts'];
      print(_routers);
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
          )
        ],
        title: Text(
          'Черновики',
          style: TextStyle(
            fontWeight: FontWeight.w700,
            fontSize: 20,
            color: ColorThema.colorText,
          ),
        ),
      ),
      drawer: CustomDrawer(currentIndex: 2,),
      backgroundColor: ColorThema.backgroundColor,
      body:
      SafeArea(
        child: Center(
          child: Container(
            constraints: BoxConstraints(maxWidth: 700),
            width: double.infinity,
            child:
            SafeArea(
              child:                                  Container(
                margin: EdgeInsets.symmetric(horizontal: 20),
                child: GridView.builder(
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
                            return Center(child: AboutRoute(data: _routers[i], isSession: false,));
                          },
                        );
                      },
                    );
                  },
                ),
              )
            ),
          ),
        ),
      ),
    );
  }
}
