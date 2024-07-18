import React from 'react'
import { Cardcollection } from '../component/Cardcollection'
import Cardcollectionnew from '../component/Cardcollectionnew'
import Promobanner from '../component/Promobanner'
import { Swipercarousel } from '../component/Swipercarousel'
const Womenpage = () => {
  return (
    <div>
      <Swipercarousel/>
      <Cardcollection/>
      <Cardcollectionnew/>
      <Promobanner/>
    </div>
  )
}

export default Womenpage
