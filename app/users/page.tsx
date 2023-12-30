"use client"
import React from 'react';
import NavBar from './NavBar/navBar'
import Header from './Header/header';
import Footer from './Footer/footer';
import Dashboard from './Dashboard/dashboard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <NavBar />
       <Dashboard/>
      <Footer />
    </div>
  );
};

export default HomePage;