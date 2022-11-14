import React from 'react'
import Header from '../header/header'
import Skills from '../handylanding/myskills'
import Banner from '../handylanding/banner'
import JobReq from "../handylanding/jobrequest"
import Footer from '../footer/footer'

const handylanding = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Skills />
        
        <JobReq />

        <Footer />
    </div>
    
  )
}

export default handylanding