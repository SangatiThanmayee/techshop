import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";



export default function App() {
  return (
    
      <BrowserRouter>
      <CartProvider>
        <SearchProvider>
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Search */}
          <Route path="/search" element={<Search />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <Footer />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
    
  );
}
