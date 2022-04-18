import 'dart:collection';
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'package:url_launcher/url_launcher.dart';

class Inappweb extends StatefulWidget {
  // Inappweb({Key? key}) : super(key: key);

  @override
  _InappwebState createState() => _InappwebState();
}

class _InappwebState extends State<Inappweb> {
  late InAppWebViewController _webViewController;
  String url = "";
  double progress = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("O'Bounce Technologies"),
          centerTitle: true,
          elevation: 0,
          actions: [
            IconButton(
              onPressed: () {
                // if (_webViewController != null) {
                //   _webViewController.reload();
                // }
              },
              icon: Icon(Icons.refresh),
            ),
          ],
        ),
        body: Container(
            child: Column(children: [
          progress < 1.0
              ? LinearProgressIndicator(
                  value: progress,
                  backgroundColor: Colors.white,
                  // valueColor:
                  //     AlwaysStoppedAnimation<Color>(Colors.green[800]),
                )
              : Center(), // this perform the loading on every page load
          Expanded(
            child: InAppWebView(
              initialData: InAppWebViewInitialData(data: """
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    </head>
    <body>
        <h1>JavaScript Handlers (Channels) TEST</h1>
        <button id='test' onclick="window.flutter_inappwebview.callHandler('testFunc');">Test</button>
        <button id='testargs' onclick="window.flutter_inappwebview.callHandler('testFuncArgs', 1);">Test with Args</button>
        <button id='testreturn' onclick="window.flutter_inappwebview.callHandler('testFuncReturn').then(function(result) { alert(result);});">Test Return</button>
    </body>
</html>
                  """),
              initialUrlRequest: URLRequest(
                url: Uri.parse("https://flutter.dev/"),
              ),
              initialOptions: InAppWebViewGroupOptions(
                crossPlatform:
                    InAppWebViewOptions(useShouldOverrideUrlLoading: true),
              ),
              shouldOverrideUrlLoading: (controller, navigationAction) async {
                // any code;
                final uri = navigationAction.request.url!;
                print("uri = " + uri.toString());

                if (uri.toString().contains('https://flutter.dev/')) {
                  //
                  print("Allow");
                  return NavigationActionPolicy.ALLOW;
                }
                print("Cancel");
                return NavigationActionPolicy.CANCEL;
              },
              onWebViewCreated: (InAppWebViewController controller) {
                _webViewController = controller;

                _webViewController.addJavaScriptHandler(
                    handlerName: 'testFunc',
                    callback: (args) {
                      print(args);
                    });

                _webViewController.addJavaScriptHandler(
                    handlerName: 'testFuncArgs',
                    callback: (args) {
                      print(args);
                    });

                _webViewController.addJavaScriptHandler(
                    handlerName: 'testFuncReturn',
                    callback: (args) {
                      print(args);
                      return '2';
                    });
              },
              onConsoleMessage: (controller, consoleMessage) {
                print(consoleMessage);
              },
            ),
          )
        ])));
  }
}
