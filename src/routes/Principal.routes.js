const express =require('express')
const app=express.Router()
const PersonaModel=require('../models/model')

app.get('/',async(req,res)=>{
    try {
        let listaPersonas= await PersonaModel.findAll()     
        res.render('Crud.html',{'listaDePersonas':listaPersonas})
    } catch (error) {
        res.status(500).json({data:error})
    }  
});

app.post('/',async(req,res)=>{
    try {
     
        let body=req.body
        if (body){
           let fila=await PersonaModel.create(body)
           let listaPersonas= await PersonaModel.findAll() 
           res.status(200).json({success:true,data:listaPersonas})
        }
    } catch (error) {
        console.log('FALLO',error);
        res.status(500).json({success:false,data:error.message})
    }   
});

app.delete('/all',async(req,res)=>{
    try {
          let respuesta =await  PersonaModel.destroy({truncate:true})
          let listaPersonas= await PersonaModel.findAll() 
          res.status(200).json({success:true,data:listaPersonas})
    } catch (error) {
        console.log('FALLO',error);
        res.status(500).json({success:false,data:error})
    }
   res.status(200).json({data:null})
});

app.delete('/:dni',async(req,res)=>{
    try {
          let dniBuscado=req.params.dni          
          if (dniBuscado){
            let respuesta=await PersonaModel.destroy({
                where:{
                    dni:dniBuscado
                }
            })
            let listaPersonas= await PersonaModel.findAll() 
            res.status(200).json({success:true,data:listaPersonas})
          }else{
            res.status(400).json({success:false,data:'llene todos los campos'})
          }        
         
    } catch (error) {
        console.log('FALLO',error);
        res.status(500).json({success:false,data:error})
    }
   res.status(200).json({data:null})
});


app.put('/:dni',async(req,res)=>{
    try {
          let dniBuscado=req.params.dni
          let body=req.body          
          if (dniBuscado){
            let respuesta=await PersonaModel.update({body},{
                where:{
                    dni:dniBuscado
                }
            })
            let listaPersonas= await PersonaModel.findAll() 
            res.status(200).json({success:true,data:listaPersonas})
          }else{
            res.status(400).json({success:false,data:'llene todos los campos'})
          }        
         
    } catch (error) {
        console.log('FALLO',error);
        res.status(500).json({success:false,data:error})
    }
   res.status(200).json({data:null})
});

module.exports=app