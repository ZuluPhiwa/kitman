

import About from './components/About'
import Contact2 from './components/Contact2'
import Footer2 from './components/Footer2'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import { ShopContextProvider } from './context/ShopContext'
import { Link, Outlet } from "react-router-dom";

function App() {


  return (
    <>
    <Navbar/>
    <ShopContextProvider>
      
     
    <Outlet/>
    <Footer2/>
     
     

      </ShopContextProvider>
    </>
  )
}

export default App
