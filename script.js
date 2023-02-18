'use strict';
let isOnline = true;
const checkConnection = async() => {
     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
        isOnline = true;
     }catch(error){
        isOnline = false;
     }
     console.log(isOnline)
 }

setInterval(checkConnection, 3000) 