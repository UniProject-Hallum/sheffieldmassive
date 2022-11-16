import React from 'react'
import Header from '../header/Header'
import Skills from '../handylanding/myskills'
import Banner from '../handylanding/banner'
import JobReq from "../handylanding/jobrequest"
import AcceptJobs from "../handylanding/acceptedjobs"
import Footer from '../footer/footer'

const handylanding = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Skills />
        
        <JobReq />
        <AcceptJobs />
        <Footer />
    </div>
    
  )
}

export default handylanding