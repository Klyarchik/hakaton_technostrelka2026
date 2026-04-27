import 'package:flutter/material.dart';

class PrimaryButton extends StatelessWidget {
  const PrimaryButton({super.key, required this.text, this.onPressed});

  final String text;
  final VoidCallback? onPressed;

  @override
  Widget build(BuildContext context) {
    return FilledButton(
      onPressed: onPressed,
      style: FilledButton.styleFrom(
        disabledBackgroundColor: Color.fromRGBO(164, 168, 185, 1),
          backgroundColor: Color.fromRGBO(255, 98, 64, 1),
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(30)
          )
      ),
      child: Text(text),
    );
  }
}