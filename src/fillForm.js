const fs = require('fs');
const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const onCompleteForm = function (fileName, form) {
  writeJson(fileName, form);
  process.stdin.destroy();
};

const registerField = function (form, response, logger, fileName) {
  try {
    form.fillField(response);
  } catch (err) {
    logger('invalid response');
  }
  if (!form.isFilled()) {
    logger(form.getPrompt());
    return
  }
  onCompleteForm(fileName, form.getResponses());
  logger(`thank you`);
};

const fillForm = function (form, logger, fileName) {
  logger(form.getPrompt());
  process.stdin.on('data', (response) => {
    registerField(form, response.trim(), fileName);
  });
};

module.exports = { fillForm, registerField };
