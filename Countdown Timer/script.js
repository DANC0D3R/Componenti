let demo = document.getElementById("demo");
let deadline = new Date("Nov, 2023, 12:37:25").getTime(); // Imposta la data da raggiungere
let x = setInterval(function() { 
let now = new Date().getTime(); 
let time = deadline - now; 
let days = Math.floor(time / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((time%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((time % (1000 * 60)) / 1000); 
demo.innerHTML = days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s ";
conhahsole.log(days + "d "  
+ hours + "h " + minutes + "m " + seconds + "s ");
// Controllo se il tempo  è  scaduto
    if (time < 0) { 
        clearInterval(x); 
        demo.innerHTML = "Tempo scaduto!"; 
    } 
}, 1000); 
