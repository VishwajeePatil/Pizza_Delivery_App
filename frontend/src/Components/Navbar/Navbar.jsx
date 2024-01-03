import React from 'react'
import style from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPizzaSlice, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={style.main}>
        <div className="container flex">
            <div className={style.logo}>
                <p>SliceHarbor</p>
            </div>
            <div className={style.links}>
                <Link className={style.link} to="/"> Home</Link>
                <Link className={style.link} to="/OrderTracking">Track Order</Link>
                <Link className={style.link} to="/cart">Cart</Link>
                <Link className={style.link} to="/auth/signup">Signup | Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
