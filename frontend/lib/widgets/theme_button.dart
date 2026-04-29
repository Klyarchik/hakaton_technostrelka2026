import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

import '../color_thema.dart';

class ThemeButton extends StatefulWidget {
  const ThemeButton({super.key});

  @override
  State<ThemeButton> createState() => _ThemeButtonState();
}

class _ThemeButtonState extends State<ThemeButton> {
  @override
  Widget build(BuildContext context) {
    return IconButton(
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
    );
  }
}
