const Manager = require('../lib/Manager.js');

describe('Manager class', () => {
  const testManager = new Manager('John', 42, 'John@example.com', 32);

  test('Manager.getName() should return the name of the Manager', () => {
    expect(testManager.getName()).toEqual('John');
  });
  test('Manager.getId() should return the ID of the Manager', () => {
    expect(testManager.getId()).toEqual(42);
  });
  test('Manager.getEmail() should return the email of the Manager', () => {
    expect(testManager.getEmail()).toEqual('John@example.com');
  });
  test('Manager.getRole() should return the role of the Manager', () => {
    expect(testManager.getRole()).toBe('Manager');
  });
  test('Manager.getGithub() should return the Github  username of the Manager', () => {
    expect(testManager.getOfficeNumber()).toEqual(32);
  });
});
