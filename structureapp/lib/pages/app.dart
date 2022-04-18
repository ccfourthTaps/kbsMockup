import 'package:flutter/material.dart';

class App extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => AppState();
}

class AppState extends State<App> {
  void _selectTab() {
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _buildBody(),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Intro',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.business_center),
            label: 'Service',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.fact_check),
            label: 'Portfolio',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.fact_check),
            label: 'Webview',
          ),
        ],
      ),
    );
  }

  Widget _buildBody() {
    // return a widget representing a page
    return Text('ABC');
  }
}
