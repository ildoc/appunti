import 'package:EasyList/models/product.dart';
import 'package:EasyList/scoped_models/main.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:EasyList/widgets/products/product_card.dart';
import 'package:flutter/material.dart';

class Products extends StatelessWidget {
  Widget _buildProductList(List<Product> products) {
    Widget productCards;

    if (products.length > 0)
      productCards = ListView.builder(
        itemBuilder: (BuildContext context, int index) =>
            ProductCard(products[index], index),
        itemCount: products.length,
      );
    else
      productCards = Center(
        child: Text('No product found'),
      );

    return productCards;
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant(
        builder: (BuildContext context, Widget child, MainModel model) {
      return _buildProductList(model.displayedProducts);
    });
  }
}
