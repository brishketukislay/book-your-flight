import React from 'react'
import style from './footer.module.css'
const footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p className={style.contact}>
          Contact Us @ brishketu.kislay@gmail.com
        </p>
        <p>
          Copyright @ 2024
        </p>
      </div>
    </footer>
  )
}

export default footer