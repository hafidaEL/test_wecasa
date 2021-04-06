import basketReducer from './basket'

describe('basket reducer', () => {
    it('should return the initial state', () => {
      expect(basketReducer(undefined, {})).toEqual({"prestations": [], "totalDuration": 0, "totalPrice": 0})
    })

    it('add Prestation', () => {
        const addPrestation = {
            type: 'basket/addPrestation',
            payload: {
              reference: 'man_shampoo',
              title: 'Shampoing',
              duration: 10,
              price: 500
            }
          }
        expect(basketReducer({"prestations": [], "totalDuration": 0, "totalPrice": 0}, addPrestation))
            .toEqual({"prestations": [ 
                {"reference": "man_shampoo",
                "qty": 1
            }], "totalDuration": 10, "totalPrice": 500})
      })
      it('delete Prestation', () => {
        const deletePrestation = {
            type: 'basket/deletePrestation',
            payload: {
              reference: 'man_shampoo',
              title: 'Shampoing',
              duration: 10,
              price: 500
            }
          }
        expect(basketReducer({"prestations": [{"reference": "man_shampoo","qty": 1}], "totalDuration": 10, "totalPrice": 500}, deletePrestation))
            .toEqual({"prestations": [{"reference": "man_shampoo","qty": 0}], "totalDuration": 0, "totalPrice": 0})
      })
})






 