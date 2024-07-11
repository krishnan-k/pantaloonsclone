import React from "react";
import { Navbar } from "./component/Navbar";
import {Swipercarousel} from "./component/Swipercarousel"
import { Cardcollection } from "./component/Cardcollection";
function App() {
  return (
    <div>
      <Navbar/>
      <Swipercarousel/>
      <Cardcollection/>
    </div>
  );
}

export default App;
