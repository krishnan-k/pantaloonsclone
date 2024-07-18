import React, { useCallback, useState } from 'react'
import { Swipercarousel } from './Swipercarousel'
import { Cardcollection } from './Cardcollection'
import Cardcollectionnew from './Cardcollectionnew'
import Cardcollectiontrend from './Cardcollectiontrend'
import Grid  from './Grid'
import Brand from './Brand'
import Video from './Video'
import Promobanner from './Promobanner'
import Support from './Support'
import Giftcard from './Giftcard'
import Greencard from './Greencard'
import Bestseller from './Bestseller'
const Home = () => {
  return (
    <div>
      <Swipercarousel/>
      <Cardcollection/>
      <Cardcollectionnew/>
      <Cardcollectiontrend/>
      <Bestseller/>
      <Grid/>
      <Brand/>
      <Video/>
      <Giftcard/>
      <Greencard/>
      <Promobanner/>
      <Support/>
    </div>
  )
}

export default Home
