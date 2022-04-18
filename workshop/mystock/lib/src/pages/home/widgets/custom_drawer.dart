import 'package:badges/badges.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mystock/src/constants/setting.dart';
import 'package:mystock/src/viewmodels/menu_view_model.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:mystock/src/config/route.dart' as custom_route;

class CustomDrawer extends StatefulWidget {
  @override
  _CustomDrawerState createState() => _CustomDrawerState();
}

class _CustomDrawerState extends State<CustomDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          _buildProfile(),
          ..._buildMainMenu(),
          Spacer(),
          SafeArea(
            child: ListTile(
              leading: FaIcon(
                FontAwesomeIcons.signOutAlt,
                color: Colors.grey,
              ),
              title: Text('Logout'),
              onTap: showDialogLogout,
            ),
          ),
        ],
      ),
    );
  }

  void showDialogLogout() {
    showDialog<void>(
      context: context,
      barrierDismissible: true,
      builder: (BuildContext dialogContext) {
        return AlertDialog(
          content: Text('Are you sure you want to log out?'),
          actions: <Widget>[
            TextButton(
              child: Text('Cancel'),
              onPressed: () {
                Navigator.of(dialogContext).pop(); // Dismiss alert dialog
              },
            ),
            TextButton(
              style: TextButton.styleFrom(
                primary: Colors.red,
              ),
              child: Text('Logout'),
              onPressed: () {
                SharedPreferences.getInstance().then((prefs) {
                  prefs.remove(Setting.TOKEN_PREF);
                  //prefs.clear();
                  Navigator.of(dialogContext).pop(); // Dismiss alert dialog
                  Navigator.pushNamedAndRemoveUntil(
                    context,
                    custom_route.Route.login,
                    (route) => false,
                  );
                });
              },
            ),
          ],
        );
      },
    );
  }

  UserAccountsDrawerHeader _buildProfile() => UserAccountsDrawerHeader(
        accountName: Text('iBlurBlur DotDev'),
        accountEmail: Text('tanakorn.ngam@gmail.com'),
        currentAccountPicture: CircleAvatar(
          backgroundImage: NetworkImage(
            'https://cdn-images-1.medium.com/max/280/1*X5PBTDQQ2Csztg3a6wofIQ@2x.png',
          ),
        ),
      );

  List<ListTile> _buildMainMenu() => MenuViewModel()
      .items
      .map(
        (item) => ListTile(
          title: Text(
            item.title,
            style: TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 18.0,
            ),
          ),
          leading: Badge(
            showBadge: item.icon == FontAwesomeIcons.inbox,
            badgeContent: Text(
              '99',
              style: TextStyle(
                color: Colors.white,
                fontSize: 12,
              ),
            ),
            badgeColor: Colors.red,
            child: FaIcon(
              item.icon,
              color: item.iconColor,
            ),
          ),
          onTap: () {
            item.onTap(context);
          },
        ),
      )
      .toList();
}
