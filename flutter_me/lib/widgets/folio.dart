import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_me/constants/asset.dart';
import 'package:flutter_me/main.dart';
import 'package:flutter_me/widgets/portitem.dart';
import 'package:flutter_me/widgets/servicepage.dart';
import 'package:carousel_slider/carousel_slider.dart';

class Folio extends StatefulWidget {
  const Folio({Key? key, required this.title}) : super(key: key);

  final String title;

  State<Folio> createState() => _Folio();
}

// This widget is the root of your application.
class _Folio extends State<Folio> {
  int _selectedIndex = 2;

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
            context, MaterialPageRoute(builder: (context) => MyApp()));
        break;
      case 1:
        Navigator.push(
          context,
          MaterialPageRoute(
              builder: (context) => Servicepage(
                    title: '',
                  )),
        );
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'title',
        home: Scaffold(
          appBar: AppBar(
            title: const Text('Portfolio'),
            foregroundColor: Colors.green[800],
            backgroundColor: Colors.lime,
          ),
          body: ListView(
            padding: EdgeInsets.all(32),
            children: [
              buildBackgroundCard(
                  'กรมที่ดิน', 'Setup environment', Asset.teedinImg),
              buildBackgroundCard(
                  'การไฟฟ้าสว่น ภูมิภาค', 'PEA Vaccine', Asset.peaImg),
              buildBackgroundCard(
                  'กรมธนารักษ์', 'Oracle SOA implementation', Asset.tanarakImg),
              buildBackgroundCard(
                  'การรถไฟแห่ง ประเทศไทย',
                  'Server Installation and Environment Preparation',
                  Asset.trainImg),
              buildBackgroundCard('บริษัท ไปรษณีย์ ไทย จํากัด',
                  'Data cleansing', Asset.postImg),
              buildBackgroundCard('CAT', 'Order Management', Asset.catImg),
              buildBackgroundCard(
                  'ธนาคารกรุงไทย จํากัด (มหาชน)', 'U APP', Asset.bangkokImg),
              buildBackgroundCard(
                  'Easy Buy', 'Sunsystem Implementation', Asset.easyImg)
            ],
          ),

          //     Container(
          //   padding: EdgeInsets.all(24),
          //   width: 340,
          //   height: 160,
          //   decoration: BoxDecoration(
          //     borderRadius: BorderRadius.circular(16),
          //     image: DecorationImage(
          //       image: AssetImage(Asset.catImg),
          //       fit: BoxFit.cover,
          //       colorFilter: ColorFilter.mode(
          //         Colors.black.withOpacity(0.25),
          //         BlendMode.darken,
          //       ),
          //     ),
          //   ),
          //   child: Column(
          //     mainAxisAlignment: MainAxisAlignment.center,
          //     mainAxisSize: MainAxisSize.min,
          //     crossAxisAlignment: CrossAxisAlignment.start,
          //     children: [
          //       Text(
          //         'CAT',
          //         style: TextStyle(
          //           fontSize: 24,
          //           fontWeight: FontWeight.bold,
          //           color: Colors.white,
          //         ),
          //       ),
          //       const SizedBox(height: 8),
          //       Text(
          //         '70-150\$',
          //         style: TextStyle(fontSize: 24, color: Colors.white),
          //       ),
          //     ],
          //   ),
          // ),
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
        ));
  }
}

Widget buildBackgroundCard(brandName, brandDetail, brandImg) {
  return Container(
    margin: const EdgeInsets.only(top: 10.0),
    padding: EdgeInsets.all(24),
    width: double.infinity,
    height: 200,
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(16),
      image: DecorationImage(
        image: AssetImage(brandImg),
        fit: BoxFit.cover,
        colorFilter: ColorFilter.mode(
          Colors.black.withOpacity(0.25),
          BlendMode.darken,
        ),
      ),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          brandName,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.white,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          brandDetail,
          style: TextStyle(fontSize: 24, color: Colors.white),
        ),
      ],
    ),
  );
}
