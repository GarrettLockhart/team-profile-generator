const Intern = require('../lib/Intern.js');

describe('Intern class', () => {
  const testIntern = new Intern(
    'John',
    42,
    'John@example.com',
    'University of Utah'
  );

  test('intern.getName() should return the name of the intern', () => {
    expect(testIntern.getName()).toEqual('John');
  });
  test('intern.getId() should return the ID of the intern', () => {
    expect(testIntern.getId()).toEqual(42);
  });
  test('intern.getEmail() should return the email of the intern', () => {
    expect(testIntern.getEmail()).toEqual('John@example.com');
  });
  test('intern.getRole() should return the role of the intern', () => {
    expect(testIntern.getRole()).toBe('Intern');
  });
  test('intern.getGithub() should return the Github  username of the intern', () => {
    expect(testIntern.getSchool()).toEqual('University of Utah');
  });
});
