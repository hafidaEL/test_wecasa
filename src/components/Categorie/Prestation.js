import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPrestation, deletePrestation } from '../../slices/basket'
import { getQuantityByReference } from '../../selectors/Basket'
import {showPrice, showDuration } from '../../utils'

export default function Prestation({prestation}) {
    const dispatch = useDispatch()
    const qty = useSelector(getQuantityByReference(prestation.reference))
    return (
        <div>          
            <p>{prestation.title}</p>
            <p>Durée : {showDuration(prestation.duration)}</p>
            <p>Prix : {showPrice(prestation.price)}</p>
            <button onClick={() => dispatch(addPrestation(prestation))}>+</button>
            <p>{qty}</p>
            <button onClick={() => dispatch(deletePrestation(prestation))}>-</button>
        </div>
    )
}
