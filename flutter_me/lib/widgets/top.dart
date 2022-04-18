import 'package:flutter/material.dart';
import 'package:flutter_me/constants/asset.dart';

class Top  extends StatelessWidget {
  Top ({ Key? key }) : super(key: key);

  // static const String _Intro = 'IT Solution';

  @override
  Widget build(BuildContext context) {
    return Column(
      children:  <Widget>[
        Text('THE AMPERSAND CO., LTD',style: DefaultTextStyle.of(context).style.apply(fontSizeDelta: 8.0)),
        Text('เดอะ แอมเพอร์แซนด์ จํากัด'),
        // Text(_Intro),
        Image.asset(Asset.logoImage)

      ],
      
    );
  }
}