import React from 'react'
import Cardcollectionnew from '../component/Cardcollectionnew'  
import { Cardcollection } from '../component/Cardcollection'
import Banner from '../component/Banner'

const Menpage = () => {
  return (
    <div>
      <Banner/>
      <Cardcollectionnew/>
      <Cardcollection/>
    </div>
  )
}

export default Menpage
