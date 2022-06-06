const { Profile } = require('./profile.js');

process.stdin.setEncoding('utf8');

const storeInfo = function (profile, [name, dob, hobbies]) {
  profile.storeName(name);
  profile.storeDOB(dob);
  profile.storeHobbies(hobbies);
  profile.saveProfile();
};

const createProfile = function (profile) {
  const personalInfo = [];
  let index = 0;

  profile.askQuestion(index);

  process.stdin.on('data', (chunk) => {
    const info = chunk.split('\n')[0];

    if (profile.isValid(info, index)) {
      personalInfo.push(info);
    } else {
      console.log('invalid information');
      index--;
    }

    if (personalInfo.length === 3) {
      storeInfo(profile, personalInfo)
      console.log('thank you');
      process.exit()
    }
    index++;
    profile.askQuestion(index);
  })
};


const main = function () {
  const profile = new Profile();

  createProfile(profile);
};

main();
