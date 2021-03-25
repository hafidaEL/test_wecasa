import React from 'react'
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { getCategorieByReference } from '../../selectors/HaircutPrestation'
import { 
    CategorieStyle, 
    ListPrestation, 
    Title,
    PrestationStyle,
 } from './Categorie.styles'
import Prestation from './Prestation'
import Basket from '../Basket/Basket'

export default function Categorie() {
    let { reference } = useParams();
    console.log("reference : ", reference )
    const categorie  = useSelector(getCategorieByReference(reference));
    console.log("categorie ", categorie)
    const renderPrestation = () => {
        if (categorie.prestations)
          return categorie.prestations.map( prestation => 
            <PrestationStyle key={prestation.reference} className='tile'>
                <Prestation prestation={prestation} />
            </PrestationStyle>
          )
    }
    return (
        <CategorieStyle>
            <Title>prestations de {reference}</Title>  
            <ListPrestation>
                {renderPrestation()}
            </ListPrestation>
            <Basket />
        </CategorieStyle>
    )
}
