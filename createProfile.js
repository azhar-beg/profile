const { Profile } = require('./profile.js');

process.stdin.setEncoding('utf8');

const fs = require('fs');

const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const storeInfo = function (profile, [name, dob, hobbies]) {
  profile.storeName(name);
  profile.storeDOB(dob);
  profile.storeHobbies(hobbies);
  writeJson('profile.json', profile.getProfile());
};

const createProfile = function (profile, ask, isValid) {
  const personalInfo = [];
  let index = 0;
  ask[index]();
  process.stdin.on('data', (chunk) => {
    const info = chunk.split('\n')[0];

    if (isValid[index](info)) {
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
    ask[index]();
  })
};


const main = function () {
  const profile = new Profile();
  const ask = [profile.askName, profile.askDOB, profile.askHobbies];
  const isValid = [profile.isNameValid, profile.isDOBvalid, profile.areHobbiesValid];

  createProfile(profile, ask, isValid);
};

main();
