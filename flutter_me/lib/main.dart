import 'package:flutter/material.dart';
import 'package:flutter_me/widgets/content.dart';
import 'package:flutter_me/widgets/folio.dart';
import 'package:flutter_me/widgets/servicepage.dart';
import 'package:flutter_me/widgets/top.dart';
import 'package:flutter_me/widgets/footmain.dart';
import 'package:flutter_me/route.dart' as custom_route;
import 'package:flutter_me/widgets/webview.dart';
import 'package:flutter_me/widgets/inappweb.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  static const TextStyle optionStyle =
      TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    Text(
      'Index 0: Home',
      style: optionStyle,
    ),
    Text(
      'Index 1: Service',
      style: optionStyle,
    ),
    Text(
      'Index 2: Portfolio',
      style: optionStyle,
    ),
    Text(
      'Index 3: Webview',
      style: optionStyle,
    ),
    Text(
      'Index 4: Webview2',
      style: optionStyle,
    ),
  ];

  static const List<Widget> _pages = <Widget>[
    Icon(
      Icons.home,
      size: 150,
    ),
    Icon(
      Icons.business_center,
      size: 150,
    ),
    Icon(
      Icons.fact_check,
      size: 150,
    ),
    Icon(
      Icons.fact_check,
      size: 150,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    switch (index) {
      case 1:
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => Servicepage(title: 'service')),
        );
        break;
      case 2:
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => Folio(
                    title: '',
                  )),
        );
        break;
      case 3:
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => WebViewContainer('https://flutter.dev')),
        );
        break;
      case 4:
        Navigator.push(
            context, MaterialPageRoute(builder: (context) => Inappweb()));
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child:
            Column(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
          Top(),
          Content(),
        ]),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        items: const <BottomNavigationBarItem>[
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
          BottomNavigationBarItem(
            icon: Icon(Icons.fact_check),
            label: 'Webview2',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.green[800],
        selectedLabelStyle: TextStyle(fontWeight: FontWeight.bold),
        onTap: _onItemTapped,
        backgroundColor: Colors.lime,
        elevation: 0,
      ),
      // floatingActionButton: FloatingActionButton(
      //   onPressed: _incrementCounter,
      //   tooltip: 'Increment',
      //   child: const Icon(Icons.message),
      // ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
