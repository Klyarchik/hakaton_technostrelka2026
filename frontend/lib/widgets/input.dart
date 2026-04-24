import 'package:flutter/material.dart';

class Input extends StatelessWidget {
  const Input({super.key, required this.controller, required this.hintText});
  final String hintText;
  final TextEditingController controller;

  @override
  Widget build(BuildContext context) {
    return TextSelectionTheme(
      data: TextSelectionThemeData(
          cursorColor: Colors.blue,
          selectionHandleColor: Colors.blue,
          selectionColor: Colors.blue.withAlpha(127)
      ),
      child: TextField(
        controller: controller,
        decoration: InputDecoration(
            filled: true,
            fillColor: Colors.white,
            hintText: hintText,
            hintStyle: TextStyle(
                color: Colors.black12
            ),
            enabledBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Colors.black12,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(12),
            ),
            focusedBorder: OutlineInputBorder(
              borderSide: BorderSide(
                color: Colors.blue,
                width: 1,
              ),
              borderRadius: BorderRadius.circular(12),
            )
        ),
      ),
    );
  }
}