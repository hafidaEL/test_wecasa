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

        expect(basketReducer({"prestations": [
            {"reference": "man_shampoo","qty": 2},
            {"reference": "man_color","qty": 1}],
            "totalDuration": 400, "totalPrice": 500}, addPrestation))
        .toEqual({"prestations": [
            {"reference": "man_shampoo","qty": 3},
            {"reference": "man_color","qty": 1}],
            "totalDuration": 410, "totalPrice": 1000})
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
        expect(basketReducer({"prestations": [
            {"reference": "man_shampoo","qty": 1}], "totalDuration": 10, "totalPrice": 500}, deletePrestation))
            .toEqual({"prestations": [{"reference": "man_shampoo","qty": 0}], "totalDuration": 0, "totalPrice": 0})
      })
})






 