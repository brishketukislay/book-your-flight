"use client"
import React, { useEffect } from 'react'
import style from './header.module.css'
import { useRouter } from 'next/navigation'

const Header = () => {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const router = useRouter();
  function handleSignOut(){
    sessionStorage.removeItem("isLoggedIn");
    router.push('/')
  }
  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    // Redirect logic can also be handled by returning a different component or using Next.js's 'next/router' 'replace' method
    return null;
  }
  return (
    <header className={style.header}>My Travel Planner
    <button className={style.signout} onClick={handleSignOut}>
      Sign Out
    </button>
    </header>
  )
}

export default Header