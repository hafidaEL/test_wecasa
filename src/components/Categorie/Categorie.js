import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getCategorieByReference } from '../../selectors/HaircutPrestation'

export default function Categorie() {
    let { reference } = useParams();
    console.log("reference : ", reference )
    const categorie  = useSelector(getCategorieByReference(reference));
    console.log("categorie ", categorie)
    const renderPrestation = () => {
        if (categorie.prestations)
          return categorie.prestations.map( prestation =>
            <div key={prestation.reference} className='tile'>
                <p>{prestation.title}</p>
                <p>{prestation.duration}</p>
                <p>{prestation.price}</p>
            </div>
          ) 
    }
    return (
        <div>
            prestations de {reference} :  {renderPrestation()}
        </div>
    )
}
