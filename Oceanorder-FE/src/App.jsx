import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDataFetch } from "../DataFetchfromApi";
import { useState, useEffect } from "react";
import Popup from "./Components/Popup/Form";
import Navbar from "./Components/Navbar/Navbar";
import SubHeader from "./Components/SubHeader/SubHeader";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile";
import ProductsPage from "./Pages/ProductsPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import Footer from "./Components/Footer/Footer";
import { AllProductData } from "../AllProductData";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  //  const products = [
  //    { name: 'Product A', category: 'pump' },
  //    { name: 'Product B', category: 'valve' },
  //    { name: 'Product C', category: 'pump' },
  //    { name: 'Product D', category: 'valve' },
  //  ];

  //  const filteredProducts = products.filter((product, i, arr) => {
  //    if (product.category === 'pump ') {
  //      return true;
  //    }

  //    return false;
  //  });

  //  console.log(filteredProducts);

  const [defaultScroll, setDefaultScroll] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setDefaultScroll(true);
  }, [location]);
  function ScrollToTopOnPageChange() {
    if (defaultScroll) {
      const { pathname } = useLocation();
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
      return null;
    }
  }

  // cart logic
  const [cart, setCart] = useState([]);

  const addToCart = (singleData) => {
    const obj = {
      id: singleData.id,
      productName: singleData.productName,
      imageSrc: singleData.imageSrc,
      durationFull: singleData.durationFull,
      brand: singleData.brand,
      price: singleData.price,
      discountPercentage: singleData.discountPercentage,
    };
    // Check if the item already exists in the cart
    const exists = cart.find((cartItem) => cartItem.id === obj.id);

    // If the item doesn't exist, add it to the cart
    if (!exists) {
      // setCart((prevCart) => [...prevCart, obj]);
      setCart([...cart, obj]);
      alert("product add to cart");
    } else {
      alert("product already added to cart");
    }
    setDefaultScroll(false);
  };

  const deleteFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };
  return (
    <>
      <ScrollToTopOnPageChange />
      <Popup/>
      <SubHeader />
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Home AllProductData={AllProductData} />} />
        <Route
          path="/products"
          element={
            <ProductsPage
              AllProductData={AllProductData}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:category"
          element={
            <ProductsPage
              AllProductData={AllProductData}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/products/:category/:id"
          element={
            <ProductDetails
              AllProductData={AllProductData}
              addToCart={addToCart}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} deleteFromCart={deleteFromCart} />}
        />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Whatsapp />
    </>
  );
};

export default App;
