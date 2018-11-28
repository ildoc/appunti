import 'package:EasyList/models/user.dart';
import 'package:EasyList/scoped_models/connected_products.dart';

mixin UserModel on ConnectedProducts {
  void login(String email, String password) {
    authenticatedUser =
        User(id: 'asdasdfasd', email: email, password: password);
  }
}
