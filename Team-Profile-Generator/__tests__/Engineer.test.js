const Engineer = require('../lib/engineer');

it('works', () => {
    const obj = new Engineer(1, 2, 3);
    expect(obj.a).toBe(1);
    expect(obj.b).toBe(2);
    expect(obj.b).toBe(3);
  });
  