const fs = require('fs');
const { MultiLineField } = require('./multiLineField.js');
const { Field } = require('./field.js');
const { Form } = require('./form.js');

const isNameValid = (name) => name.match(/^[a-z]{5,}$/i);

const isDOBValid = (dob) => /^\d{4}-\d{2}-\d{2}$/.test(dob);

const isPhoneNumValid = (phoneNum) => phoneNum.match(/^\d{10}$/);

const identity = x => x;
const commaSplit = x => x.split(',');

const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const onCompleteForm = function (fileName, data) {
  writeJson(fileName, data);
  console.log('thank you');
  process.stdin.destroy();
};

const addressField = function () {
  const prompt = ['Enter Address Line 1: ', 'Enter Address Line 2: '];
  return new MultiLineField('address', prompt, identity, identity);
};

const nameField = () =>
  new Field('name', 'Enter Your Name', isNameValid, identity);

const dobField = () =>
  new Field('dob', 'Enter Your DOB', isDOBValid, identity);

const hobbiesField = () =>
  new Field('hobbies', 'Enter Your Hobbies', identity, commaSplit);

const numField = () =>
  new Field('ph_no', 'Enter your phone num.', isPhoneNumValid, identity);

const createForm = (fileName) => {
  const onComplete = onCompleteForm.bind(null, fileName);
  return new Form(onComplete, nameField(), dobField(), hobbiesField(), numField(), addressField());
}

module.exports = { createForm };
