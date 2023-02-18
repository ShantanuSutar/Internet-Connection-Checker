'use strict';
const popup = document.querySelector('.popup');
const button = document.querySelector('.btn');
const icon = document.querySelector('.bi');
const title = document.querySelector('.status');
const about = document.querySelector('.about');
let isOnline = true, timer = 11, intervalId;

const checkConnection = async() => {
    
     try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = response.status >= 200 && response.status < 300;
     }catch(error){
        isOnline = false;
     }
     timer = 11;
     clearInterval(intervalId);
     handlePopup(isOnline);
 }

 const handlePopup = (isOnline) => {
    if(isOnline === true){
      icon.classList.remove = "bi-wifi-off"
      icon.classList.add = "bi-wifi";
      title.textContent = "Connection Restored :)"
      about.innerHTML = "Your device is successfully connected to the internet";
      popup.classList.add("popup-green");
      icon.style.color = "lightgreen";
      return popup.classList.remove('show')
     }

   icon.classList.remove = "bi-wifi"
   icon.classList.add = "bi-wifi-off";
   icon.style.color = "#ff3333";
   popup.classList.add('show');
   popup.classList.remove("popup-green");
   title.textContent = "Connection Lost :(";
   about.innerHTML = "Your network is unavailable. We will try to reconnect you in <b>10</b> seconds";

    intervalId = setInterval(() => {
        timer--;
        if(timer === 0) {
            checkConnection();
        }
        popup.querySelector(".about b").textContent = timer;
         }, 1000);
        
 }
 setInterval(() => isOnline &&  checkConnection(), 3000)

