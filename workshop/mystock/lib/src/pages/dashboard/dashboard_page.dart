import 'package:flutter/material.dart';

class DashBoardPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('DashBoard'),
        centerTitle: false,
      ),
      body: Center(
        child: FlutterLogo(
          size: 150,
        ),
      ),
    );
  }
}
