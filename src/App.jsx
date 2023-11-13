import {Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import './index.css'
import Basket from "./pages/basket";
import { StoreProvider } from "./context/ecommerceContext"; 

function App() {
  return (
    <StoreProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
    </StoreProvider>
  );
}

export default App;


// here in app render the layout (side bar + layout) do the routing in anohter component as necessary