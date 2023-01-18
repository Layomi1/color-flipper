const hex= [0,1,2,3,4,5,6,7,9,'A','B','C','D','E','F'];
const hexEl = document.getElementById('hex-el');
const btn = document.getElementById('btn');
let randomNumber= getRandomNumber();



btn.addEventListener('click', function(){
    let hexCode = '#';
    for (let i = 0; i <6; i++){
        hexCode += hex[randomNumber];
    }
    hexEl.textContent = hexCode;
    document.body.style.backgroundColor = hexCode;
    }
); 

// generate random numbers
function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}




