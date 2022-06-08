const { Field } = require('./field.js');
const { Profile } = require('./profile.js');
const { fillForm } = require("./fillForm.js");

process.stdin.setEncoding('utf8');

const main = function () {
  const profile = new Profile();

  fillForm(profile);
};

main();

