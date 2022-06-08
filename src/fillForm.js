const fs = require('fs');
const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const registerField = function (form, response, logger, writeFile) {
  try {
    form.fillField(response);
  } catch (err) {
    logger('invalid response');
  }

  if (!form.isFilled()) {
    logger(form.getPrompt());
    return
  }

  writeFile(form.getResponses());
  process.stdin.destroy();
  logger(`thank you`);
};

const fillForm = function (form, logger, fileName) {
  logger(form.getPrompt());
  const writeFile = writeJson.bind(null, fileName);
  process.stdin.on('data', (response) => {
    registerField(form, response.trim(), logger, writeFile);
  });
};

module.exports = { fillForm, registerField };
