import 'package:EasyList/models/product.dart';
import 'package:EasyList/scoped_models/connected_products.dart';

mixin ProductsModel on ConnectedProducts {
  bool _showFavorites = false;

  List<Product> get allProducts => List.from(products);
  List<Product> get displayedProducts {
    return _showFavorites
        ? products.where((Product product) => product.isFavorite).toList()
        : List.from(products);
  }

  int get selectedProductIndex => selProductIndex;

  bool get displayFavoriteOnly => _showFavorites;

  Product get selectedProduct {
    if (selProductIndex == null) return null;
    return products[selProductIndex];
  }

  void deleteProduct() {
    products.removeAt(selProductIndex);
    selProductIndex = null;
    notifyListeners();
  }

  void updateProduct(
      String title, String description, String image, double price) {
    final Product updatedProduct = Product(
        title: title,
        description: description,
        image: image,
        price: price,
        userEmail: selectedProduct.userEmail,
        userId: selectedProduct.userId);
    products[selProductIndex] = updatedProduct;
    selProductIndex = null;
    notifyListeners();
  }

  void selectProduct(int index) {
    selProductIndex = index;
    notifyListeners();
  }

  void toggleProductFavoriteStatus() {
    final bool isCurrentlyFavorite = products[selProductIndex].isFavorite;
    final bool newFavouriteStatus = !isCurrentlyFavorite;
    final Product updatedProduct = Product(
        title: selectedProduct.title,
        description: selectedProduct.description,
        image: selectedProduct.image,
        price: selectedProduct.price,
        userEmail: selectedProduct.userEmail,
        userId: selectedProduct.userId,
        isFavorite: newFavouriteStatus);
    products[selProductIndex] = updatedProduct;

    notifyListeners();
    selProductIndex = null;
  }

  void toggleDisplayMode() {
    _showFavorites = !_showFavorites;
    notifyListeners();
  }
}
