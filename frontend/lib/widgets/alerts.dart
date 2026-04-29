import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';

class Alerts {
  static void showError(BuildContext context, String text) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: ColorThema.panelColor,
          title: Text('Ошибка', style: TextStyle(color: ColorThema.colorText)),
          content: Text(text, style: TextStyle(color: ColorThema.colorText)),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('ок'),
              style: TextButton.styleFrom(
                foregroundColor: Color.fromRGBO(255, 98, 64, 1),
              ),
            ),
          ],
        );
      },
    );
  }

  static void showNotification(BuildContext context, String text) {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: ColorThema.panelColor,
          title: Text(
            'Уведомление',
            style: TextStyle(color: ColorThema.colorText),
          ),
          content: Text(text, style: TextStyle(color: ColorThema.colorText)),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.pushNamed(context, '/head');
              },
              child: Text('ок'),
              style: TextButton.styleFrom(
                foregroundColor: Color.fromRGBO(255, 159, 90, 1),
              ),
            ),
          ],
        );
      },
    );
  }

  static Future<bool> showConfirm(BuildContext context, String text) async {
    late bool answer;
    await showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          backgroundColor: ColorThema.panelColor,
          title: Text(
            'Подтверждение',
            style: TextStyle(color: ColorThema.colorText),
          ),
          content: Text(text, style: TextStyle(color: ColorThema.colorText)),
          actions: [
            TextButton(
              onPressed: () {
                answer = false;
                Navigator.pop(context);
              },
              child: Text(
                'отмена',
                style: TextStyle(color: ColorThema.colorText),
              ),
            ),
            TextButton(
              onPressed: () {
                answer = true;
                Navigator.pop(context);
              },
              child: Text('ок'),
              style: TextButton.styleFrom(
                foregroundColor: Color.fromRGBO(255, 159, 90, 1),
              ),
            ),
          ],
        );
      },
    );
    return answer;
  }
}
