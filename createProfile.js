const { fillForm } = require("./src/fillForm.js");
const { createForm } = require('./src/createForm.js')

const main = function (fileName) {
  const form = createForm(fileName);
  fillForm(form, console.log, fileName);
};

main('./form.json');
