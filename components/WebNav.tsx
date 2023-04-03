import React, { useState, useEffect, useContext, useCallback } from 'react'
import Link from 'next/link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
// import Dropdown from './Dropdown'
// import { navItems } from './NavItems'
// import ResourcesDropDown from './ResourcesDropDown'
// import useDarkMode from '../hook/useDarkMode'
// import { MainContext } from '../context/MainContext'
// import { ConnectButton } from '@rainbow-me/rainbowkit'

const WebNav = () => {

  const [dropDown, setDropDown] = useState(false)
  const [resourcesDropDown, setResourcesDropDown] = useState(false)
  const [checkedLight, setCheckedLight] = useState(false)

  return (

      <ul className='hidden justify-end sm:inline-flex mt-4'>
        <li
          className='mx-2 hover:text-teal-300'>
          <Link href=''>
            About Me
          </Link>
        </li>
        <li
          className='mx-2 hover:text-teal-300'>
          <Link href=''>
            Experience
          </Link>
        </li>
        <li
          className='mx-2 hover:text-teal-300'>
          <Link href=''>
            Projects
          </Link>
        </li>
        <li
          className='mx-2 hover:text-teal-300'>
          <Link href=''>
            Contact
          </Link>
        </li>
        <li
          className='mx-2 -mt-1'>
          <button className='p-1'>Resume</button>
        </li>
      </ul>

  )
}

export default WebNav