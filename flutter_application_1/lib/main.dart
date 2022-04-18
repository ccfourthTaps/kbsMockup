import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

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
      home: Randomword(),
    );
  }
}

class Randomword extends StatefulWidget {
  const Randomword({Key? key}) : super(key: key);

  @override
  _RandomwordState createState() => _RandomwordState();
}

class _RandomwordState extends State<Randomword> {
  final _suggest = <WordPair>[];
  final _biggerFont = TextStyle(fontSize: 18.0);
  final _saved = Set<WordPair>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Gen'),
        actions: [IconButton(onPressed: _pushSaved, icon: Icon(Icons.list))],
      ),
      body: _buildSuggest(),
    );
  }

  Widget _buildSuggest() {
    return ListView.builder(
      padding: EdgeInsets.all(16.0),
      itemBuilder: (context, i) {
        if (i.isOdd) return Divider();
        final index = i ~/ 2;
        if (index >= _suggest.length) {
          _suggest.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggest[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair) {
    final already = _saved.contains(pair);
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      ),
      trailing: Icon(already ? Icons.favorite : Icons.favorite_border,
          color: already ? Colors.red : null),
      onTap: () {
        setState(() {
          if (already) {
            _saved.remove(pair);
          } else {
            _saved.add(pair);
          }
        });
      },
    );
  }

  void _pushSaved() {
    Navigator.of(context)
        .push(MaterialPageRoute<void>(builder: (BuildContext context) {
      final tiles = _saved.map(
        (WordPair pair) {
          return ListTile(
            title: Text(
              pair.asPascalCase,
              style: _biggerFont,
            ),
          );
        },
      );
      final divided = ListTile.divideTiles(
        context: context,
        tiles: tiles,
      ).toList();

      return Scaffold(
        appBar: AppBar(
          title: Text('Save suggest'),
        ),
        body: ListView(children: divided),
      );
    }));
  }
}
