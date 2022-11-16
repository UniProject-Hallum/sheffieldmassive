import {React, useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import useToken from '../../auth/useToken';
import handyman from '../../assets/2.png'
import axios from 'axios'
import Select from "react-select";
import AsyncSelect from "react-select/async"
import { getSkills,getCities } from '../../staticData/Data';
import search from '../search/search';


const Register = () => {
    const [emailValue, setEmailValue] = useState();
    const [usernameValue, setUsernameValue] = useState();
    const [passwordValue, setPasswordValue] = useState();
    const [roleValue, setRoleValue]  = useState();
    const [descriptionValue, setDescriptionValue] = useState();
    const [token,setToken] = useToken();
    const baseurl= 'http://localhost:3001';
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState();
    const [selectedCity, setSelectedCity] = useState();
    const [genderValue,setGenderValue] = useState('');

    let ListOfCities = []
    const numberOfCities = 30;
    const optionList = getSkills();
    const citiesList = getCities();

    for (let i = 0; i < numberOfCities; i++) {
        ListOfCities.push({ value: citiesList[i]['city'], label: citiesList[i]['city']} )
      }


      function handleSelect(data) { 
        setSelectedOptions(data);
      }

      function handleSelectCity(data) { 
        setSelectedCity(data);
      }

    const OnClickSignup = async () => {
    try {
        let itoken;
        let values= [];
        selectedOptions.forEach(obj => { values.push(obj['value']) })
       let userinfo = {
            description: descriptionValue,
            gender: genderValue,
            skills: values,
            city: selectedCity
        };

        console.log("this is user info :  "+ JSON.stringify(userinfo));
        const response = await axios.post(baseurl+'/api/register',
            { email:emailValue,
                username:usernameValue,
                password:passwordValue, 
                role: roleValue,
                userInfo: userinfo
            });
        itoken = response.data;
        console.log(itoken)
        setToken(itoken);

        if(roleValue=="handyman"){
            navigate("/handyman"); 
        }else{
            navigate("/profile");    
        }
              
    }
    catch(e) 
    {
        console.error('There was an error!', e.response.data.message);
        setErrorMessage(e.response.data.message)     
    }

}

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>      
        <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>
            <div className='md:block hidden w-1/2'>
                <a href="/"><img className='rounded-2xl' src={handyman} alt="" /></a>
            </div>
            <div className='md:w-1/2 px-16'>
                <h2 className='font-bold text-2xl text-[#606060]'>Register</h2>
                <p className='text-sm mt-4 text-[#606060]'>You aren't a memeber, easily register</p>
                {errorMessage&& <div className='fail p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800' >{errorMessage}</div>}
                <div  className='flex flex-col gap-4'>
                    <input required className='p-2 mt-8 rounded-xl border' type="test" name='name' placeholder='Full Name' onChange={e => setUsernameValue(e.target.value)}/>
                    <input required className='p-2 rounded-xl border' type="email" name='email' placeholder='Email' onChange={e => setEmailValue(e.target.value)}/>
                                        <div className='relative'>
                        <input required className='p-2 rounded-xl border w-full' type="password" name='password' placeholder='Password'onChange={e => setPasswordValue(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey"  className=' bi bi-eye absolute top-1/2 right-3 -translate-y-1/2' viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>                        
                    </div>
                    <div className='flex'>
                        <div className="flex items-center mr-4">
                            <input required onChange={e => setRoleValue('customer')}  id="inline-radio1" type="radio" value="" name="inline-radio-group" className="w-4 h-4 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="inline-radio1" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">Customer</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input required onChange={e => setRoleValue('handyman')}   id="inline-radio2" type="radio" value="" name="inline-radio-group" className="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="inline-radio2" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">HandyMan</label>
                        </div>                       
                    </div>
                    {
                          roleValue ==='handyman' &&(
                            <div>        
                            <div>
                                <p>Please tell us about yourself</p>
                                <div className='flex mt-5 mb-3'>
                                    <div className="flex items-center mr-4">
                                        <input required onChange={e => setGenderValue('M')}  id="inline-radio3" type="radio" value="" name="inline-radio-group2" className="w-4 h-4 bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="inline-radio3" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">M</label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input required onChange={e => setGenderValue('F')}   id="inline-radio4" type="radio" value="" name="inline-radio-group2" className="w-4 h-4  bg-gray-100 border-gray-300  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="inline-radio4" className="ml-2 text-sm font-medium text-[#606060] dark:text-gray-300">F</label>
                                    </div>
                       
                                </div>
                                <textarea required  className='p-2 w-full h-32 rounded-xl border' placeholder=''
                                 onChange={e => setDescriptionValue(e.target.value)}  name='description'/>                                
                            </div>
                            <p>Please Select all you Skills</p>

                            <Select className='mt-2' 
                                    options={optionList}
                                    placeholder="Select skills"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isMulti
                            /> 

                            <p>Please Select Your Location</p>

                            <Select 
                                    options={ListOfCities}
                                    placeholder="Select City"
                                    value={selectedCity}
                                    onChange={handleSelectCity}
                                    isSearchable={true}                                 
                            />                          

                            </div>
                        )  
                    }



                    {(!emailValue || !passwordValue || !usernameValue || !roleValue) 
                        ? <button disabled className='bg-[#606060] rounded-xl text-white py-2 ' >Register</button>
                        : <button onClick={OnClickSignup} className='bg-[#fccc35] rounded-xl text-white py-2 hover:bg-[#ca9f16] hover:scale-110' >Register</button>
                    
                    }
                     
                </div>
                <div className='mt-10 grid grid-cols-3 items-center text-gray-500'>
                    <hr className='border-gray-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-500' />
                </div>
                <div className='mt-7 mb-4 text-xs flex justify-between items-center'>
                    <p>If you have an account.. </p>
                   <Link to={'/login'}>
                        <button className='text-white py-2 bg-[#606060] px-5 border rounded-xl  hover:bg-[#fccc35] hover:scale-110'>Login</button>
                    </Link> 
                </div>
                
            </div>
            
            

        </div>

    </section>
  )
}

export default Register


