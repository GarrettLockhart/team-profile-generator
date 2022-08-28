const Employee = require('../lib/Employee.js');

describe('Employee class', () => {
  const testEmployee = new Employee('John', 42, 'John@example.com');

  test('Employee.getName() should return the name of the employee', () => {
    expect(testEmployee.getName()).toEqual('John');
  });
  test('Employee.getId() should return the ID of the employee', () => {
    expect(testEmployee.getId()).toEqual(42);
  });
  test('Employee.getEmail() should return the email of the employee', () => {
    expect(testEmployee.getEmail()).toEqual('John@example.com');
  });
  test('Employee.getRole() should return the role of the employee', () => {
    expect(testEmployee.getRole()).toBe('Employee');
  });
});
