import React from 'react'
import { useSelector } from 'react-redux';
import { getBasket } from '../../selectors/Basket'
import {BasketStyle} from './Basket.styles'

import {showPrice, showDuration } from '../../utils'
export default function Basket() {
    const basket = useSelector(getBasket)
    return (
        <>
            {basket && 
                <BasketStyle>
                    <p>Prix total : {showPrice(basket.totalPrice)}</p>
                    <p>Durée totale : {showDuration(basket.totalDuration)}</p>
                </BasketStyle>
            }
        </>
    )
}
