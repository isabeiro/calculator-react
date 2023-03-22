import React from 'react'
import './Header.css'

function Header({ titulo }) {
  return (
    <header className='header'>
      <h1>{titulo}</h1>
    </header>
  )
}
export default Header