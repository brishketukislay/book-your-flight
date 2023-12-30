"use client"
import React, { useEffect, useState } from 'react';
import style from './header.module.css';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  function handleSignOut() {
    sessionStorage.removeItem('isLoggedIn');
    router.push('/');
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
      setIsLoggedIn(storedIsLoggedIn === 'true');
    } else {
      setIsLoggedIn(false);
    }

    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <header className={style.header}>
      My Travel Planner
      <button className={style.signout} onClick={handleSignOut}>
        Sign Out
      </button>
    </header>
  );
};

export default Header;
