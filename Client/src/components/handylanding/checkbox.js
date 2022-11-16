import {Box, FormControlLabel, Checkbox } from '@mui/material'
import {useState} from 'react'
import React from 'react'
import bathroom from '../../assets/bathroom.png'
//import "../node_modules/gestalt/dist/gestalt.css"
//import { Box, Checkbox, Fieldset, Flex, Image } from "gestalt";



// Alternate checkbox for skills popup MUI
export const MuiCheckbox = () => {
    const [ticked, setTicked] = useState(false)
    console.log({ ticked })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTicked(event.target.checked)
    }
    return (
        <Box>
            <Box>
                <FormControlLabel 
                label=' Add ' 
                control={<Checkbox checked={ticked} onChange={handleChange} />} 
                />
            </Box>
            
            <Box>
                <Checkbox 
                //icon ={bathroom}
                //checkedIcon={bathroom}
                checked={ticked}
                onChange={handleChange}
                />
            </Box>
        </Box>
        
    )
}


/*export default function CheckboxExample () {
function CheckboxExample() {
    const [checkedCoral, setCheckedCoral] = React.useState(false);
    const [checkedBlue, setCheckedBlue] = React.useState(false);

  return (
    <Fieldset legend="Which backgrounds would you like to use?" legendDisplay="hidden">
      <Flex direction="column" gap={{ column: 4, row: 0 }}>
        <Checkbox
          checked={checkedCoral}
          id="coral"
          label="Coral"
          helperText="Botanical art in coral and green"
          image={<Box height={100} width={80}><Image alt="picture" src={bathroom} fit="contain" naturalWidth={1} naturalHeight={1}/></Box>}
          name="favorite art"
          onChange={({ checked }) => {
            setCheckedCoral(checked);
          }}
        />
        <Checkbox
          checked={checkedBlue}
          id="blue"
          label="Blue"
          helperText="Typography and shoe in blue"
          image={<Box height={100} width={80}><Image alt="Picture" src={bathroom} fit="contain" naturalWidth={1} naturalHeight={1}/></Box>}
          name="favorite art"
          onChange={({ checked }) => {
            setCheckedBlue(checked);
          }}
        />
      </Flex>
    </Fieldset>
  );
}
}*/