import 'package:dio/dio.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:frontend/color_thema.dart';
import 'package:frontend/pages/change_password.dart';
import 'package:frontend/pages/create_route.dart';
import 'package:frontend/pages/drafts.dart';
import 'package:frontend/pages/entrance.dart';
import 'package:frontend/pages/head.dart';
import 'package:frontend/pages/leadboard.dart';
import 'package:frontend/pages/moderation.dart';
import 'package:frontend/pages/my_route.dart';
import 'package:frontend/pages/profile.dart';
import 'package:frontend/pages/register.dart';
import 'package:frontend/pages/session.dart';
import 'package:frontend/pages/team.dart';
import 'package:provider/provider.dart';

import 'firebase_options.dart';
import 'notification_stub.dart' if (dart.library.html) 'notification_web.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  FirebaseMessaging.instance.requestPermission(
    alert: true,
    badge: true,
    sound: true,
  );

  const AndroidNotificationChannel channel = AndroidNotificationChannel(
    'high_importance_channel', // id
    'High Importance Notifications', // title
    description: 'This channel is used for important notifications.',
    // description
    importance: Importance.max,
  );

  final FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin =
      FlutterLocalNotificationsPlugin();

  await flutterLocalNotificationsPlugin
      .resolvePlatformSpecificImplementation<
        AndroidFlutterLocalNotificationsPlugin
      >()
      ?.createNotificationChannel(channel);

  FirebaseMessaging.onMessage.listen((RemoteMessage message) async {
    print('MESSAGE');
    final notification = message.notification;
    final android = message.notification?.android;

    if (defaultTargetPlatform == TargetPlatform.android) {
      if (notification != null && android != null) {
        flutterLocalNotificationsPlugin.show(
          id: notification.hashCode,
          title: notification.title,
          body: notification.body,
          notificationDetails: NotificationDetails(
            android: AndroidNotificationDetails(
              channel.id,
              channel.name,
              channelDescription: channel.description,
              icon: '@mipmap/ic_launcher',
            ),
          ),
        );
      }
    } else {
      final title = message.notification?.title;
      final body = message.notification?.body;
      showWebNotification(title!, body!);
    }
  });
  final dio = Dio(
    BaseOptions(
      baseUrl: defaultTargetPlatform != TargetPlatform.android
          ? 'http://localhost:3000'
          : 'http://10.0.2.2:3000',
    ),
  );
  final storage = FlutterSecureStorage();
  String? thema = await storage.read(key: 'thema');
  if (thema == 'black') {
    ColorThema.changeThema();
  }
  String? token = await storage.read(key: 'token');
  if (token != null) {
    dio.options.headers['Authorization'] = 'Bearer $token';
  }
  runApp(
    Provider(
      create: (context) => dio,
      child: MaterialApp(
        onGenerateRoute: (settings) {
          switch (settings.name) {
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
            case '/head':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => Head());
            case '/create_route':
              return PageRouteBuilder(
                pageBuilder: (_, __, ___) => CreateRoute(),
              );
            case '/drafts':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => Drafts());
            case '/my_route':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => MyRoute());
            case '/moderation':
              return PageRouteBuilder(
                pageBuilder: (_, __, ___) => Moderation(),
              );
            case '/team':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => Team());
            case '/session':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => Session());
            case '/leadboard':
              return PageRouteBuilder(pageBuilder: (_, __, ___) => Leadboard());
          }
        },
      ),
    ),
  );
}
