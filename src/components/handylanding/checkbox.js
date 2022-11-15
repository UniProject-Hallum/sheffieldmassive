import {Box, FormControlLabel, Checkbox } from '@mui/material'
import {useState} from 'react'
import bathroom from '../../assets/bathroom.png'


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