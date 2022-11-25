// import Popup from 'reactjs-popup'
// import Checkbox from '@mui/material/Checkbox'
// import { MuiCheckbox } from './checkbox';
// import CheckboxExample from './checkbox';
import { getSkills, getCities } from "../../staticData/Data";
import { useState } from "react";
import Select from "react-select";

function Selectskills() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const optionList = getSkills();

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div className="mx-10 py-10">
      <div className="font-bold ml-24">Job Requests</div>

      <div className="bg-[#fff] rounded-2xl shadow-xl p-16 z-10 mt-4 mx-20">
        requested but unaccepted jobs here
        {/*         
            <div className='w-9/12'>
                  <Select className='mt-2' 
                                    options={optionList}
                                    placeholder="Select skills"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                    isMulti
                            /> 
              </div> */}
      </div>
    </div>
  );
}

export default Selectskills;

// const skills = () => {

//     return (

//     <div className='sm:flex pt-5 pr-20 justify-center'>
//         {/* <h2 className='font-bold pr-20'>My Skills</h2>
//         <img className='w-1/12' src={bathroom} alt="bathroom" />
//         <img className='w-1/12' src={cleaning} alt="cleaning" />
//         <img className='w-1/12' src={plumbing} alt="plumbing" />
//         <img className='w-1/12' src={tiling} alt="tiling" /> */}

//             <section className="w-full max-w-sm rounded bg-white m-auto shadow h-36 flex flex-row">

//                   <Select className='mt-2'
//                                           options={optionList}
//                                           placeholder="Select skills"
//                                           value={selectedOptions}
//                                           onChange={handleSelect}
//                                           isMulti
//                                   />

//                 {/* <img className='object-cover border-2 ' src={cleaning} alt="cleaning" />
//                 <img className='object-cover border-2 ' src={plumbing} alt="plumbing" />
//                 <img className='object-cover border-2 ' src={tiling} alt="tiling" />
//                 <img className='object-cover border-2 ' src={electric} alt="electric" />
//                 <img className='object-cover border-2 ' src={general} alt="general" />
//                 <img className='object-cover border-2 ' src={woodwork} alt="woodwork" />
//

//       setChecked(event.target.checked);
//     }

//     return (

//     )
//   };
