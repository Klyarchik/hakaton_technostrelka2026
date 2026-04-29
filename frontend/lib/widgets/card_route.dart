import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:frontend/color_thema.dart';

class CardRoute extends StatelessWidget {
  const CardRoute({super.key, required this.onTap, required this.data});

  final VoidCallback onTap;
  final Map data;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: ColorThema.colorBorder, width: 1),
        borderRadius: BorderRadius.circular(15),
        color: ColorThema.panelColor,
      ),
      child: InkWell(
        borderRadius: BorderRadius.circular(15),
        onTap: onTap,
        child: Container(
          // margin: EdgeInsets.all(10),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: double.infinity,
                child: AspectRatio(
                  aspectRatio: 3 / 2,
                  child: ClipRRect(
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(15),
                      topRight: Radius.circular(15),
                    ),
                    child: Image.network(defaultTargetPlatform == TargetPlatform.android ? data['image'].replaceAll('localhost', '10.0.2.2') : data['image'], fit: BoxFit.cover),
                  ),
                ),
              ),
              Container(
                margin: EdgeInsets.only(left: 10, top: 10, right: 10),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      data['title'],
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                        color: ColorThema.colorText,
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 10,
                        vertical: 2.5,
                      ),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                        color: Color.fromRGBO(255, 159, 90, 0.5),
                      ),
                      child: Text(
                        '${data['duration_minutes'].toString()} мин',
                        style: TextStyle(color: ColorThema.colorText),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 10),
              Container(
                margin: EdgeInsets.only(left: 10),
                child:
                Row(
                  children: [
                    Text(
                      'Сложность: ',
                      style: TextStyle(
                        color: ColorThema.colorText,
                        fontSize: 12,
                      ),
                    ),
                    Text(
                      '☆',
                      style: TextStyle(
                        fontSize: 14,
                        color: data['difficulty'] >= 1
                            ? Color.fromRGBO(255, 159, 90, 1)
                            : ColorThema.colorText,
                      ),
                    ),
                    SizedBox(width: 4,),
                    Text(
                      '☆',
                      style: TextStyle(
                        fontSize: 14,
                        color: data['difficulty'] >= 2
                            ? Color.fromRGBO(255, 159, 90, 1)
                            : ColorThema.colorText,
                      ),
                    ),
                    SizedBox(width: 4,),
                    Text(
                      '☆',
                      style: TextStyle(
                        fontSize: 14,
                        color: data['difficulty'] >= 3
                            ? Color.fromRGBO(255, 159, 90, 1)
                            : ColorThema.colorText,
                      ),
                    ),
                    SizedBox(width: 4,),
                    Text(
                      '☆',
                      style: TextStyle(
                        fontSize: 14,
                        color: data['difficulty'] >= 4
                            ? Color.fromRGBO(255, 159, 90, 1)
                            : ColorThema.colorText,
                      ),
                    ),
                    SizedBox(width: 4,),
                    Text(
                      '☆',
                      style: TextStyle(
                        fontSize: 14,
                        color: data['difficulty'] >= 5
                            ? Color.fromRGBO(255, 159, 90, 1)
                            : ColorThema.colorText,
                      ),
                    )
                  ],
                ),
              ),
              SizedBox(height: 10),
              Container(
                margin: EdgeInsets.symmetric(horizontal: 10),
                decoration: BoxDecoration(
                  border: Border.all(color: ColorThema.colorBorder, width: 0.2),
                  borderRadius: BorderRadius.circular(12),
                  color: ColorThema.panelColor,
                ),
              ),
              SizedBox(height: 10),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 10, vertical: 2.5),
                margin: EdgeInsets.only(left: 10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  color: data['status'] == 'draft'
                      ? Colors.grey.withAlpha(127)
                      : data['status'] == 'published'
                      ? Colors.lightGreen.withAlpha(127)
                      : data['status'] == 'rejected'
                      ? Colors.redAccent.withAlpha(127)
                      : data['status'] == 'moderation'
                      ? Colors.yellowAccent.withAlpha(127)
                      : Colors.orangeAccent.withAlpha(127),
                ),
                child: Text(
                  '• ${data['status'] == 'draft'
                      ? 'Черновик'
                      : data['status'] == 'published'
                      ? 'Опубликован'
                      : data['status'] == 'rejected'
                      ? 'Отменён'
                      : data['status'] == 'moderation'
                      ? 'На модерации'
                      : 'В архиве'}',
                  style: TextStyle(color: ColorThema.colorText, fontSize: 12),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
