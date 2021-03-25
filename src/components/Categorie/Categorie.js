import React from 'react'
import {useParams} from 'react-router-dom'

export default function Categorie() {
    let { reference } = useParams();
    return (
        <div>
            {reference}
        </div>
    )
}
