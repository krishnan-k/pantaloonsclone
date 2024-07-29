import React from "react";
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brandpage from "./pages/Brandpage";
import Womenpage from "./pages/Womenpage";
import Menpage from "./pages/Menpage";
import { Account } from "./pages/Account";
import { Cart } from "./pages/Cart";
import Beauty from "./pages/Beauty";
import Support from "./component/Support";
import Kids from "./pages/Kids";
import Admin from "./Admin/Admin";
import Womendashboard from "./Admin/Womendashboard";
import Mendashboard from "./Admin/Mendashboard";
import Kidsdashboard from "./Admin/Kidsdashboard";
import Editdashboard from "./Admin/Editdashboard";
function App() {
  return (
    <div> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="women" element={<Womenpage />} />
          <Route path="men" element={<Menpage />} />
          <Route path="kids" element={<Kids/>}/>
          <Route path="beauty" element={<Beauty />} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/womendashboard" element={<Womendashboard/>}/>
          <Route path="/admin/mendashboard" element={<Mendashboard/>}/>
          <Route path="/admin/kidsdashboard" element={<Kidsdashboard />}/>
          <Route path="/admin/editdashboard" element={<Editdashboard/>}/>
          <Route path="brand" element={<Brandpage />} />
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Support/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
