import 'dart:io';

import 'package:flushbar/flushbar.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mystock/src/models/product.dart';
import 'package:mystock/src/pages/management/widgets/product_image.dart';
import 'package:mystock/src/services/network_service.dart';

class ManagementPage extends StatefulWidget {
  @override
  _ManagementPageState createState() => _ManagementPageState();
}

class _ManagementPageState extends State<ManagementPage> {
  bool _isEdit;
  final _spacing = 12.0;
  Product _product;
  final _form = GlobalKey<FormState>();
  File _imageFile;

  @override
  void initState() {
    _isEdit = false;
    _product = Product();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final Object arguments = ModalRoute.of(context).settings.arguments;
    if (arguments is Product) {
      _isEdit = true;
      _product = arguments;
    }

    return Scaffold(
      appBar: _buildAppBar(),
      body: SingleChildScrollView(
        child: Form(
          key: _form,
          child: Padding(
            padding: const EdgeInsets.all(12.0),
            child: Column(
              children: <Widget>[
                _buildNameInput(),
                SizedBox(height: _spacing),
                Row(
                  children: <Widget>[
                    Flexible(
                      child: _buildPriceInput(),
                      flex: 1,
                    ),
                    SizedBox(width: _spacing),
                    Flexible(
                      child: _buildStockInput(),
                      flex: 1,
                    ),
                  ],
                ),
                ProductImage(
                  callBack,
                  _product.image,
                ),
                SizedBox(height: 80),
              ],
            ),
          ),
        ),
      ),
    );
  }

  callBack(File imageFile) {
    this._imageFile = imageFile;
  }

  AppBar _buildAppBar() {
    return AppBar(
      title: Text(_isEdit ? 'Edit Product' : 'Create Product'),
      actions: [
        if (_isEdit) _buildDeleteButton(),
        TextButton(
          style: TextButton.styleFrom(
            primary:  Colors.white,
          ),
          onPressed: () {
            _form.currentState.save();
            FocusScope.of(context).requestFocus(FocusNode());
            if (_isEdit) {
              editProduct();
            } else {
              addProduct();
            }
          },
          child: Text('submit'),
        ),
      ],
    );
  }

  InputDecoration inputStyle(label) => InputDecoration(
        focusedBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.blue,
            width: 2,
          ),
        ),
        enabledBorder: OutlineInputBorder(
          borderSide: BorderSide(
            color: Colors.black12,
            width: 2,
          ),
        ),
        labelText: label,
      );

  TextFormField _buildNameInput() => TextFormField(
        initialValue: _product.name,
        decoration: inputStyle('name'),
        onSaved: (String value) {
          _product.name = value.isEmpty ? '-' : value;
        },
      );

  TextFormField _buildPriceInput() => TextFormField(
        initialValue: _product.price?.toString(),
        decoration: inputStyle('price'),
        keyboardType: TextInputType.number,
        onSaved: (String value) {
          _product.price = value.isEmpty ? 0 : int.parse(value);
        },
      );

  TextFormField _buildStockInput() => TextFormField(
        initialValue: _product.stock?.toString(),
        decoration: inputStyle('stock'),
        keyboardType: TextInputType.number,
        onSaved: (String value) {
          _product.stock = value.isEmpty ? 0 : int.parse(value);
        },
      );

  void addProduct() {
    NetworkService().addProduct(_product, imageFile: _imageFile).then((result) {
      Navigator.pop(context);
      showAlertBar(result);
    }).catchError((error) {
      showAlertBar(
        error.toString(),
        icon: FontAwesomeIcons.timesCircle,
        color: Colors.red,
      );
    });
  }

  void showAlertBar(
    String message, {
    IconData icon = FontAwesomeIcons.checkCircle,
    Color color = Colors.green,
  }) {
    Flushbar(
      message: message,
      icon: FaIcon(
        icon,
        size: 28.0,
        color: color,
      ),
      flushbarPosition: FlushbarPosition.TOP,
      duration: Duration(seconds: 3),
      flushbarStyle: FlushbarStyle.GROUNDED,
    )..show(context);
  }

  IconButton _buildDeleteButton() => IconButton(
        icon: Icon(Icons.delete_outlined),
        onPressed: () {
          showDialog<void>(
            context: context,
            builder: (BuildContext dialogContext) {
              return AlertDialog(
                title: Text('Delete Product'),
                content: Text('Are you sure you want to delete?'),
                actions: <Widget>[
                  TextButton(
                    child: Text('cancel'),
                    onPressed: () {
                      Navigator.of(dialogContext).pop(); // Dismiss alert dialog
                    },
                  ),
                  TextButton(
                    child: Text(
                      'ok',
                      style: TextStyle(
                        color: Colors.red,
                      ),
                    ),
                    onPressed: () {
                      Navigator.of(dialogContext).pop(); // Dis
                      deleteProduct(); // miss alert dialog
                    },
                  ),
                ],
              );
            },
          );
        },
      );

  void deleteProduct() {
    NetworkService().deleteProduct(_product.id).then((result) {
      Navigator.pop(context);
      showAlertBar(result);
    }).catchError((error) {
      showAlertBar(
        error.toString(),
        icon: FontAwesomeIcons.timesCircle,
        color: Colors.red,
      );
    });
  }

  void editProduct() {
    NetworkService()
        .editProduct(_product, imageFile: _imageFile)
        .then((result) {
      Navigator.pop(context);
      showAlertBar(result);
    }).catchError((error) {
      showAlertBar(
        error.toString(),
        icon: FontAwesomeIcons.timesCircle,
        color: Colors.red,
      );
    });
  }
}
