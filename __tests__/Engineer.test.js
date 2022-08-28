const Engineer = require('../lib/Engineer.js');

describe('Engineer class', () => {
  const testEngineer = new Engineer(
    'John',
    42,
    'John@example.com',
    'johnsmith'
  );

  test('Employee.getName() should return the name of the employee', () => {
    expect(testEngineer.getName()).toEqual('John');
  });
  test('Employee.getId() should return the ID of the employee', () => {
    expect(testEngineer.getId()).toEqual(42);
  });
  test('Employee.getEmail() should return the email of the employee', () => {
    expect(testEngineer.getEmail()).toEqual('John@example.com');
  });
  test('Employee.getRole() should return the role of the employee', () => {
    expect(testEngineer.getRole()).toBe('Engineer');
  });
  test('Employee.getGithub() should return the Github  username of the employee', () => {
    expect(testEngineer.getGithub()).toEqual('johnsmith');
  });
});
