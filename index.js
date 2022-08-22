const inquirer = require('inquirer');
const fs = require('fs');
const generatedHtml = require('./lib/generatedHtml');

const output = [];

const questions = [
  {
    type: 'input',
    message: 'Please enter the team managers name:',
    name: 'managerName',
  },
  {
    type: 'input',
    message: 'Please enter their employee I.D. number:',
    name: 'employeeId',
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
    output.push(answers);
    if (answers.addEmployees) {
      ask();
    } else {
      fs.writeFile('./generated/index.html', generatedHtml, (err) =>
        err
          ? console.log(err)
          : console.log('Success, your file is in the "generated" folder!')
      );
    }
  });
};

ask();

module.exports = ask;
