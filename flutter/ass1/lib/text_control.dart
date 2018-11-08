import 'package:ass1/text_output.dart';
import 'package:flutter/material.dart';

class TextControl extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _TextControlState();
  }
}

class _TextControlState extends State<TextControl> {
  String _mainText = 'testo 1';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        RaisedButton(
          child: Text('button'),
          onPressed: () {
            setState(() {
              _mainText = 'changed';
            });
          },
        ),
        TextOutput(_mainText)
      ],
    );
  }
}
