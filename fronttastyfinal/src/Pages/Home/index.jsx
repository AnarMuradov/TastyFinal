import React from 'react'
import Slider from '../../Components/HomeSections/SliderSection'
import FetchSection from '../../Components/HomeSections/FetchSection'
import TastySection from '../../Components/HomeSections/TastySection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home page</title>
    </Helmet>
    <nav>
      <Slider/>
      <TastySection/>
      <FetchSection/>
    </nav>
    </>
  )
}

export default Home