import React from 'react'
import Header from '../header/Header'
import MySkills from './Myskills'
import Banner from './banner'
import JobReq from "./jobrequest"
import AcceptJobs from "./acceptedjobs"
import Footer from '../footer/footer'
import { useUser } from '../../auth/useUser'


const Handylanding = () => {
    let user = useUser()
    console.log(user)
  return (
    <div>
        <Header />
        <Banner />
        <MySkills/>
        <JobReq />
        <AcceptJobs />
        <Footer />
    </div>
    
  )
}

export default Handylanding