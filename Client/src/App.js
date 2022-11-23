import Login from "./components/loginandregister/Login";
import Register from "./components/loginandregister/Register";
import Home from './components/landingpage/landing';
import Header from "./components/header/Header";
import Search from "./components/searchresults/results";
import Profile from "./components/profile/profile"
import Contact from "./components/contact/contact";
import PrivateRoutes from "./auth/PrivateRoutes";
import Handy from "./components/handylanding/Handylanding"


import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/search/:SkillValue&:CityValue' element={<Search/>} />
          
          <Route element= {<PrivateRoutes/>}>
            
            <Route exact path='/profile/:userId' element={<Profile/>} />
            <Route path='/handyman' element={<Handy/>} />
            <Route path='/contact' element={<Contact/>} />
          </Route>
          
      </Routes>
    </Router>
  );
}

export default App;
