//basic curd operations using mongoose

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb+srv://allwintitus491:owaEgqFYu9Gb7WIR@cluster0.7gaaizp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const databaseName = 'task-manager';

const id = new ObjectID();

console.log(id);

// Use the new unified topology engine
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }
    console.log("DATABASE GOT CONNECTED");

    const db = client.db(databaseName);

 db.collection('users').updateOne({

        _id: new ObjectID("66a72cbb724a9c4b98081f59")
    },{
             $inc:{
                age:-100
             }
         
           }).then((result)=>{
     console.log(result);
     console.log("Name Updated Sucessfully");

  }).catch((error)=>{
         console.log(error)
  })

  db.collection('users').deleteMany({

    age:27


  }).then((result)=>{
      console.log("Record Deleted Sucessfully");
  }).catch((error)=>{
   console.log("THERE IS AN Error in deleting the record");

  })

  //deleting the task according to description 

  db.collection('user-tasks').deleteOne({

    task:"i want to go out today with my friend"


  }).then((result)=>{
      console.log(result);
      console.log("the record deleted Sucessfully");
  }).catch((error)=>{
       console.log(error);
  })  

});

