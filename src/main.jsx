import React from 'react'
import ReactDOM from 'react-dom/client'
// import Products from './components/products'
import "./index.css"
// import Smartphone from './pages/category/smartphone'
// import Consumer from './pages/category/smartphone'
// import Smartphone from './pages/category/smartphone'
import App from './App'
import Smartphone from './pages/category/smartphone'
// import SideBar from './components/sidebar'
// import PageLayout  from './components/layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <Products/> */}
    {/* <Smartphone/> */}
    {/* <Consumer/> */}
    <Smartphone/>
  </React.StrictMode>,
)
