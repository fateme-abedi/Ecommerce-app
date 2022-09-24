import React, { useState } from 'react'
import styles from './Auth.module.scss'
import registerImg from '../../assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Card from '../../components/card/Card'
import { auth } from '../../firebase/Config'
import Loader from '../../components/loader/Loader'

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const fromSubmitHandler = (e) => {
    e.preventDefault()
    if (password !== cPassword) {
      toast.error('password and confirmPassword dont match')
    }

    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)
        setIsLoading(false)
        toast.success(" That's great, welcome to our site  :) ")
        navigate('/login')
      })
      .catch((error) => {
        toast.error(error.message)
        setIsLoading(false)
        // ..
      })
  }
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={registerImg} alt="" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form action="" onSubmit={fromSubmitHandler}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
                required
              />
              <button className="--btn --btn-primary  --btn-block">
                Register
              </button>
            </form>

            <span className={styles.register}>
              <p>Do you have an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Register
