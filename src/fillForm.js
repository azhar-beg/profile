const registerField = function (response, profile, index, personalInfo) {
  const info = response.split('\n')[0];

  if (profile.isValid(info, index)) {
    personalInfo.push(info);
  } else {
    console.log('invalid information');
    index--;
  }

  if (personalInfo.length === 6) {
    profile.storeInfo(personalInfo);
    console.log('thank you');
    process.exit();
  }

  index++;
  profile.askQuestion(index);
  return index;
};
const fillForm = function (profile) {
  const personalInfo = [];
  let index = 0;

  profile.askQuestion(index);

  process.stdin.on('data', (response) => {
    index = registerField(response, profile, index, personalInfo);
  });
};

module.exports = { fillForm };
