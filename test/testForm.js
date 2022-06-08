const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const assert = require('assert');

describe('Form', () => {
  it('Should fill the field with given response', () => {
    const nameField = new Field('name', 'enter name');
    const form = new Form(x => x, nameField);

    form.fillField('prem');

    assert.strictEqual(form.isFilled(), true);
  });

  it('Should fill the field with given response', () => {
    const file = {}
    mockedWriteToFile = (fileName, data) => {
      file[fileName] = data;
      return file;
    };
    const writeFile = mockedWriteToFile.bind(null, 'fileName')

    const expected = { fileName: { name: 'prem' } };
    const nameField = new Field('name', 'enter name');
    const form = new Form(writeFile, nameField);

    form.fillField('prem');
    form.save()
    assert.deepStrictEqual(file, expected);
  });
});