import React from "react";
// import 'boxicons';
import Home from "./pages";
import {Routes, Route} from 'react-router-dom';
import Layout from "./Layout";
import Locales from "./pages/locales";
import Login from "./pages/Login";
import Domicilio from "./pages/Domicilio";
import Comprar from "./pages/Comprar";
import Pagar from "./pages/Pagar";
import {DataProvider} from "./context/Dataprovider"
import "boxicons";  //!

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Layout>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/locales' element={<Locales/>} exact/>
            <Route path='/login' element={<Login/>} exact/>
            <Route path='/domicilio' element={<Domicilio/>} exact/>
            <Route path='/comprar' element={<Comprar/>} exact/>
            <Route path='/pagar' element={<Pagar/>} exact />
          </Routes>
        </div>
      </Layout>
      {/* <Home/> */}
    </div>
    </DataProvider>
  );
}

export default App;
