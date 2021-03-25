export const getHaircutPrestation = state => state.haircutPrestation

export const getCategorieByReference = (reference) => state => {
    if (state.haircutPrestation.haircutPrestation.categories) {
        console.log("state.haircutPrestation.haircutPrestation.categories : ", state.haircutPrestation.haircutPrestation.categories)

        return state.haircutPrestation.haircutPrestation.categories.filter(
            categorie =>  categorie.reference === reference
        )[0]
    }          
} 

