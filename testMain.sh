#! /bin/bash

expected=`echo '{"name":"rahul","dob":"0000-00-00","hobbies":["play","run"],"ph_no":"0000000000","address":"kahi\\npar"}'`
expectedPrompt='Enter Your Name Enter Your DOB Enter Your Hobbies Enter your phone num. Enter Address Line 1: Enter Address Line 2: thank you'

echo -n "${expected}" > /tmp/expectedForm.json

PROMPT=$(echo `node createProfile.js << EOF
rahul
0000-00-00
play,run
0000000000
kahi
par
`)

diff /tmp/expectedForm.json form.json

if [[ ${expectedPrompt} == ${PROMPT} ]]
then 
  echo 'PASS'
else
  echo 'FAIL'
fi
