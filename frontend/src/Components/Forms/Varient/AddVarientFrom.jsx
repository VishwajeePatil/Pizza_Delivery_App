import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark} from '@fortawesome/free-solid-svg-icons';

import styles from "./AddVarientForm.module.css"

const AddVarientFrom = ({toggelAddVarient,postVarient}) => {
    const [formData,setFormData] = useState({
       name:"",
       size:null,
       img_url:"",
       base:"",
       sauce:"",
       topping:"",
       cheese:"",
       veggies:"",
       price:null
    })
    const handelSubmit = (event)=>{
        event.preventDefault();
        postVarient(formData);
    }
    const handelChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
  return (
    <div className={styles.main}>
        <div className={styles.cancelIcon}>
            <FontAwesomeIcon icon={faXmark} onClick={toggelAddVarient}/>
        </div>
    <form>
        <div>
        <label>Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Varient Name' value={formData.name} required onChange={handelChange}/>
        </div>

        <div>
        <label>Price:</label>
        <input type="text" id="price" placeholder='Eg. 800' name="price" value={formData.price} required onChange={handelChange}/>
        </div>

        <div>
        <label>Size:</label>
        <input type="text" id="size" name="size" placeholder='Eg. 8.2' value={formData.size} required onChange={handelChange}/>
        </div>

        <div>
        <label>Image URL:</label>
        <input type="text" id="img_url" name="img_url" placeholder='Enter Image URL' value={formData.img_url} required onChange={handelChange}/>
        </div>

        <div>
        <label>Base:</label>
        <select id="base" name="base" value={formData.base} onChange={handelChange}>
            <option value="Neapolitan">Neapolitan</option>
            <option value="New York Style">New York Style</option>
            <option value="Sicilian">Sicilian</option>
            <option value="Chicago Deep Dish">Chicago Deep Dish</option>
            <option value="Thin Crust">Thin Crust</option>
        </select>
        </div>

        <div>
        <label>Sauce:</label>
        <select id="sauce" name="sauce" value={formData.sauce} onChange={handelChange}>
            <option value="Marinara sauce">Marinara sauce</option>
            <option value="Pesto sauce">Pesto sauce</option>
            <option value="Alfredo sauce">Alfredo sauce</option>
            <option value="BBQ sauce">BBQ sauce</option>
            <option value="White sauce">White sauce</option>
        </select>
        </div>

        <div>
        <label>Topping:</label>
        <select id="topping" name="topping" value={formData.topping} onChange={handelChange}>
            <option value="Pepperoni">Pepperoni</option>
            <option value="Margherita">Margherita</option>
            <option value="Hawaiian">Hawaiian</option>
            <option value="Supreme">Supreme</option>
            <option value="Veggie">Veggie</option>
        </select>
        </div>

        <div>
        <label>Cheese:</label>
        <select id="cheese" name="cheese" value={formData.cheese} onChange={handelChange}>
            <option className={styles.opt} value="Mozzarella">Mozzarella</option>
            <option value="Parmesan">Parmesan</option>
            <option value="Cheddar">Cheddar</option>
            <option value="Provolone">Provolone</option>
            <option value="Gouda">Gouda</option>
        </select>
        </div>

        <div>
        <label>Veggies:</label>
        <select id="veggies" name="veggies" value={formData.veggies} onChange={handelChange}>
            <option value="Mushrooms">Mushrooms</option>
            <option value="Bell peppers">Bell peppers</option>
            <option value="Onions">Onions</option>
            <option value="Tomatoes">Tomatoes</option>
            <option value="Spinach">Spinach</option>
        </select>
        </div>
        <div>
        <button type="submit" onClick={handelSubmit}>Add Pizza Variant</button>
        </div>

    </form>

    </div>
  )
}

export default AddVarientFrom
