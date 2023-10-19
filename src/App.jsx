import { BrowserRouter as Router ,Routes , Route } from "react-router-dom";
import Home from "./components/home";
import './index.css'
import Basket from "./components/basket";

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
