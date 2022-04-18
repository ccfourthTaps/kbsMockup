import 'package:flutter/material.dart';
import 'package:flutter_me/main.dart';
import 'package:flutter_me/widgets/folio.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';


class Servicepage extends StatefulWidget {
  const Servicepage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<Servicepage> createState() => _Servicepage();
}

// This widget is the root of your application.
class _Servicepage extends State<Servicepage> {
  int _selectedIndex = 1;

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
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
    switch (index) {
      case 0:
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => MyApp()),
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
      body: Center(
        child: Column(
          children: <Widget>[_buildList(), Expanded(child: _buildContact())],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
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
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.green[800],
        onTap: _onItemTapped,
        backgroundColor: Colors.lime,
      ),
    );
  }
}

Widget _buildList() {
  return ListView(
    scrollDirection: Axis.vertical,
    shrinkWrap: true,
    children: [
      _tile('Web Developer', 'React', FontAwesomeIcons.react),
      _tile('Mobile-Android', 'Flutter', FontAwesomeIcons.android),
      _tile('Mobile-Ios', 'Flutter', FontAwesomeIcons.apple),
      _tile('Server Infrastructure', 'Solution', FontAwesomeIcons.database),
      // const Divider(),
      _tile('GitHub', 'Developer', FontAwesomeIcons.github),
    ],
  );
}

ListTile _tile(String title, String subtitle, IconData icon) {
  return ListTile(
    title: Text(title,
        style: const TextStyle(
          fontWeight: FontWeight.w500,
          fontSize: 20,
        )),
    subtitle: Text(subtitle),
    leading: Icon(
      icon,
      color: Colors.blue[500],
    ),
  );
}

Widget _buildContact() {

  return Card(
    color: Colors.white,
    // shape: RoundedRectangleBorder(
    //   borderRadius: BorderRadius.circular(12.0),
    // ),
    elevation: 3,
    child: Container(
      child: Center(
          child: TextButton.icon(icon: Icon(Icons.contact_phone),
        onPressed: _lunchURL,
        label: Text('About Us'),
      )
      ),
    ),
  );
}

void _lunchURL() async{
  const url = "https://the-ampersand.net/";
  if (await canLaunch(url)) {
    await launch(url);
  } else {
    throw 'Could not launch $url';
  }
}
