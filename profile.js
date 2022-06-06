class Profile {
  constructor() {
    this.hobbies = [];
  }

  equals(anotherProfile) {
    return anotherProfile instanceof Profile;
  }
  askName() {
    console.log('Please Enter Your Name');
  }

  storeName(name) {
    this.name = name;
  }

  askDOB() {
    console.log('Please Enter Your Date of Birth(yyyy-mm-dd)');
  }

  storeDOB(dob) {
    this.dob = dob;
  }

  askHobbies() {
    console.log('Please Enter Your Hobbies');
  }

  storeHobbies(hobbies) {
    hobbies.split(',').forEach(hobby => {
      this.hobbies.push(hobby);
    });
  }
  getProfile() {
    return this;
  }
}

process.stdin.setEncoding('utf8');

const fs = require('fs');

const createProfile = function () {
  const profile = new Profile();
  const info = [];
  const askInfo = [profile.askName(), profile.askDOB, profile.askHobbies]
  let index = 0;
  askInfo[index];
  process.stdin.on('data', (chunk) => {
    info.push(chunk.split('\n')[0]);
    if (info.length === 1) {
      profile.askDOB();
    }
    if (info.length === 2) {
      profile.askHobbies()
    }
    if (info.length === 3) {
      profile.storeName(info[0]);
      profile.storeDOB(info[1]);
      profile.storeHobbies(info[2]);
      fs.writeFileSync('profile.json', JSON.stringify(profile.getProfile()), 'utf-8');
      console.log(profile.getProfile());
    }
  })
};

createProfile();

exports.Profile = Profile;
