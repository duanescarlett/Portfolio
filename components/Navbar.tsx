import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import WebNav from './WebNav'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const navDrawerToggle = () => {
    if (navDrawerOpen) {
      setNavDrawerOpen(false)
    } else {
      setNavDrawerOpen(true)
    }
  }

  return (
    <>
      <nav className='flex w-full justify-between px-6 md:px-16'>
        <div className='flex justify-between w-full sm:w-auto'>
          <div className='navbar-logo mt-4'>
            <h1>
              <Link href='/'>
                Duane Scarlett
              </Link>
            </h1>
          </div>

          <div className={`sm:hidden`}>
            <button
              onClick={navDrawerToggle}
              type='button'
              className='block p-2 border-0'>
                <div>
                  { navDrawerOpen ? <CloseTwoToneIcon /> : <MenuTwoToneIcon /> }
                </div>
            </button>
          </div>
        </div>
        <WebNav />
      </nav>
      <nav>
        { navDrawerOpen ? <MobileNav /> : <div></div> }
      </nav>
    </>
  )
}

export default Navbar