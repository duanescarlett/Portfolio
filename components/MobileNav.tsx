import React, { useState, useEffect, useCallback, useContext } from 'react'
import Link from 'next/link'
import Switch from '@mui/material/Switch'
// import MobileNavDrawer from './MobileNavDrawer'

const MobileNav = () => {

  const [openDrawer, setOpenDrawer] = useState(false)
  const [drawerInput, setDrawerInput] = useState('')
  const [checkedLight, setCheckedLight] = useState(false)

  // const drawActivator = (option: React.SetStateAction<string>) => {
  //   console.log("This :>", option)
  //   setDrawerInput(option)
  //   setOpenDrawer(true)
  // }

  // const drawSwitch = (e: boolean | ((prevState: boolean) => boolean)) => {
  //   setOpenDrawer(e)
  // }

  // useEffect(() => {

  // }, [drawerInput, openDrawer, loadStorage, getAddress])

  // useEffect(() => {

  // }, [address, walletConnector])

  return (
    <>
      <ul className='sm:hidden w-full'>
        <li  
          className='mx-5 border-b-2 border-b-teal-300'>
          <Link href='/'>
            <button className='text-white p-2 bg-darkbase0 hover:bg-darkbase1'></button>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default MobileNav