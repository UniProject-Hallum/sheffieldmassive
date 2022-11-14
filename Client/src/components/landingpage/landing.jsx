import React from 'react'
import Header from '../header/Header'
import Search from '../search/search'
import Slide from '../slider/slide'
import Footer from '../footer/footer'
import Card from '../cards/Card'

const landing = () => {
  return (
    <div>
        <Header />
        <Search />
        <Slide />
        <Card />
        <Footer />
    </div>
    
  )
}

export default landing