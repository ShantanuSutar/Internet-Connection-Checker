'use strict';

const checkConnection = async() => {
     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log(response)
     }catch(error){
        console.log(error)
     }
 }

setInterval(checkConnection, 3000)