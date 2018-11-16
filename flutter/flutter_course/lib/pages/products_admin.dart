import 'package:EasyList/pages/product_create.dart';
import 'package:EasyList/pages/product_list.dart';
import 'package:EasyList/pages/products.dart';
import 'package:flutter/material.dart';

class ProductsAdminPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        drawer: Drawer(
          child: Column(
            children: <Widget>[
              AppBar(
                automaticallyImplyLeading: false,
                title: Text('Choose'),
              ),
              ListTile(
                title: Text('Products'),
                onTap: () => Navigator.pushReplacementNamed(context, '/'),
              ),
            ],
          ),
        ),
        appBar: AppBar(
          title: Text('Product Admin'),
          bottom: TabBar(
            tabs: <Widget>[
              Tab(
                icon: Icon(Icons.create),
                text: 'Create',
              ),
              Tab(
                icon: Icon(Icons.list),
                text: 'Products',
              ),
            ],
          ),
        ),
        body: TabBarView(
          children: <Widget>[
            ProductCreatePage(),
            ProductListPage(),
          ],
        ),
      ),
    );
  }
}
