import 'package:flutter/material.dart';
import 'package:webview_flutter/platform_interface.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:flutter_me/widgets/servicepage.dart';
import 'package:flutter_me/widgets/folio.dart';
import 'package:flutter_me/main.dart';

class WebViewContainer extends StatefulWidget {
  final url;
  WebViewContainer(this.url);
  @override
  createState() => _WebViewContainerState(this.url);
}

class _WebViewContainerState extends State<WebViewContainer> {
  int _selectedIndex = 0;
  var _url;
  final _key = UniqueKey();
  _WebViewContainerState(this._url);

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    switch (index) {
      case 0:
        Navigator.push(
            context, MaterialPageRoute(builder: (context) => MyApp()));
        break;
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
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: [
          Expanded(
              child: WebView(
            key: _key,
            javascriptMode: JavascriptMode.unrestricted,
            initialUrl: _url,
            // navigationDelegate: (navigation) => NavigationDecision.prevent,
          ))
        ],
      ),
      // bottomNavigationBar: BottomNavigationBar(
      //   type: BottomNavigationBarType.fixed,
      //   items: const <BottomNavigationBarItem>[
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.home),
      //       label: 'Intro',
      //     ),
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.business_center),
      //       label: 'Service',
      //     ),
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.fact_check),
      //       label: 'Portfolio',
      //     ),
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.fact_check),
      //       label: 'Webview',
      //     ),
      //   ],
      //   currentIndex: _selectedIndex,
      //   selectedItemColor: Colors.green[800],
      //   selectedLabelStyle: TextStyle(fontWeight: FontWeight.bold),
      //   onTap: _onItemTapped,
      //   backgroundColor: Colors.lime,
      //   elevation: 0,
      // ),
    );
  }
}
