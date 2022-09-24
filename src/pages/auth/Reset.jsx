import React from 'react'
import styles from './Auth.module.scss'
import forgot from '../../assets/forgot.png'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'

function Reset(props) {
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={forgot} alt="" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <form action="">
            <input type="email" placeholder="Enter your email" required />

            <button className="--btn --btn-primary  --btn-block">Login</button>
            <div className={styles.links}>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}

export default Reset
