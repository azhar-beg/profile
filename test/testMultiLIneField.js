const assert = require('assert');
const { MultiLineField } = require("../src/multiLineField");

describe('MultiLineField', () => {
  it('Should fill the field with given responses', () => {
    const addressField = new MultiLineField('address', ['a', 'b'])
    addressField.fill('aas');
    addressField.fill('pas');
    assert.ok(addressField.isFilled());
  });

  it('Should return first prompt for on first call', () => {
    const addressField = new MultiLineField('address', ['first prompt', 'b'])
    assert.strictEqual(addressField.getPrompt(), 'first prompt');
  });

  it('Should return responses joined by new line', () => {
    const addressField = new MultiLineField('address', ['a', 'b'])
    addressField.fill('aas');
    addressField.fill('pas');
    const expected = { name: 'address', response: 'aas\npas' };
    assert.deepStrictEqual(addressField.getField(), expected);
  });

});