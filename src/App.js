import React from 'react';
import './App.css';
import AdminFirstScreen from './component/adminscreen/AdminFirstScreen';
import Login from './component/commonScreen/Login';
import Signup from './component/commonScreen/Signup';
import WelcomeScreen from './component/commonScreen/WelcomeScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSecondScreen from './component/adminscreen/AdminSecondScreen';
import AdminSetting from './component/adminscreen/AdminSetting';
import AdminLastScreen from './component/adminscreen/AdminLastScreen';
import Setting from './component/userPage/UserSetting';
import ShoppingCart from './component/userPage/ShoppinCart';
import Home from './component/userPage/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/admin' element={<AdminFirstScreen />} />
        <Route path='/addproduct' element={<AdminSecondScreen />} />
        <Route path='/setting' element={<AdminSetting />} />
        <Route path='/order' element={<AdminLastScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
