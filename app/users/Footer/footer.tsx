import React from 'react'
import style from './footer.module.css'
const footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p className={style.contact}>
          Contact Us
        </p>
        <p>
          Copyright @ 2023
        </p>
      </div>
    </footer>
  )
}

export default footer