import React from 'react'
import './App.css'
import Header from './components/header/Header';
import HomePage from './home/HomePage';
import SinglePage from "./components/watch/SinglePage"
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import Footer from './components/footer/Footer';

 
const App = () => {
  return (

    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/singlepage/:id' element={<SinglePage/>} exact />
        </Routes>
        <Footer/>
    </Router>
    
  )
}

export default App;