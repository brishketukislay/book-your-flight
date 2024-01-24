"use client"
import { useState } from 'react';
import styles from './users/home-page.module.css';
import { useRouter } from 'next/navigation'

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEmail(email) && password) {
        const url = "https://register-user-vd7l.onrender.com/api/users/login";
        try{
          if(email=='jane@mytrip.com' && password =='zaq12wsx'){
          sessionStorage.setItem('isLoggedIn', 'true');
          router.push('/users');
          }
          else{
          const response = await fetch(url, {method:'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
          email:email,
        password:password
        })})
        if(response){
          console.log('response',response);
          const data = await response.json();
          if(data.accessToken){
          sessionStorage.setItem('isLoggedIn', 'true');
          router.push('/users');}
          else{
            alert(data.message);
          }
        }
      }
      }
        catch{
            alert('Please enter valid credentials.');
        }
      } else {
        alert('Invalid credentials.');
      }
    // }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <main className="flex flex-col items-center p-24">
    <p className={styles.newUser}>Please use user jane@mytrip.com if login api is down</p>
      <p className={styles.welcome}>Welcome to Plan My Trip</p>
      <div className={`mt-15 ${styles.loginContainer}`}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.login}>Login</h2>
          <label className={styles.formLabel}>Email: jane@doe.com</label>
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
