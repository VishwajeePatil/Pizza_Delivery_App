import React, { useState } from 'react'
import style from "./Navbar.module.css"

import { gsap } from "gsap";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars  } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [active_menu,set_active_menu] = useState(false)
  const toggel_menu_btn = ()=>{
    gsap.to(`.${style.links}`,{
      duration: 0.2,
      height: active_menu ? '0' : '230',
      ease: 'power2.inOut'
    })
    set_active_menu(!active_menu);
  }
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
            <div className={style.menubtn}>
            <FontAwesomeIcon icon={faBars} onClick={toggel_menu_btn} rotation={active_menu ? 90 : 0} />
            </div>
        </div>
    </div>
  )
}

export default Navbar
