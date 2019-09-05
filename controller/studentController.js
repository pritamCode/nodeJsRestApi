var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var student = require('../model/student');
var Joi = require('joi');

const schema = Joi.object().keys({
        roll : Joi.string(),
        name : Joi.string().min(3).max(10).required(),
        subject : Joi.string().min(3).max(10).required()
});

router.use(bodyParser.json());

router.post('/',(req,res)=>{ 

    var stud = {
                roll : req.body.roll,
                name : req.body.name,
                subject : req.body.subject
              };

    Joi.validate(stud,schema,(err,val)=>{
        if(err)  res.send(err.details[0].message);
        if(!err){
            student.create(stud,(err,stud)=>{
                if(err){
                    return res.status(500).send('error in inserting record');
                }
                else{
                    res.status(201).send(stud);
                }
            });
        }
    });

    
});

router.get('/',(req,res)=>{
    console.log(` req : ${req}`);
    
    student.find({},(err,studs)=>{
        if(err){
                res.status(500).send('preblem in reading record');
            }  
        else{
            res.status(200).send(studs);
        }
    });
});

router.get('/:roll',(req,res)=>{
    
    console.log(`roll : ${req.params.roll}`);
       student.findOne({roll: req.params.roll},(err,stud)=>{
        if(err){
            res.status(500).send('preblem in reading record');
        }   
        if(!stud){
            res.status(200).send([]);
        }
         else{
            res.status(200).send(stud);
            } 
       }); 
});

router.delete('/:roll',(req,res)=>{
    student.findOneAndRemove({roll: req.params.roll},(err,stud)=>{
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("Student: "+ stud.name +" was deleted.");
    });
});


router.put('/:roll',(req,res)=>{
    student.findOneAndUpdate({roll: req.params.roll},req.body,{new : true},
        (err,stud)=>{
            if (err) return res.status(500).send("There was a problem updating the user.");
            res.status(200).send(stud);
        });
});

module.exports = router;