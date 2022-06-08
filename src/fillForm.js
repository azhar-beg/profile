const fs = require('fs');
const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const onCompleteForm = function (fileName, form) {
  writeJson(fileName, form);
  console.log(`thank you`);
  process.stdin.destroy();
};

const registerField = function (form, response, fileName) {
  try {
    form.fillField(response);
  } catch (err) {
    console.log('invalid response');
  }
  if (!form.isFilled()) {
    console.log(form.getPrompt());
    return
  }
  onCompleteForm(fileName, form.getResponses());
};

const fillForm = function (form, fileName) {
  console.log(form.getPrompt());
  process.stdin.on('data', (response) => {
    registerField(form, response.trim(), fileName);
  });
};

module.exports = { fillForm };
