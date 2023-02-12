const { faker } = require("@faker-js/faker");
const count = 1000;
const users = [];

for (let i = 0; i < count; i++) {
  users.push({
    email: faker.internet.email(),
    fullname:faker.name.findName()
  });
}

console.log(users);
