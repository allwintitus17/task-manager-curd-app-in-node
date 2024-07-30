const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://allwintitus491:97AZDZLWjtlzZbbo@cluster0.fnne0g8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true

    
});
console.log("Database Connected SucessFully");


// const me = new User({
//     name: 'Ana',
//     email:'allwin@gmail.com',
//     password:'Passwordo',
//     age:21
// });

// me.save().then((me) => { 
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// });

  
    // const mytask= new Tasks({
    //     Description:"I Need To practice Keyboard fjhfjgfjgf jgkfgjfjgf gjkfjgkfgfjgfkgjkfgjkfjgfkgjfkgjfkgjfkgjfg gjfkgjfkgjfkgjfkjfkgjfkg fgjkfgjfkgjfkgjfkgjfgjfkgjkfgjfkgjkfgjkfgjfkgjfkgjkfjgfkgjfjgfg gkfgfkgjfkgjfkgjfkgjfkgjfkgjfgjfgjfgjfkgjkfgjfkgjfgjfgjfgjkgjfgfjgkfjgkfjgkfjkfgj",
    //     Completed:true
    // })

    // mytask.save().then((mytask)=>{
    //     console.log("mytask");
    //     console.log("Task IS been Added Sucessfully");
    // }).catch((error)=>{
    //     console.log("SomeTHing Went Wrong");
    //     console.log(error);
    // })