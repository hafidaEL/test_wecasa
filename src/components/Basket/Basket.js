import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBasket } from '../../selectors/Basket'
import { getUserAdress } from '../../selectors/User'

import {BasketStyle} from './Basket.styles'

import {showPrice, showDuration } from '../../utils'
export default function Basket() {
    const basket = useSelector(getBasket)
    const adress = useSelector(getUserAdress)
    return (
        <>
            {basket && 
                <BasketStyle>
                    <p>Prix total : {showPrice(basket.totalPrice)}</p>
                    <p>Durée totale : {showDuration(basket.totalDuration)}</p>
                    <Link to={`/adress`}>Adress selection</Link>
                </BasketStyle>
            }
            {
               adress && 
               <Link to={`/appointement`}>Appointement selection</Link> 
            }
        </>
    )
}
