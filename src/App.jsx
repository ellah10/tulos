import './App.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Featured from './Pages/Featured'
import New from './Pages/New';
import Accessories from './Pages/Accessories'
import Shop from './Pages/Shop'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WearList from './components/WearList'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<WearList />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/new" element={<New />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
