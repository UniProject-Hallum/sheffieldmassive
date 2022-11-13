//import ReactDOM from "react-dom";
import Login from "./components/loginandregister/login2";
import Register from "./components/loginandregister/register";
import Home from './components/landingpage/landing';
import Header from "./components/header/header";
import Search from "./components/searchresults/results";
import Profile from "./components/profile/profile"
import Contact from "./components/contact/contact";
import Handy from "./components/handylanding/handylanding"

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

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
          <Route path='/handyman' element={<Handy/>} />
      </Routes>
    </Router>
  );
}

export default App;
