const { User } = require('../models');

const userData = [
    {
        username: "JT Gutierrez",
        email: "jt@example.com",
        password: "Thisisapassword"

    },
    {
        username: "Alejandra Andrade",
        email: "alejandra@test.example.com",
        password: "p@ssword1"

    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;