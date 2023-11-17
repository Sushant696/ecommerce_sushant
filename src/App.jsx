import {Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import './index.css'
import Basket from "./pages/basket";
import StoreContextProvider from "./context/storeProvider";


function App() {


  return (
    <StoreContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
    </StoreContextProvider>
  );
}

export default App;

// here in app render the layout (side bar + layout) do the routing in anohter component as necessary