import {Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import './index.css'
import Basket from "./pages/basket";
import StoreContextProvider from "./context/storeProvider";
import WishList from "./pages/category/wishlist";


function App() {


  return (
    <StoreContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<WishList/>} />
        </Routes>
    </StoreContextProvider>
  );
}

export default App;

// here in app render the layout (side bar + layout) do the routing in anohter component as necessary