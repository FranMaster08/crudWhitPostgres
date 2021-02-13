
const Sequelize=require('sequelize')

const sequelize = new Sequelize('postgres://postgres:adrian@localhost:5432/abmpersonas',{
    logging:false
}) // Example for postgres


module.exports=sequelize

