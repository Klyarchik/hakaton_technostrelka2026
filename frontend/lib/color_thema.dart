import 'package:flutter/material.dart';

class  ColorThema {
  static Color backgroundColor = Color.fromRGBO(245, 245, 245, 1.0);
  static Color panelColor = Colors.white;
  static Color colorBorder = Colors.black12;
  static Color backgroundInput = Colors.white;
  static Color colorTextAuth = Colors.black12;
  static Color colorText = Colors.black;
  static Color colorIcon = Colors.black;

  static void changeThema(){
    if (backgroundColor == Color.fromRGBO(245, 245, 245, 1.0)){
      backgroundColor = Color.fromRGBO(11, 13, 21, 1);
      panelColor = Color.fromRGBO(17, 20, 31, 1);
      colorBorder = Color.fromRGBO(45, 50, 73, 1);
      backgroundInput = Color.fromRGBO(13, 15, 23, 1);
      colorTextAuth = Colors.white;
      colorText = Colors.white;
      colorIcon = Colors.white;
    } else {
      backgroundColor = Color.fromRGBO(245, 245, 245, 1.0);
      panelColor = Colors.white;
      colorBorder = Colors.black12;
      backgroundInput = Colors.white;
      colorTextAuth = Colors.black12;
      colorText = Colors.black;
      colorIcon = Colors.black;
    }
  }
}