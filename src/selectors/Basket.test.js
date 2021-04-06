import {
    getBasket,
    getPrestationByReference,
    getQuantityByReference,
    getReferences,
} from './Basket'

describe('getBasket', () => {
    it('return the basket', () => {
        const state = {
            user: {},
            basket : {
                totalPrice: 300,
                totalDuration: 45,
                prestations: []
            }
        }
        expect(getBasket(state)).toEqual(
            {
                totalPrice: 300,
                totalDuration: 45,
                prestations: []
            })
    });
    
});

describe('getPrestationByReference', () => {
    it('return the prestation of one reference', () => {
        const state = {
            user: {},
            basket : {
                totalPrice: 300,
                totalDuration: 45,
                prestations: [
                    {"reference": "man_shampoo","qty": 2},
                    {"reference": "man_color","qty": 1}
                ]
            }
        }
        expect(getPrestationByReference("man_shampoo")(state)).toEqual({"reference": "man_shampoo","qty": 2})
       
    }); 
});


describe('getQuantityByReference', () => {
    it('return the qty of the prestation of one reference', () => {
        const state = {
            user: {},
            basket : {
                totalPrice: 300,
                totalDuration: 45,
                prestations: [
                    {"reference": "man_shampoo","qty": 2},
                    {"reference": "man_color","qty": 1}
                ]
            }
        }
       
        expect(getQuantityByReference("man_shampoo")(state)).toEqual(2)
    }); 

    it('return 0 of the prestation of one reference not defined', () => {
        const state = {
            user: {},
            basket : {
                totalPrice: 300,
                totalDuration: 45,
                prestations: [
                    {"reference": "man_shampoo","qty": 2},
                    {"reference": "man_color","qty": 1}
                ]
            }
        }
        expect(getQuantityByReference("inconnu")(state)).toEqual(0)
    });
});



describe('getReferences', () => {
    it('return all reference', () => {
        const state = {
            user: {},
            basket : {
                totalPrice: 300,
                totalDuration: 45,
                prestations: [
                    {"reference": "man_shampoo","qty": 2},
                    {"reference": "man_color","qty": 1}
                ]
            }
        }
       
        expect(getReferences(state)).toEqual([
            "man_shampoo",
            "man_color",
        ])
    }); 
});
