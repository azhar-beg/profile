const { Field } = require('./field.js');
const { Form } = require('./form.js');
const { fillForm } = require("./fillForm.js");

const isNameValid = (name) => name.match(/^[a-z]{5,}$/);

const isDOBValid = (dob) => /^\d{4}-\d{2}-\d{2}$/.test(dob);

const areHobbiesValid = (hobbies) => hobbies;

const isPhoneNumValid = (phoneNum) => phoneNum.match(/\d{10}/);

const identity = x => x;
const commaSplit = x => x.split(',');

process.stdin.setEncoding('utf8');

const main = function (fileName) {
  const nameField = new Field('name', 'Enter Your Name', isNameValid, identity)
  const dobField = new Field('dob', 'Enter Your DOB', isDOBValid, identity)
  const hobbiesField = new Field('hobbies', 'Enter Your Hobbies', areHobbiesValid, commaSplit)
  const numField = new Field('ph_no', 'Enter your phone num.', isPhoneNumValid, identity)
  const form = new Form(nameField, dobField, hobbiesField, numField);

  fillForm(form, console.log, fileName);
};

main('./form.json');

