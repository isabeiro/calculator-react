import { TextField } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';

import './Content.css'

function Content({ titulo, children }) {
  return (
    <div className="content">
      <TextField className="textField" id="outlined-basic" variant="outlined"/>
      <div className="operations">
        <Button variant="contained">1</Button>
        <Button variant="contained">2</Button>
        <Button variant="contained">3</Button>
        <Button variant="contained">4</Button>
        <Button variant="contained">5</Button>
        <Button variant="contained">6</Button>
        <Button variant="contained">7</Button>
        <Button variant="contained">8</Button>
        <Button variant="contained">9</Button>
        <Button variant="contained">*</Button>
        <Button variant="contained">0</Button>
        <Button variant="contained">+</Button>
        <Button variant="contained">-</Button>
        <Button variant="contained">/</Button>
        <Button variant="contained">=</Button>
      </div>
    </div>
  )
}
export default Content