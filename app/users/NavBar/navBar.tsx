"use client"
import React from 'react'
import style from './nav-bar.module.css'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import FlightIcon from '@mui/icons-material/Flight';

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div className={style.sideNav}>
            {/* Dashboard Link */}
            <div className={pathname === '/users' ? `${style.navElement} ${style.active}` : style.navElement}>
                <Link href='/users'>
                    <p className={style.tabStyle}>Dashboard</p><SvgIcon className={style.icons} component={HomeIcon} />
                </Link>
            </div>

            {/* Travel Planner Link */}
            <div className={pathname === '/users/travel-planner' ? `${style.navElement} ${style.active}` : style.navElement}>
                <Link href='/users/travel-planner'><p className={style.tabStyle}>Travel Planner</p>
                <SvgIcon className={style.icons} component={FlightIcon} /></Link>
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
    )
}

export default NavBar
