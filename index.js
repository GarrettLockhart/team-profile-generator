const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const output = [];

function createTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to add to your team?',
        name: 'addEmployeeType',
        choices: [
          'Manager',
          'Engineer',
          'Intern',
          'No more team members are needed.',
        ],
      },
    ])
    .then(function (userAnswer) {
      switch (userAnswer.addEmployeeType) {
        case 'Manager':
          addManager();
          break;
        case 'Engineer':
          addEngineer();
          break;
        case 'Intern':
          addIntern();
          break;

        default:
          console.log(output);
      }
    });
}

const addManager = () => {
  inquirer
    .prompts([
      {
        type: 'input',
        message: 'What is the managers name?',
        name: 'managerName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'What is the managers I.D. number?',
        name: 'managerId',
        default: () => {},
        validate: function (id) {
          valid = /^[1-9]+[0-9]*$/.test(id);

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
        message: 'Please enter the managers email address',
        name: 'managerEmail',
        default: () => {},
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

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
        message: 'Please enter the managers office number',
        name: 'managersOfficeNumber',
        default: () => {},
        validate: function (officeNum) {
          valid = /^[1-9]+[0-9]*$/.test(officeNum);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter a non-negative number');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber
      );
      output.push(manager);
    });
};

const addIntern = () => {
  inquirer
    .prompts([
      {
        type: 'input',
        message: 'What is the interns name?',
        name: 'internName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'What is the interns I.D. number?',
        name: 'internId',
        default: () => {},
        validate: function (id) {
          valid = /^[1-9]+[0-9]*$/.test(id);

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
        message: 'Please enter the interns email address',
        name: 'internsEmail',
        default: () => {},
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

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
        message: 'Please enter the interns school name',
        name: 'internsSchool',
        default: () => {},
        validate: function (officeNum) {
          valid = /^[1-9]+[0-9]*$/.test(officeNum);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter a non-negative number');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Engineer(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      output.push(intern);
    });
};

const addEngineer = () => {
  inquirer
    .prompts([
      {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineerName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'What is the engineers I.D. number?',
        name: 'engineerId',
        default: () => {},
        validate: function (id) {
          valid = /^[1-9]+[0-9]*$/.test(id);

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
        message: 'Please enter the engineers email address',
        name: 'engineerEmail',
        default: () => {},
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

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
        message: 'Please enter the engineers github URL',
        name: 'engineerGithub',
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      output.push(engineer);
    });
};
