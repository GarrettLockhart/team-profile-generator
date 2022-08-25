class Employee {
  constructor(role, name, employeeId, employeeEmail, employeeOfficeNumber) {
    this.role = role;
    this.name = name;
    this.employeeId = employeeId;
    this.employeeOfficeNumber = employeeOfficeNumber;
    this.employeeEmail = employeeEmail;
  }
}

const newEmployee = (answers) => {
  const employee = new Employee(
    answers.role,
    answers.name,
    answers.employeeId,
    answers.employeeEmail,
    answers.employeeOfficeNumber
  );
  console.log(employee);
  return employee;
};

module.exports = Employee;
module.exports = newEmployee;
