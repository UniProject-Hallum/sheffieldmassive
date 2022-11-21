import {React, useState} from 'react'
import Select from "react-select"
import { getSkills } from '../../staticData/Data';




function Skills() {

    const optionList = getSkills();
    const [selectedOptions, setSelectedOptions] = useState();
    
    // if (selectedOptions !== null){
    //     console.log("nothing") 
    //     return selectedOptions
    // }

    function handleSelect(data) { 
        setSelectedOptions(data);
        console.log(selectedOptions);
       
     


      }




    return (
    <div>
             <p className ='font-bold ml-20'>Please Select all you Skills</p>

                <Select className='mt-2 w-96' 
                        options={optionList}
                        placeholder="Select skills"
                        value={selectedOptions}
                        onChange={handleSelect}
                        isMulti
                        
                                  
/> 
    </div>

    )
}

export default Skills