import React, { useEffect, useState } from 'react';
import style from './header.module.css';
import { useRouter } from 'next/router'; // Correct import statement

const Header = () => {
  const router = useRouter();
  function handleSignOut() {
    sessionStorage.removeItem('isLoggedIn');
    router.push('/');
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize with boolean value

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedIsLoggedIn = sessionStorage.getItem('isLoggedIn');
      setIsLoggedIn(storedIsLoggedIn === 'true'); // Convert to boolean
    } else {
      setIsLoggedIn(false);
    }

    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    // Redirect logic can also be handled by returning a different component or using Next.js's 'next/router' 'replace' method
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
