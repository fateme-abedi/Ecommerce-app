import React, { useState } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'

import { auth } from '../../firebase/Config'

function Header(props) {
  const [showMenu, setShowMenu] = useState(false)
  const state = useSelector((state) => state.CartHandler)

  const menuHandler = () => {
    setShowMenu(!showMenu)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const activeLinks = ({ isActive }) => (isActive ? `${styles.active}` : '')

  const navigate = useNavigate()
  const logOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success('Logout Successfully  :(')
        navigate('/register')
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message)
      })
  }

  return (
    <>
      <ToastContainer />
      <header>
        <div className={styles.logo}>
          <h2>
            Iva<span>Shop.</span>
          </h2>
        </div>

        <nav
          className={
            showMenu ? `${styles['show-nav']}` : `${styles['hide-nav']}`
          }
        >
          <div
            className={
              showMenu
                ? `${styles['nav-wrapper']} ${styles['show-nav-wrapper']}`
                : `${styles['nav-wrapper']}`
            }
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles['logo-mobile']}>
              <div className={styles.logo}>
                <h2>
                  Iva<span>Shop.</span>
                </h2>
              </div>
              <FaTimes size={20} onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLinks}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={activeLinks}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLinks}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLinks}>
                Register
              </NavLink>

              <NavLink to="/register" onClick={logOutHandler}>
                LogOut
              </NavLink>
            </span>
            <span className={styles.cart}>
              <Link to="/cart">
                Cart
                <FaShoppingCart size={20} />
                <p>{state.length}</p>
              </Link>
            </span>
          </div>
        </nav>

        <div className={styles['menu-icon']}>
          <span className={styles.cart}>
            <Link to="/cart">
              Cart
              <FaShoppingCart size={20} />
              <p>{state.length}</p>
            </Link>
          </span>
          <HiMenuAlt3 size={25} onClick={menuHandler} />
        </div>
      </header>
    </>
  )
}

export default Header
