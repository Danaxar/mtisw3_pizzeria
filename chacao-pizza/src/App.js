import React from "react";
// import 'boxicons';
import Home from "./pages";
import {Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import Locales from "./pages/locales";
import Login from "./pages/Login";
import Domicilio from "./components/Domicilio";
import Comprar from "./pages/Comprar";

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/locales' element={<Locales/>} exact/>
            <Route path='/login' element={<Login/>} exact/>
            <Route path='/domicilio' element={<Domicilio/>} exact/>
            <Route path='/comprar' element={<Comprar/>} exact/>
          </Routes>
        </div>
      </Layout>
      {/* <Home/> */}
    </div>
  );
}

export default App;
