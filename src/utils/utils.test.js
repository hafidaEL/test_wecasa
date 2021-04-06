import { showPrice, showDuration } from './index'

describe('showPrice', () => {
    it('should display price ', () => {
        const price = 300;
        expect(showPrice(price)).toEqual("3€ ");
    });    
});

describe('showDuration', () => {
    it('should display duration ', () => {
        const duration = 45;
        expect(showDuration(duration)).toEqual("0h45");
    });   
    it('should display 00 min duration ', () => {
        const duration = 180;
        expect(showDuration(duration)).toEqual("3h00");
    });    
});

