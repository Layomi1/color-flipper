const color= ['red', 'green','#fff', 'rgba(212,133,200,0.8)','peach',
'lemon'];
const btn = document.getElementById('btn');
let hexEl= document.getElementById('hex-el')
console.log(hexEl)

btn.addEventListener( 'click', function(){
    let randomNumber= getRandomNumber();
    let hexCode= '#'
    for (let i = 0; i < color.length; i++) {
        hexCode = color[randomNumber]
    }
    document.body.style.backgroundColor = color[randomNumber]
    console.log('ready!')
})

function getRandomNumber(){
    return Math.floor(Math.random()*color.length)
}
getRandomNumber(); 