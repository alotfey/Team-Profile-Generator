const Employee = require('../lib/employee');

it('Test class', () => {
    const obj = new Employee(1, 2, 3);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(2);
    expect(obj.b).toBe(3);
  });
  