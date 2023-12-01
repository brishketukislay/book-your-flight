"use client"
import React, { useCallback, useEffect, useState } from 'react';
import style from './home-page.module.css'
import NavBar from './NavBar/navBar'
import Header from './Header/header';
import Footer from './Footer/footer';
import { Calendar } from '@natscale/react-calendar';
import Dashboard from './Dashboard/dashboard';

const HomePage = () => {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (value:any) => {
      setValue(value);
    },
    [setValue],
  );
  // const [cityData, setCityData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://restcountries.com/v2/all");

  //       if (!res.ok) {
  //         throw new Error("Data not available");
  //       }

  //       const data = await res.json();
  //       setCityData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:");
  //       // Handle the error accordingly
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <Header />
      <NavBar />
      {/* {cityData ? (
        <pre>{JSON.stringify(cityData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )} */}
       {/* <Calendar value={value} onChange={onChange} /> */}
       <Dashboard/>
      <Footer />
    </div>
  );
};

export default HomePage;
