const fs = require('fs');

const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};



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

  isNameValid(name) {
    return name.match(/^[a-z]{5,}$/);
  }

  storeName(name) {
    this.name = name;
  }

  askDOB() {
    console.log('Please Enter Your Date of Birth(yyyy-mm-dd)');
  }

  isDOBvalid(dob) {
    return /^\d{4}-\d{2}-\d{2}$/.test(dob);
  }

  storeDOB(dob) {
    this.dob = dob;
  }

  askHobbies() {
    console.log('Please Enter Your Hobbies');
  }

  areHobbiesValid(hobbies) {
    return hobbies.length > 0
  }

  storeHobbies(hobbies) {
    hobbies.split(',').forEach(hobby => {
      this.hobbies.push(hobby);
    });
  }

  askQuestion(index) {
    const questions = [this.askName, this.askDOB, this.askHobbies];
    questions[index]();
  }
  isValid(info, index) {
    const isValid = [this.isNameValid, this.isDOBvalid, this.areHobbiesValid];
    return isValid[index](info);
  }

  saveProfile() {
    writeJson('profile.json', this);
  }
}

exports.Profile = Profile;
