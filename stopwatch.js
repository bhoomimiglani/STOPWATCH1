let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");
let seconds=document.querySelector("#seconds");
let minutes=document.querySelector("#minutes");
let hours=document.querySelector("#hours");
let count=0;
let timer=null;
let minutes1=0;
let hours1=0;

start.addEventListener("click",function(){
    if(!timer){
     timer=setInterval(function(){
    count++;
    if(count>=60)
      {
        count=0;
        minutes1++;
        
      }
      if(minutes1>=60)
      {
        minutes1=0;
        hours1++;
      }
    seconds.textContent=count;
    minutes.textContent=minutes1;
    hours.textContent=hours1;
     },1000);
 
   }
 
})
