import React, { useState } from 'react'
import styles from './Auth.module.scss'
import loginImg from '../../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../components/card/Card'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/Config'
import Loader from '../../components/loader/Loader'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const loginHandler = (e) => {
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        toast.success('login successful  :)')
        navigate('/')
        setIsLoading(false)
        // ...
      })
      .catch((error) => {
        toast.error(error.message)
        setIsLoading(false)
      })
  }
  return (
    <>
      <ToastContainer />
      {isLoading && <Loader />}
      <div className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form action="" onSubmit={loginHandler}>
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
              <button className="--btn --btn-primary  --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset password</Link>
              </div>
              <p>--or--</p>
            </form>
            <button className="--btn --btn-danger  --btn-block">
              <FaGoogle />
              Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Login
