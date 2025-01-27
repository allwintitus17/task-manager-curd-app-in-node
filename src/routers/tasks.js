const express=require('express')
const Tasks=require('../models/tasks');
const router=new express.Router();


router.post('/tasks',async (req,res)=>{


    const tasks=new Tasks(req.body);
    try{
      await tasks.save()
      res.status(201).send(tasks)
  }catch(e){
          res.status(400).send(e)
      }
        //  tasks.save().then(()=>{
  //        res.send(tasks)   }).catch((e)=>{
  //     res.status(400).send(e);
  //  })

    })


    


// app.post('/tasks',(req,res)=>{
//     const Tasks=new Tasks(req.body)

//     user.save().then(()=>{
//         res.send(user)
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })

router.get('/tasks',async(req,res)=>{

  try{ 
    const tasks=await Tasks.find({})
    res.send(tasks)
  }catch(e){
       res.status(500).send()
      }
  // Tasks.find({}).then((tasks)=>{
  //    res.send(tasks)
  // }).catch((e)=>{
  //     res.status(500).send()
  // })
})

router.get('/tasks/:id',async (req,res)=>{
  const _id=req.params.id

  try{
    const task=await Tasks.findById(_id)
    if(!task){
      return res.status(404).send()
    }
    res.send(task)
  }catch(e){
      res.status(500).send()
  }
  // Tasks.findById(_id).then((task)=>{
  //      if(!task){
  //         return res.status(404).send()
  //      }  
  //     res.send(task)
  // }).catch((e)=>{
  //     res.status(500).send()
  // })
})



router.patch('/tasks/:id',async(req,res)=>{

  const updates=Object.keys(req.body)
  const allowedUpdates=['Description','Completed']
  const isValidOperation=updates.every((update)=>allowedUpdates.includes(update))
  if(!isValidOperation){
      return res.status(400).send({error:'invalid Updates'})
  }try{
      const task=await Tasks.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
      if(!task){
          return res.status(404).send()
      }
      res.send(task)
      console.log("Task Got Updated SucessFully✅✅✅")

  }catch(e){
      res.status(400).send(e)
  }
})


router.delete('/tasks/:id',async(req,res)=>{
  try{

      const task=await Tasks.findByIdAndDelete(req.params.id)
      if(!task){
          return res.status(404).send()
      }
      res.send(task)
  }catch(e){

      res.send(500).send()
  }

})

module.exports=router;