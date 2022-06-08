
const registerField = function (form, response, logger) {
  try {
    form.fillField(response);
  } catch (err) {
    logger('invalid response');
  }

  if (form.isFilled()) {
    form.save();
    return;
  }

  logger(form.getPrompt());
};

const fillForm = function (form, logger) {
  process.stdin.setEncoding('utf8');

  logger(form.getPrompt());

  process.stdin.on('data', (response) => {
    registerField(form, response.trim(), logger);
  });
};

module.exports = { fillForm, registerField };
