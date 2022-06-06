 
'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bands', [{
      name: 'Kitty Band',
      genre: 'Cat Music',
      available_start_time: '2022-01-17',
      end_time: '2022-01-31'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bands', null, {})
  }
}
