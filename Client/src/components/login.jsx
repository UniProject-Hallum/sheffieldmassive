// import React from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import handyman from '../../assets/2.png';
// import {useHistory} from 'react-router-dom';
// import axios from 'axios';
// import useToken from './useToken';

// const Login = () => {

    
    
//   return (
//     <div className='w-full h-screen flex'>
//         <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
//             <div className='w-full h-[550px] hidden md:block'>
//                 <img className='w-full h-full' src={handyman} alt="handyman" />
//             </div>
//             <div className='p-4 flex flex-col justify-around'>
//                 <div>
//                     <h2 className='text-4xl font-bold text-center mb-8'>HandyMan</h2>
//                     <div>
//                         <i className="fas fa-envelope"></i>
//                         <input className='p-2 mr-2' type="text" placeholder='Username' onChange={e => setEmailValue(e.target.value)} /><br/>
//                         <i className="fas fa-password"></i>
//                         <input className='p-2' type="password" placeholder='Password' onChange={e => setPasswordValue(e.target.value)} />
//                     </div>

//                     {(!emailValue || !passwordValue)  
//                         ?   <button disabled className='w-full py-2 my-4 bg-[#606060]'>Sign In</button>
//                           : <button onClick={OnClickLogin} className='w-full py-2 my-4 bg-yellow-500 hover:bg-[#ca9f16] '>Sign In</button>
                    
                    
//                     }
                    
//                     <p className='text-center text-blue-600 hover:text-yellow-500'>Forget Password</p>
//                 </div>
//                 <div className='text-center'>Don't Have an account? 
//                     <Link to={'register'}>
//                           <label className='text-blue-600 hover:text-yellow-500' for="flip">Signup now</label>
//                     </Link>      
//                 </div>
//                 <p className='text-center'></p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login;