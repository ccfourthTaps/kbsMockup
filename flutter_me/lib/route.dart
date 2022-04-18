import 'package:flutter/cupertino.dart';
import 'package:flutter_me/main.dart';
import 'package:flutter_me/pages/pages.dart';

class Route{
  static const home  = '/main';
  static const service = '/service';
  static const folio = '/folio';

  static Map<String , WidgetBuilder> getAll() => _route;

  static final Map<String, WidgetBuilder> _route = {
    home: (context) =>  MyHomePage(title: 'title'),
    service: (context) =>  Servicepage(title: 'title'),
    folio: (context) =>  Folio(title: 'title'),
  };
}