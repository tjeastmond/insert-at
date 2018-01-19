import insertAt from '../src/insert-at';
import chai from 'chai';

let expect = chai.expect;
let should = chai.should();

describe('InsertAt', () => {
  const testArray = ['tj', 'melissa', 'autumn'];

  it('should insert an item into the array', () => {
    let a = insertAt(testArray, 'figs', 1);
    a.should.have.length(4);
    a[1].should.equal('figs');
  });

  it('should add an item to the begining of the array', () => {
    let a = insertAt(testArray, 'figs', 0);
    a.should.have.length(4);
    a[0].should.equal('figs');
  });

  it('should adjust insert point if it is larger than array length', () => {
    let a = insertAt(testArray, 'figs', 20);
    a.should.have.length(4);
    a[3].should.equal('figs');
  });

  it('should not modify the original array', () => {
    let a = insertAt(testArray, 'figs', 2);
    a.should.have.length(4);
    testArray.should.have.length(3);
    expect(testArray)
      .to.be.an('array')
      .to.have.lengthOf(3)
      .that.includes('tj', 'melissa', 'autumn');
  });
});
