const secondsSpan = document.querySelector('#seconds');
const minutesSpan = document.querySelector('#minutes');
const fractionSpan = document.querySelector('#fraction')
let secondsValue = 0;
let minutesValue = 0;
let fractionValue = 0;
let currentChronometrer;

function startChronometrer(){
    currentChronometrer = setInterval(() =>{
        fractionValue = fractionValue + 1;
        if(fractionValue === 100){
            fractionValue = 0;
            secondsValue = secondsValue + 1;
            secondsSpan.textContent = formatValue(secondsValue);
        }
        fractionSpan.textContent = formatValue(fractionValue);
        
        if(secondsValue === 60){
            secondsValue = 0;
            minutesValue = minutesValue + 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
    }, 10);
}

function stopChronometrer(){
    clearInterval(currentChronometrer);
}

function resetChronometrer(){
    stopChronometrer();
    fractionValue = 0;
    secondsValue = 0;
    minutesValue = 0;
    fractionSpan.textContent = '00';
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00'; 
} 

function formatValue(value){
    return (`${0}${value}`).slice(-2);
}