import React from 'react'
import './OrderBy.css'

const OrderBy = () => {
    return (
        <div className='order-by__container'>
            <label htmlFor="order">Order by:</label>
            <select id="order" name="order">
                <option value="lowPrice">Low price</option>
                <option value="highPrice">High price</option>
                <option value="mostRelevant">Most relevant</option>
            </select>
        </div>
    )
}

export default OrderBy