export const getBasket = state => state.basket

export const getPrestationByReference = (reference) => state => {
    const basket = getBasket(state)
    if (basket.prestations) {
        return basket.prestations.filter(
            prestation =>  prestation.reference === reference
        )[0]
    }          
} 

export const getQuantityByReference = (reference) => state => {
    const prestation = getPrestationByReference(reference)(state)
    if (prestation)
        return prestation.qty
    return 0; 
}
