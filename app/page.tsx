"use client"
import { useState } from 'react';
import styles from './users/home-page.module.css';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail(email) && password) {
      if (email === 'admin@byf.com' && password === 'zaq12wsx') {
        sessionStorage.setItem('isLoggedIn', 'true');
        router.push('/users');
      } else {
        alert('Invalid credentials.');
      }
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main className="flex flex-col items-center p-24">
      <p className={styles.welcome}>Welcome to Plan My Trip</p>
      <div className={`mt-15 ${styles.loginContainer}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.login}>Login</h2>
          <label className={styles.formLabel}>Email: admin@byf.com</label>
          <input
            className={styles.formInput}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.formLabel}>Password: zaq12wsx</label>
          <input
            className={styles.formInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.formButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
