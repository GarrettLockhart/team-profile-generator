const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const newEmployee = require('./lib/employee');

const output = [];

const questions = [
  {
    type: 'list',
    message: 'Please select a employee role:',
    choices: ['Manager', 'Intern', 'Engineer'],
    name: 'role',
  },
  {
    type: 'input',
    message: 'Please enter the employees name:',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Please enter their employee I.D. number:',
    name: 'employeeId',
    default: () => {},
    validate: function (employeeId) {
      valid = /^[1-9]+[0-9]*$/.test(employeeId);

      if (valid) {
        return true;
      } else {
        console.log('\nPlease enter a non-negative number');
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Please enter their email address:',
    name: 'employeeEmail',
    default: () => {},
    validate: function (employeeEmail) {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        employeeEmail
      );

      if (valid) {
        return true;
      } else {
        console.log('\nPlease enter a valid email');
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Please enter their office number:',
    name: 'employeeOfficeNumber',
    default: () => {},
    validate: function (employeeOfficeNumber) {
      valid = /^[1-9]+[0-9]*$/.test(employeeOfficeNumber);

      if (valid) {
        return true;
      } else {
        console.log('\nPlease enter a non-negative number');
        return false;
      }
    },
  },
  {
    type: 'confirm',
    message: 'Do you want to add more team members to your team?',
    name: 'addEmployees',
    default: true,
  },
];

const ask = () => {
  inquirer.prompt(questions).then((answers) => {
    output.push(employee(answers));
    if (answers.addEmployees) {
      ask();
    } else {
      // employee(answers);
      console.log('Success!');
    }
    console.log(output);
  });
};

ask();
