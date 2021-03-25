export const getHaircutPrestation = state => state.haircutPrestation

export const getCategorieByReference = (reference) => state => {
    const prestation = getHaircutPrestation(state)
    if (prestation.haircutPrestation.categories) {
        return prestation.haircutPrestation.categories.filter(
            categorie =>  categorie.reference === reference
        )[0]
    }          
} 

