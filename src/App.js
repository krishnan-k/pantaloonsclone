import React from "react";
import { Navbar } from "./component/Navbar";
import {Swipercarousel} from "./component/Swipercarousel"
import { Cardcollection } from "./component/Cardcollection";
import Cardcollectionnew from "./component/Cardcollectionnew";
import Cardcollectiontrend from "./component/Cardcollectiontrend";
import Grid from "./component/Grid";
import Brand from "./component/Brand";
import Video from "./component/Video";
import Promobanner from "./component/Promobanner";
import Support from "./component/Support";
import Footer from "./component/Footer";



function App() {
  return (
    <div>
      <Navbar/>
      <Swipercarousel/>
      <Cardcollection/>
      <Cardcollectionnew/>
      <Cardcollectiontrend/>
      <Grid/>
      <Brand/>
      <Video/>
      <Promobanner/>
      <Support/>
      <Footer/>
    </div>
  );
}

export default App;
