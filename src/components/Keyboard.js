import React, { useState } from 'react'
import Button from '@mui/material/Button'
import './Keyboard.css'
import { Grid, TextField } from '@mui/material'

function Keyboard() {

  const [value, setValue] = useState([])
  const [valueField, setValueField] = useState(value)
  const [result, setResult] = useState([])
   
  const handleChange = (newValueField) => {
    setValue(valueField + newValueField)
  }

  const handleResolvChange = (newResultField) => {
    setResult(newResultField)
  }
  
  const handleButtonClick = (e) => {
    const newValueField = valueField + e.target.value
    setValueField(newValueField)
    handleChange(e.target.value)
  }

  const handleButtonAc = () => {
    setValue([])
    setValueField([])
    setResult([])
  }

  const handleButtonOperation = (resultField) => {
    const newResultField = eval(valueField)
    
    handleResolvChange(newResultField)
    setResult(newResultField)

    const newValueField = newResultField
    setValueField(newValueField)
  }

  return (

    <Grid container>
      <Grid className="valueField">
        <TextField className="textField" id="textField" variant="outlined" value={value} onChange={handleChange}></TextField>
        <TextField className="textFieldResult" id="textField" variant="outlined" value={result} onChange={handleResolvChange}></TextField>
      </Grid>
    
      <Grid item xs={12} className='keyboard'>
        <Button value={1} onClick={handleButtonClick} variant="contained">1</Button>
        <Button value={2} onClick={handleButtonClick} variant="contained">2</Button>
        <Button value={3} onClick={handleButtonClick} variant="contained">3</Button>
        <Button value={4} onClick={handleButtonClick} variant="contained">4</Button>
        <Button value={5} onClick={handleButtonClick} variant="contained">5</Button>
        <Button value={6} onClick={handleButtonClick} variant="contained">6</Button>
        <Button value={7} onClick={handleButtonClick} variant="contained">7</Button>
        <Button value={8} onClick={handleButtonClick} variant="contained">8</Button>
        <Button value={9} onClick={handleButtonClick} variant="contained">9</Button>
        <Button value={0} onClick={handleButtonClick} variant="contained">0</Button>
        <Button value='=' onClick={handleButtonOperation} variant="contained">=</Button>
        <Button value='+' onClick={handleButtonClick} variant="contained">+</Button>
        <Button value='-' onClick={handleButtonClick} variant="contained">-</Button>
        <Button value='*' onClick={handleButtonClick} variant="contained">*</Button>
        <Button value='/' onClick={handleButtonClick} variant="contained">/</Button>
        <Button name='AC' onClick={handleButtonAc} variant="contained">AC</Button>
      </Grid>    
    </Grid>
  )
}

export default Keyboard