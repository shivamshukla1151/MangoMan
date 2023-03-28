import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AllProducts from "./pages/AllProducts";
import Footer from "./components/Footer";
import store from "./store/store";
import { Provider } from "react-redux";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/allproducts" element={<AllProducts />}></Route>
            <Route path="/men" element={<MenPage />}></Route>
            <Route path="/women" element={<WomenPage />}></Route>
            <Route path="/singleproduct" element={<SingleProduct />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
