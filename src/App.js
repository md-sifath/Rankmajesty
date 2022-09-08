
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/css/theme.bundle.css";
import "../src/assets/css/libs.bundle.css";
import "../src/assets/css/libs.bundle.css.map";
import "../src/assets/css/theme-dark.bundle.css.map";
import "../src/assets/css/theme.bundle.css.map";
import Layout from './Component/Layout/Layout';
import SideNav from './Component/Layout/SideNav';
import Profile from './Component/MyProfile/Profile';
import Earning from './Component/Earniing/Earning';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/earning" element={<Earning />} />
        
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
