import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';

class Input extends StatelessWidget {
  const Input({super.key, required this.controller, required this.hintText});
  final String hintText;
  final TextEditingController controller;

  @override
  Widget build(BuildContext context) {
    return TextSelectionTheme(
      data: TextSelectionThemeData(
          cursorColor: Color.fromRGBO(255, 159, 90, 1),
          selectionHandleColor: Color.fromRGBO(255, 159, 90, 1),
          selectionColor: Color.fromRGBO(255, 159, 90, 0.5)
      ),
      child: TextField(
        controller: controller,
        style: TextStyle(
          color: ColorThema.colorText,
          fontSize: 12
        ),
        decoration: InputDecoration(
            filled: true,
            fillColor: ColorThema.backgroundInput,
            hintText: hintText,
            contentPadding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
            hintStyle: TextStyle(
                color: ColorThema.colorBorder
            ),
            enabledBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: ColorThema.colorBorder,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(30),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Color.fromRGBO(255, 159, 90, 1),
                width: 1,
              ),
              borderRadius: BorderRadius.circular(30),
            )
        ),
      ),
    );
  }
}