import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash} from '@fortawesome/free-solid-svg-icons';

import styles from "./Varient.module.css"
const Varient = ({elem}) => {
  return (
    <div className={styles.main}>
        <div className={styles.title}>
            <p>{elem.name}</p>
            <p>{`${elem.price} Rs`}</p>
        </div>
        <div>
            <p> Base : <span>{elem.base}</span></p>
            <p> Size : <span>{elem.size}</span> inch</p>
        </div>
        <div>
            <p>Sauce : <span>{elem.sauce}</span></p>
            <p>Veggies : <span>{elem.veggies}</span></p>
        </div>
        <div>
            <div>
            <p>Cheese : <span>{elem.cheese}</span></p>
            <p>Topping : <span>{elem.topping}</span></p>
            </div>
            <div>
                <FontAwesomeIcon className={styles.trashIcon} icon={faTrash}/>
            </div>
        </div>
    </div>
  )
}

export default Varient
