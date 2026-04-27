import 'package:flutter/material.dart';

class LeftCreateRoute extends StatelessWidget {
  const LeftCreateRoute({super.key, required this.child});
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Align(
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 20),
        constraints: BoxConstraints(maxWidth: 500),
        child: child,
      ),
    );
  }
}
