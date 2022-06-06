const fs = require('fs');

const writeJson = function (file, data) {
  fs.writeFileSync(file, JSON.stringify(data), 'utf-8');
};

const isNameValid = (name) => name.match(/^[a-z]{5,}$/);

const isDOBValid = (dob) => /^\d{4}-\d{2}-\d{2}$/.test(dob);

const areHobbiesValid = (hobbies) => hobbies;

const isPhoneNumValid = (phoneNum) => phoneNum.match(/\d{10}/);

const isAddressValid = (address) => address;

const askName = () => {
  console.log('Please Enter Your Name');
}

const askDOB = () => {
  console.log('Please Enter Your Date of Birth(yyyy-mm-dd)');
}

const askHobbies = () => {
  console.log('Please Enter Your Hobbies');
}

const askPhoneNum = () => {
  console.log('Please Enter Your Phone Number');
}

const askAddressLine1 = () => {
  console.log('Enter Address Line 1:');
}

const askAddressLine2 = () => {
  console.log('Enter Address Line 2:');
}


class Profile {
  constructor() {
    this.hobbies = [];
  }

  equals(anotherProfile) {
    return anotherProfile instanceof Profile;
  }

  storeName(name) {
    this.name = name;
  }

  storeDOB(dob) {
    this.dob = dob;
  }

  storeHobbies(hobbies) {
    hobbies.split(',').forEach(hobby => {
      this.hobbies.push(hobby);
    });
  }

  storePhoneNum(phoneNum) {
    this.phone = phoneNum;
  }

  storeAddress(line1, line2) {
    this.address = line1 + line2;
  }

  askQuestion(index) {
    const questions = [askName, askDOB, askHobbies, askPhoneNum, askAddressLine1, askAddressLine2];
    questions[index]();
  }

  isValid(info, index) {
    const isValid = [isNameValid, isDOBValid, areHobbiesValid, isPhoneNumValid, isAddressValid, isAddressValid];
    return isValid[index](info);
  }

  saveProfile() {
    writeJson('profile.json', this);
  }

  storeInfo([name, dob, hobbies, phoneNum, addressLine1, addressLine2]) {
    this.storeName(name);
    this.storeDOB(dob);
    this.storeHobbies(hobbies);
    this.storePhoneNum(phoneNum)
    this.storeAddress(addressLine1, addressLine2)
    this.saveProfile();
  };

}

exports.Profile = Profile;
