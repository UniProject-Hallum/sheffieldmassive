import axios from 'axios';
import {React,useState} from 'react'
import { Link } from "react-router-dom";
import City from '../../staticData/gb.json'


const Search = (props) => {
    const [SkillValue, setSkillValue] = useState('');
    const [CityValue, setCityValue] = useState('');
    const [results, setresults] = useState([]);

    function handleSkillValue(event) { 
        setSkillValue(event.target.value);
      }
    function handleCityValue(data) { 
        setCityValue(data.target.value);
      }
      

    const searchHandle = async ()=>{
        let results = await fetch('http://localhost:3001/search/'+SkillValue+'&'+CityValue);
        const values = SkillValue+'&'+CityValue
        results = await results.json()
        setresults(results)
        props.onClick(results)
        
    }
    
    const searchHandler = (e) => {
        e.preventDefault()
        //history.push('http://localhost:3001/search/'+SkillValue+'&'+CityValue)
        
    }
    

  return (
    <div>
        <div className='sm:bg-[#ceeaf2] sm:block hidden bg-[#fff] p-20 sm:mt-7 relative'></div>
        <div className='bg-gray-50  flex items-center justify-center'>
            <div className='sm:bg-[#fff] bg-[#ceeaf2] rounded-2xl shadow-xl p-20 relative z-10 
            sm:-mt-20 mt-4 flex item-center justify-center w-4/5'>
                <form action=""  className='w-full'>
                    <div className='sm:flex item-center justify-center mb-4'>
                        <select name="" id="" onChange={handleSkillValue} className='p-2 rounded-xl text-center w-full sm:mb-0 mb-3 bg-[#cccccc] border hover:border-[#606060]'>
                            <option value=""  >What service would you like?</option>
                            <option value="Electrical services" >Electrical services</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Kitchen renovation">Kitchen renovation</option>
                            <option value="Window cleaner">Window cleaner</option>
                            <option value="General fixes">General fixes</option>
                            <option value="Painting">Painting</option>
                        </select>
                        <select name="" id="" onChange={handleCityValue} className='p-2 rounded-xl text-center w-full bg-[#cccccc] sm:ml-4 sm:mb-0 mb-3 border hover:border-[#606060]'>
                            <option selected={true} disabled="disabled">Location</option>
                            {
                                City.map((result)=>(<option value={result.city}>{result.city}</option>))
                            }
                        </select>
                        <select name="" id="" onChange={searchHandle} className='p-2 rounded-xl text-center w-full bg-[#cccccc] sm:ml-4 border hover:border-[#606060]'>
                            <option selected={true} disabled="disabled">Max price</option>
                            <option value="">£30-50 p/h</option>
                            <option value="">£50-75 p/h</option>
                            <option value="">£75-100 p/h</option>
                            <option value="">£100-150 p/h</option>
                            <option value="">£150-200 p/h</option>
                            <option value="">£200+</option>

                        </select>
                    </div>
                    <Link to={'/search'}>
                        <button onClick={searchHandle} type="submit" className='bg-[#fccc35] rounded-xl w-full py-2 hover:bg-[#ceeaf2] hover:scale-103'>Search</button>
                    </Link>
                    
                </form>
            </div>
        </div>
        <div className='h-4 relative mb-0'>
       
            
        </div>  
    </div>
  )
}

export default Search