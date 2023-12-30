"use client"
import Link from 'next/link'
import { useState } from 'react';
import styles from './users/home-page.module.css';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e:Event) => {
    router.push('/users');
    e.preventDefault();

    // Validate email and password
    if (validateEmail(email) && password) {
      // In a real-world scenario, you would perform authentication here
      alert('Login successful!');
      router.push('/users');
    } else {
      alert('Please enter a valid email and password.');
    }
  };

  const validateEmail = (email:string) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main className="flex flex-col items-center p-24">
      Welcome to Plan My Trip
      {/* <div>
        Already registeres? 
        <Link href="/users">Login Here</Link>
      </div> */}
      <div className={`mt-20 ${styles.loginContainer}`}>
        {/* onSubmit= {()=>{router.push('/users');}} */}
      <form className={styles.form}>
        <h2>Login</h2>
        <label className={styles.formLabel}>Email:</label>
        <input className={styles.formInput}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className={styles.formLabel}>Password:</label>
        <input className={styles.formInput}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </form>
      <button onClick= {()=>{router.push('/users');}} className={styles.formButton} type="submit">Login</button>

    </div>

    </main>
  )
}
