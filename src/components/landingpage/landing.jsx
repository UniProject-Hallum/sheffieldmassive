import React from 'react'
import Header from '../header/header'
import Search from '../search/search'
import Slide from '../slider/slide'
import Carousel from '../carousel/carousel'
import Footer from '../footer/footer'

const landing = () => {
  return (
    <div>
        <Header />
        <Search />
        <Slide />
        <Carousel />
        <Footer />
    </div>
    
  )
}

export default landing