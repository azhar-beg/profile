const registerField = function (form, response) {
  try {
    form.fillField(response);
  } catch (err) {
    console.log('invalid response');
  }

  if (!form.isFilled()) {
    console.log(form.getPrompt());
    return
  }

  form.saveForm();
  console.log(`thank you`);
  process.exit()
};

const fillForm = function (form) {
  console.log(form.getPrompt());
  process.stdin.on('data', (response) => {
    registerField(form, response.trim());
  });
};

module.exports = { fillForm };
