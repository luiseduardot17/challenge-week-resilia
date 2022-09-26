import React from 'react'
import logo from '../../assets/images/logo.svg'
import S from './Header.module.css'

const Header = () => {
  return (
    <header>
        <div>
        <img src={logo} alt="logo da resilia educação" />
        </div>
      
    </header>
  )
}

export default Header
