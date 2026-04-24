import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:frontend/pages/change_password.dart';
import 'package:frontend/pages/entrance.dart';
import 'package:frontend/pages/profile.dart';
import 'package:frontend/pages/register.dart';
import 'package:provider/provider.dart';

void main() async {
  final dio = Dio(BaseOptions(
    baseUrl: defaultTargetPlatform != TargetPlatform.android ? 'http://localhost:3000' : 'http://10.0.2.2:3000'
  ));
  final storage = FlutterSecureStorage();
  String? token = await storage.read(key: 'token');
  if (token != null) {
    dio.options.headers['Authorization'] = 'Bearer $token';
  }
  runApp(
    Provider(
      create: (context) => dio,
      child: MaterialApp(onGenerateRoute: (settings) {
        switch (settings.name){
          case '/':
            if (token == null) {
              return PageRouteBuilder(
                pageBuilder: (_, __, ___) => Entrance(),
              );
            } else {
              return PageRouteBuilder(
                pageBuilder: (_, __, ___) => Profile(),
                transitionDuration: Duration.zero,
              );
            }
          case '/entrance':
            return PageRouteBuilder(
              pageBuilder: (_, __, ___) => Entrance(),
              transitionDuration: Duration.zero,
            );
          case '/register':
            return PageRouteBuilder(
              pageBuilder: (_, __, ___) => Register(),
              transitionDuration: Duration.zero,
            );
          case '/profile':
            return PageRouteBuilder(
              pageBuilder: (_, __, ___) => Profile(),
              transitionDuration: Duration.zero,
            );
          case '/change_password':
            return PageRouteBuilder(
              pageBuilder: (_, __, ___) => ChangePassword(),
              transitionDuration: Duration.zero,
            );
        }
      }),
    ),
  );
}
