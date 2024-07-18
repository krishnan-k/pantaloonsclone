import React from 'react'
import { Cardcollection } from '../component/Cardcollection'
import Cardcollectionnew from '../component/Cardcollectionnew'
import Promobanner from '../component/Promobanner'
import {womenCarousel} from "../component/Womencarousel"
const Womenpage = () => {
  return (
    <div>
      <Cardcollection/>
      <Cardcollectionnew/>
      <Promobanner/>
    </div>
  )
}

export default Womenpage
