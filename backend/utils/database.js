const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('expensetrack','root','Nikhil@1107',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= sequelize 
