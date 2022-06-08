const assert = require('assert');
const { Field } = require('../src/field.js');
const { Form } = require('../src/form.js');
const { registerField } = require('../src/fillForm.js');


describe('description', () => {
  it('Should register given response to appropriate field', () => {
    const field = new Field('name', '');
    const form = new Form(field);

    const expected = { name: 'prem' };
    registerField(form, 'prem', x => x, x => x);
    const actual = form.getResponses();

    assert.deepStrictEqual(actual, expected);
  });

  it('should display prompt for expected field', () => {
    const logs = [];
    mockedConsole = input => logs.push(input);

    const nameField = new Field('name', 'enter name');
    const dobField = new Field('dob', 'enter dob');
    const form = new Form(nameField, dobField);

    registerField(form, 'prem', mockedConsole, 'a');

    const expected = ['enter dob'];
    assert.deepStrictEqual(logs, expected);

  });

  it('should display error message for invalid response', () => {
    const logs = [];
    mockedConsole = input => logs.push(input);

    const nameField = new Field('name', 'enter name', x => x.length > 4);
    const form = new Form(nameField);

    registerField(form, 'prem', mockedConsole, x => x);

    const expected = ['invalid response', 'enter name'];
    assert.deepStrictEqual(logs, expected);

  });

  it('should write data to given file', () => {
    const file = {}
    mockedWriteToFile = (fileName, data) => {
      file[fileName] = data;
      return file;
    };
    const writeFile = mockedWriteToFile.bind(null, 'fileName')

    const nameField = new Field('name', 'enter name');
    const form = new Form(nameField);

    registerField(form, 'prem', mockedConsole, writeFile);

    const expected = { fileName: { name: 'prem' } };
    assert.deepStrictEqual(file, expected);
  });
});