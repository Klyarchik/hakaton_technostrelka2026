import 'package:flutter/material.dart';

import '../color_thema.dart';

class InputPassword extends StatefulWidget {
  const InputPassword({super.key, required this.controller, required this.hintText});

  final TextEditingController controller;
  final String hintText;

  @override
  State<InputPassword> createState() => _InputPasswordState();
}

class _InputPasswordState extends State<InputPassword> {
  bool _isObscure = true;

  @override
  Widget build(BuildContext context) {
    return TextSelectionTheme(
      data: TextSelectionThemeData(
          cursorColor: Color.fromRGBO(255, 159, 90, 1),
          selectionHandleColor: Color.fromRGBO(255, 159, 90, 1),
          selectionColor: Color.fromRGBO(255, 159, 90, 0.5)
      ),
      child: TextField(
        obscureText: _isObscure,
        controller: widget.controller,
        style: TextStyle(
            color: ColorThema.colorText,
          fontSize: 12
        ),
        decoration: InputDecoration(
          contentPadding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
          filled: true,
          fillColor: ColorThema.backgroundInput,
          hintText: widget.hintText,
          hintStyle: TextStyle(
              color: ColorThema.colorBorder
          ),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(color: ColorThema.colorBorder, width: 1),
            borderRadius: BorderRadius.circular(30),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Color.fromRGBO(255, 159, 90, 1),
              width: 1,
            ),
            borderRadius: BorderRadius.circular(30),
          ),
          suffixIcon: IconButton(
            onPressed: () {
              setState(() {
                _isObscure = !_isObscure;
              });
            },
            icon: Icon(_isObscure ? Icons.visibility_off : Icons.visibility, color: ColorThema.colorText, size: 20,),
          ),
        ),
      ),
    );
  }
}