import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave, faCancel } from '@fortawesome/free-solid-svg-icons';

import styles from './Stock.module.css';
import axios from 'axios';
import tokenContext from '../../Contetx API\'s/token/TokenContext';
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen';


const Stock = ({ stock, handelRefresh }) => {
    const {getToken} = useContext(tokenContext)
    const {setLoadingScreen} = useContext(LoadingScreenContext);
    const [stockData, setStockData] = useState(stock);
    const [activeInput, setActiveInput] = useState(false);
    const handleChange = (e) => {
        const { id, name, value } = e.target;
        setStockData((prevStockData) => ({
            ...prevStockData,
            [id]: {
                ...prevStockData[id],
                [name]: value,
            },
        }));
    };
    const toggleActiveInput = () => {
        setActiveInput(!activeInput);
        handelRefresh(true);
        setStockData(stock)
    }
    const renderList = (category) => {
        return Object.entries(stock[category]).map(([itemName, itemValue]) => (
            <li key={itemName}>
                {itemName} : <input type='number' value={stockData[category][itemName]} name={itemName} onChange={handleChange} id={category} disabled={!activeInput} />
            </li>
        ));
    };
    const handelupdate = async () => {
        try {
            setLoadingScreen(true);
            const res = await axios.put(`http://localhost:8000/dashboard/stock`,stockData, {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                }
            })
            setActiveInput(!activeInput);
            setLoadingScreen(false);
            handelRefresh();
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <p>Available Stock</p>
                <div>
                    {activeInput ? <button onClick={toggleActiveInput}> Discard {<FontAwesomeIcon icon={faCancel} />} </button> : <button onClick={toggleActiveInput}> Update {<FontAwesomeIcon icon={faPen} />} </button>}
                    {activeInput ? <button onClick={handelupdate}> Save {<FontAwesomeIcon icon={faSave} />} </button> : null}
                </div>
            </div>
            <div>
                <div className={styles.StockCard}>
                    <p>Base</p>
                    <ul>{renderList('base')}</ul>
                </div>
                <div className={styles.StockCard}>
                    <p>Sauce</p>
                    <ul>{renderList('sauce')}</ul>
                </div>
                <div className={styles.StockCard}>
                    <p>Topping</p>
                    <ul>{renderList('topping')}</ul>
                </div>
                <div className={styles.StockCard}>
                    <p>Cheese</p>
                    <ul>{renderList('cheese')}</ul>
                </div>
                <div className={styles.StockCard}>
                    <p>Veggies</p>
                    <ul>{renderList('veggies')}</ul>
                </div>
            </div>
        </div>
    );
};

export default Stock;
