import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchHaircutPrestation } from '../../slices/haircutPrestation'
import { getHaircutPrestation } from '../../selectors/HaircutPrestation'

const HaircutPrestation = () => {
    const dispatch = useDispatch()
    const { haircutPrestation,loading, hasErrors } = useSelector(getHaircutPrestation)

    useEffect(() => {
        dispatch(fetchHaircutPrestation())
    }, [dispatch])

    const renderHaircutPrestation = () => {
        if (loading) return <p>Loading haircut prestation...</p>
        if (hasErrors) return <p>Cannot display haircut prestation...</p>
        console.log(loading+' haircutPrestation : ', haircutPrestation)

        console.log(loading+' haircutPrestation categories: ', haircutPrestation.categories)
        const { categories } = haircutPrestation
  
        if (categories)
          return categories.map( categorie =>
            <div key={categorie.reference} className='tile'>
              <Link to={`/categorie/${categorie.reference}`}>
                <img src={`images/${categorie.reference}.png`} alt={categorie.title}/>
              </Link>
            </div>
          ) 
    }

    return (
        <section>
          <h1>{haircutPrestation.title}</h1>
          <div className='content'>
            {renderHaircutPrestation()}
          </div>
        </section>
    );
}

export default HaircutPrestation;


