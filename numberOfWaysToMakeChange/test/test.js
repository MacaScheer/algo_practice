const chai = require('chai');
const { expect} = chai;

const { numberOfWaysTomakeChange } = require('../lib/numberOfWaysToMakeChange');


describe('numberOfWaysToMakeChange', () => {
    const numberOfWaysToMakeChange = function (array) {
            
        }
        it('should calculate all possible ways to make change, given a value, and an array of denominations', () => {
            expect(numberOfWaysToMakeChange(25, [1, 5, 10, 25])).to.equal(13)
        });

       
});