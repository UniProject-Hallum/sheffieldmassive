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


const skills = () => {
    return (
        
    <div className='sm:flex pt-5 pr-20 justify-center mb-10'> 
        <h2 className='font-bold pr-20'>My Skills</h2>
        <img className='w-1/12' src={bathroom} alt="bathroom" />
        <img className='w-1/12' src={cleaning} alt="cleaning" />
        <img className='w-1/12' src={plumbing} alt="plumbing" />
        <img className='w-1/12' src={tiling} alt="tiling" />
        <Popup trigger= { <button className='text-white py-1 bg-[#606060] px-5 border rounded-xl hover:bg-[#fccc35] hover:scale-110'>Add / Remove</button>
            }
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '0px', border: '' }}
            arrow={false}
            position="left"
            > 
            <section className="w-full max-w-sm rounded bg-white m-auto shadow h-36 flex flex-row">
                <div className="">
                <img className='object-cover border ' src={bathroom} alt="bathroom" /><ControlledCheckbox/>
                </div>

                <img className='object-cover border ' src={cleaning} alt="cleaning" />
                <img className='object-cover border ' src={plumbing} alt="plumbing" />
                <img className='object-cover border ' src={tiling} alt="tiling" />
                <img className='object-cover border ' src={electric} alt="electric" />
                <img className='object-cover border ' src={general} alt="general" />
                <img className='object-cover border ' src={woodwork} alt="woodwork" /> 
                <img className='object-cover border ' src={painting} alt="painting" />
                
           
          
           </section>

        </Popup>
    </div>


    )        
}

export default skills

//checkbox function
function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(true);
  
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
  

