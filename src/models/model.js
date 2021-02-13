const {Sequelize,DataTypes,Model} =require('sequelize')

const db=require('../db/db')

class Persona extends Model{}

Persona.init(
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false            
        },
        dni:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true
        }
    },{
        sequelize:db,
        modelName:'Persona'
    });
Persona.beforeCreate(async(persona,options)=>{
    try {
        let personas=await Persona.findAll({
            where:{
                dni:persona.dni
            }
        })  
        if(personas.length>0){
            throw new Error('USTED YA INGRESO UN SUJETO CON ESE DNI')
        }
    } catch (error) {
        throw error
    }
   

})
module.exports=Persona

