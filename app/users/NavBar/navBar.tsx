"use client"
import React from 'react'
import style from './nav-bar.module.css'
import { usePathname } from "next/navigation";
import Link from 'next/link';

const NavBar = () => {
    const pathname = usePathname();
  return (
    <div className={style.sideNav}>
        <div className={pathname == '/users'?`${style.navElement} ${style.active}`:style.navElement }>
           <Link href='/users'>Dashboard</Link>
        </div>
        <div className={pathname == '/users/travel-planner'?`${style.navElement} ${style.active}`:style.navElement }>
            <Link href='/users/travel-planner'>Travel Planner</Link>
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