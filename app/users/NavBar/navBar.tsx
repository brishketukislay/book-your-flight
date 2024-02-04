"use client"
import React, { useState } from 'react';
import style from './nav-bar.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const pathname = usePathname();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const handleToggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      <div className={style.closeButton} onClick={handleToggleSideNav}>
        <IconButton className={style.hamburgerButton} onClick={handleToggleSideNav}>
        <MenuIcon />
      </IconButton>
        </div>
      <div className={`${style.sideNav} ${isSideNavOpen ? style.open : style.navClose}`}>
        <div
          className={
            pathname === '/users' ? `${style.navElement} ${style.active}` : style.navElement
          }
        >
          <Link href='/users'>
            <p className={style.tabStyle}>Dashboard</p>
            <SvgIcon className={style.icons} component={HomeIcon} />
          </Link>
        </div>
        <div
          className={
            pathname === '/users/travel-planner'
              ? `${style.navElement} ${style.active}`
              : style.navElement
          }
        >
          <Link href='/users/travel-planner'>
            <p className={style.tabStyle}>Travel Planner</p>
            <SvgIcon className={style.icons} component={FlightIcon} />
          </Link>
        </div>
        {/* <div className={pathname == '/users/feedback'?`${style.navElement} ${style.active}`:style.navElement }>
            <Link href='/users/feedback'>Feedback</Link>
        </div>
        <div className={pathname == '/users/support'?`${style.navElement} ${style.active}`:style.navElement }>
            <Link href='/users/support'>Support</Link>
        </div>
        <div className={pathname == '/users/sharing-collabs'?`${style.navElement} ${style.active}`:style.navElement }>
            <Link href='/users/sharing-collabs'>Sharing & Collabs</Link>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
