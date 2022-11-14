//import ReactDOM from "react-dom";
//import React, { useEffect, userState } from "react";
//import React, { Component } from "react";
import React from "react";
import Login from "./components/loginandregister/login2";
import Register from "./components/loginandregister/Register";
import Home from './components/landingpage/landing';
import Search from "./components/searchresults/results";
import Profile from "./components/profile/profile"
import Contact from "./components/contact/contact";
//import axios from 'axios'
import Users from "./components/test/User";

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

/*
class App extends Component{
  constructor(){
    super()
    this.state = {
      fullName:'',
      email:'',
      password:'',
      type:''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changeemail = this.changeemail.bind(this)
    this.changepassword = this.changepassword.bind(this)
    this.changetype = this.changetype.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
   
  }
  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeemail(event){
    this.setState({
      email:event.target.value
    })
  }
  changepassword(event){
    this.setState({
      password:event.target.value
    })
  }
  changetype(event){
    this.setState({
      type:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName:this.state.fullName,
      email:this.state.email,
      password:this.state.password,
      type:this.state.type

    }
    axios.post('http://localhost:4000/api/register', registered)
      .then(Response => console.log(Response.data))

    window.location = '/'
  }
  render() {
    return (
      <Router>
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/search' element={<Search/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    );
  }
}
*/


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/users' element={<Users/>} />
      </Routes>
    </Router>
  );
}


export default App;
