import * as React from 'react';
import bathroom from '../../assets/bathroom.png'
import cleaning from '../../assets/cleaning.png'
import plumbing from '../../assets/plumbing.png'
import tiling from '../../assets/Tiling.png'
import woodwork from '../../assets/Woodwork.png'
import general from '../../assets/general-repairs.png'
import painting from '../../assets/painting.png'
import electric from '../../assets/electric.png'
import Popup from 'reactjs-popup'
import Checkbox from '@mui/material/Checkbox'
import { MuiCheckbox } from './checkbox'
import CheckboxExample from './checkbox'
import Skills from './Skills'





const MySkills = () => {
    return (
        
    <div className='sm:flex pt-5 pr-20 justify-center'> 
        <div className='font-bold text-3xl pr-20'>My Skills</div>
        <img className='w-1/12' src={bathroom} alt="bathroom" />
        <img className='w-1/12' src={cleaning} alt="cleaning" />
        <img className='w-1/12' src={plumbing} alt="plumbing" />
        <img className='w-1/12' src={tiling} alt="tiling" />
        <Popup trigger= { <button className='text-white py-1 bg-[#606060] rounded-xl w-auto h-36 item-center hover:bg-[#fccc35] hover:scale-110'>Add / Remove</button>
            }
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '5px', border: '2' }}
            arrow={false}
            position="right"

            
            > 
            <section className="w-96 max-w-sm rounded bg-[#ceeaf2] m-auto shadow h-36">
                
                <div className=""> <Skills/> </div>
                
                
                
                {/* <img className='object-cover border-2 ' src={bathroom} alt="bathroom" />
                <img className='object-cover border-2 ' src={cleaning} alt="cleaning" />
                <img className='object-cover border-2 ' src={plumbing} alt="plumbing" />
                <img className='object-cover border-2 ' src={tiling} alt="tiling" />
                <img className='object-cover border-2 ' src={electric} alt="electric" />
                <img className='object-cover border-2 ' src={general} alt="general" />
                <img className='object-cover border-2 ' src={woodwork} alt="woodwork" /> 
                <img className='object-cover border-2 ' src={painting} alt="painting" /> */}
                
           
          
           </section>

        </Popup>
    </div>


    )        
}

export default MySkills

//checkbox function inside popup
function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    }
  
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    )
  };



