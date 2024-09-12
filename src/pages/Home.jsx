import React from 'react'
import Hero from '../Components/Hero'
import Latestcollection from '../Components/Latestcollection'
import BestSeller from '../Components/BestSeller'
import Ourpolicy from '../Components/Ourpolicy'
import Newsletterbox from '../Components/Newsletterbox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <Ourpolicy/>
      <Newsletterbox/>
    </div>
  )
}

export default Home
