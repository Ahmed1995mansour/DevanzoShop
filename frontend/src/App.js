import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersListScreen from "./screens/UsersListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route
              path='/product/:id'
              element={<ProductScreen />}
            />
            <Route
              path='/order/:id'
              element={<OrderScreen />}
            />
            <Route
              path='/login'
              element={<LoginScreen />}
            />
            <Route
              path='/shipping'
              element={<ShippingScreen />}
            />
            <Route
              path='/payment'
              element={<PaymentScreen />}
            />
            <Route
              path='/placeorder'
              element={<PlaceOrderScreen />}
            />
            <Route
              path='/register'
              element={<RegisterScreen />}
            />
            <Route
              path='/profile'
              element={<ProfileScreen />}
            />
            <Route
              exact
              path='/admin/productlist'
              element={<ProductListScreen />}
            />
            <Route
              exact
              path='/admin/productlist/:pageNumber'
              element={<ProductListScreen />}
            />
            <Route
              path='/admin/orderlist'
              element={<OrderListScreen />}
            />
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            />
            <Route
              path='/admin/userlist'
              element={<UsersListScreen />}
            />
            <Route
              path='/admin/user/:id/edit'
              element={<UserEditScreen />}
            />
            <Route path='/cart'>
              <Route
                path=':id'
                element={<CartScreen />}
              />
              <Route
                path=''
                element={<CartScreen />}
              />
            </Route>
            <Route
              exact
              path='/search/:keyword'
              element={<HomeScreen />}
            />
            <Route
              path='/page/:pageNumber'
              element={<HomeScreen />}
            />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
            />
            <Route
              exact
              path='/'
              element={<HomeScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
