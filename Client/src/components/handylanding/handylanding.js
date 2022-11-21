import React from 'react'
import Header from '../header/Header'

import Selectskills from './Selectskills.js'
// import Listofskills from 

import Banner from './banner'
import JobReq from "./jobrequest"
import AcceptJobs from "./acceptedjobs"
import Footer from '../footer/footer'

const Handylanding = () => {
  return (
    <div>
        <Header />
        <Banner />

        <Selectskills className=" sm:flex pt-5 pr-20 justify-center"/>
        
        <JobReq />
        <AcceptJobs />
        <Footer />
    </div>
    
  )
}

export default Handylanding