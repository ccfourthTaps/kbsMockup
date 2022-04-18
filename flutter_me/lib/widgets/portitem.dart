import 'dart:ffi';

import 'package:flutter/material.dart';

import 'package:flutter/material.dart';
import 'package:flutter_me/constants/asset.dart';

class PortItem {
  final String image;
  final String name;
  // final VoidCallback onpress;
  PortItem(this.image,this.name);
}

class PortItemView{ 
  List<PortItem> get items => <PortItem>[
  PortItem(Asset.bangkokImg,'Bangkok Bank'),
   PortItem(Asset.catImg,'CAT'),
   PortItem(Asset.easyImg,'Easy Buy'),
   PortItem(Asset.peaImg,'PEA'),
   PortItem(Asset.postImg,'Thailand Post'),
   PortItem(Asset.tanarakImg,'Treasury'),
   PortItem(Asset.teedinImg,'Department of Lands'),
   PortItem(Asset.trainImg,'Railway of Thai')
]; 
}
// PortItem(Asset.bangkokImg,'Bangkok Bank'),
//    PortItem(Asset.catImg,'CAT'),
//    PortItem(Asset.easyImg,'Easy Buy'),
//    PortItem(Asset.peaImg,'PEA'),
//    PortItem(Asset.postImg,'Thailand Post'),
//    PortItem(Asset.tanarakImg,'Treasury'),
//    PortItem(Asset.teedinImg,'Department of Lands'),
//    PortItem(Asset.trainImg,'Railway of Thai')