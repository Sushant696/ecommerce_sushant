import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import './index.css'
import Basket from "./pages/basket";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
