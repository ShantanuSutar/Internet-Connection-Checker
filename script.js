'use strict';
const popup = document.querySelector('.popup');
let isOnline = true, timer = 11, intervalId;
const checkConnection = async() => {
     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
        isOnline = true;
     }catch(error){
        isOnline = false;
     }
     timer = 11;
     clearInterval(intervalId)
     handlePopup(isOnline)
 }

 const handlePopup = (isOnline) => {
   if(isOnline === true){
      return popup.classList.remove('show');
   }
   popup.classList.add('show');
   intervalId = setInterval(() => {
      timer--;
      if(timer === 0) {
          checkConnection();
      }
      popup.querySelector(".about b").textContent = timer;
       }, 1000);
      
 }

 setInterval(() => isOnline &&  checkConnection(), 3000)
