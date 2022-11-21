import React from 'react'
import { Navigate } from 'react-router-dom'
import {useLocalState} from 

const PrivateRoute = ({ children }) => {
    const [jwt, setjwt] =
  return jwt ? children : <Navigate to="/login"/>;
}

export default index