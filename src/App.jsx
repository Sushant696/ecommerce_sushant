import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import './index.css'
import Basket from "./pages/basket";
// import { StoreProvider } from "./context/context";

function App() {
  return (
    // <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    // </StoreProvider>
  );
}

export default App;
