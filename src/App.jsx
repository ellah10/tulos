import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WearList from './components/WearList'


function App() {
  return (
    <div>
      <Navbar/>
      <WearList/>
      <Footer/>
    </div>
  )
}

export default App
