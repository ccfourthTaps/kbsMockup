import 'package:flutter/cupertino.dart';
import 'package:mystock/src/pages/management/manament_page.dart';
import 'package:mystock/src/pages/pages.dart';

class Route{
  static const home = '/home';
  static const login = '/login';
  static const dashboard = '/dashboard';
  static const management = '/management';

  static Map<String, WidgetBuilder> getAll() => _route;

  static final Map<String, WidgetBuilder> _route = {
    home : (context) => HomePage(),
    login : (context) => LoginPage(),
    dashboard : (context) => DashBoardPage(),
    management : (context) => ManagementPage(),
  };
}