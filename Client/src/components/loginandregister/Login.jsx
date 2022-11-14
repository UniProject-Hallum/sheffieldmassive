import {React, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import useToken from '../../auth/useToken';
import handyman from '../../assets/2.png'

const Login = () => {

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const baseurl= 'http://localhost:3001';  
    const [token,setToken] = useToken();
    const navigate = useNavigate();

    const OnClickLogin = async () => {
        try {
            let proceed;
            let itoken;
            let a;
            const response = await axios.post(baseurl+'/api/login', {
                email:emailValue,
                password: passwordValue })
        
            itoken= response.data;
            console.log(itoken)
            setToken(itoken);
            navigate('/profile')
            
        } catch (e) {
            setErrorMessage(e.response.data.message)
            console.error('There was an error!', e.response.data.message);
            
        }

    
      };

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
            <div className='md:w-1/2 px-16'>
                <h2 className='font-bold text-2xl text-[#606060]'>Login</h2>
                <p className='text-sm mt-4 text-[#606060]'> If you already a memeber, easily login</p>
                {errorMessage&& <div className='fail p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800' >{errorMessage}</div>}
                <div  className='flex flex-col gap-4'>
                    <input onChange={e => setEmailValue(e.target.value)} className='p-2 mt-8 rounded-xl border' type="email" name='email' placeholder='Email' />
                    <div className='relative'>
                        <input onChange={e => setPasswordValue(e.target.value)} className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey"  className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2' viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </div>
                    <a href='/' className='mt-0 text-xs  hover:text-[#fccc35]'>Forgot your password?</a>

                    {(!emailValue || !passwordValue)  
                        ?   <button disabled className='bg-[#606060] rounded-xl text-white py-2 '>Login</button>

                           : <button onClick={OnClickLogin} className=' py-2 rounded-xl bg-yellow-500 hover:bg-[#ca9f16]  hover:scale-110'>Login</button>
                    
                    
                    }
                    
                </div>
                <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
                    <hr className='border-gray-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-500' />
                </div>
                <div className='mt-7 mb-4 text-xs flex justify-between items-center'>
                    <p>Don't have an account.. </p>
                    <Link to={'/register'}>
                            <button className='text-white py-2 bg-[#606060] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Register</button>
                    </Link>             
                     </div>
                
            </div>
            <div className='md:block hidden w-1/2'>
                <a href="/"><img className='rounded-2xl' src={handyman} alt="" /></a>
            </div>
            

        </div>

    </section>
  )
}

export default Login