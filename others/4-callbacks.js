const doWorkCallback=(callback)=>{

      setTimeout(()=>{

        //  callback('This is mY error',undefined)
        callback(undefined,[1,43,4]);
      },2000)
}

doWorkCallback((error,result)=>{

    if(error){
        return console.log(error)
    }

    console.log(result);
})