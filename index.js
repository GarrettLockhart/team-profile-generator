const inquirer = require('inquirer');
const fs = require('fs');

const createTeam = require('./lib/createTeam.js');

const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

const output = [];

function runApp() {
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
          'All done, generate webpage!.',
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
          htmlBuilder();
      }
    });
}

const addManager = () => {
  inquirer
    .prompt([
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
        message: 'Please enter the managers email address:',
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
        message: 'Please enter the managers office number:',
        name: 'managerOfficeNumber',
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
        answers.managerOfficeNumber
      );
      output.push(manager);
      runApp();
    });
};

const addIntern = () => {
  inquirer
    .prompt([
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
        message: 'Please enter the interns email address:',
        name: 'internEmail',
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
        message: 'Please enter the interns school name:',
        name: 'internSchool',
        default: () => {},
        validate: function (schoolName) {
          valid = /^[a-zA-Z\s]*$/.test(schoolName);

          if (valid) {
            return true;
          } else {
            console.log('\nPlease enter only letters, and spaces');
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      output.push(intern);
      runApp();
    });
};

const addEngineer = () => {
  inquirer
    .prompt([
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
        message: 'Please enter the engineers email address:',
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
        message: 'Please enter the engineers github username:',
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
      runApp();
    });
};

const htmlBuilder = () => {
  console.log('Successfully generated team, please look in the "dist" folder!');

  fs.writeFileSync('./dist/index.html', createTeam(output), (err) => {
    err ? console.error(err) : console.log(err);
  });
};

runApp();
