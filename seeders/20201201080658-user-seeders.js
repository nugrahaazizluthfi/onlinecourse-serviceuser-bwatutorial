"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          profession: "Admin Mitra",
          role: "admin",
          email: "adminmitra@gmail.com",
          password: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Ujang",
          profession: "Frontend Developer",
          role: "student",
          email: "student@gmail.com",
          password: await bcrypt.hash("123456", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
