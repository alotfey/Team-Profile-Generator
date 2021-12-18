const Manager = require('../lib/manager');

it('works', () => {
    const obj = new Manager(1, 2, 3);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(2);
    expect(obj.b).toBe(3);
  });
  