import 'package:flutter/material.dart';

class Content extends StatelessWidget {
  const Content({Key? key}) : super(key: key);

  static const String _intro1 = 'IT solution';
  static const String _intro2 = 'ให้คำแนะนำและติดตั้งระบบ';
  static const String _intro3 = 'จัดการ Solution ตามความต้องการของธุรกิจ';
  static const String _intro4 = 'และบริการหลังการขายหลังติดตั้งระบบ';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text(
          _intro1,
          softWrap: true,
        ),
        Text(_intro2),
        Text(_intro3),
        Text(_intro4),
      ],
    );
  }
}
