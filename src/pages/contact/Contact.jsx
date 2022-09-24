import React, { useState } from 'react'
import styles from '../auth/Auth.module.scss'
import loginImg from '../../assets/login.png'

import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact(props) {
  const loginHandler = (e) => {}
  return (
    <>
      <ToastContainer />

      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Contact Us</h2>
            <form action="" onSubmit={loginHandler}>
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
              <textarea
                style={{ width: '100%' }}
                placeholder="tell us what you want ... :)"
              />
              <button className="--btn --btn-primary  --btn-block">Send</button>
            </form>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Contact
