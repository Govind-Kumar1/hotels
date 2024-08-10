const express = require('express');
 
const app = express();
const db = require('./db');
app.use(express.json()); 
const Person = require('./models/person')
app.post('/person',async (req,res)=>{
    try{
        const data = req.body 
     
    const newPerson = new Person(data);

    // Save the new person to the database
 
       const response = await newPerson.save()
       console.log('data saved')
       res.status(200).json(response);

    }
    catch(err){ 
      console.log(err);
      res.status(500).json({error:'Internal server error'});
    }
})
app.get('/',(req,res)=>{
    res.send('Welcome bro ..')
})

app.get('./person/:workType',async (req,res)=>{
    try{
        const workType = req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
       const response = await Person.find({work: workType});
       console.log('response fetched');
       res.status(200).json(response);

    }else{
        res.status(404).json({error: 'Invalid work type'});
    }
    }catch(err){
       console.log(err);
       res.status(500).json({error: 'Internal Server Error'});
    
    }
}) 
  
app.listen(3000,()=>{
    console.log("listening on port 3000");
}); 
 
