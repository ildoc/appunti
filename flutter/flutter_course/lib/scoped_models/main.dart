import 'package:EasyList/scoped_models/connected_products.dart';
import 'package:EasyList/scoped_models/products.dart';
import 'package:EasyList/scoped_models/user.dart';
import 'package:scoped_model/scoped_model.dart';

class MainModel extends Model with ConnectedProducts, UserModel, ProductsModel {
}
