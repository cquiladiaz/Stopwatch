const secondsSpan = document.querySelector('#seconds');
const minutesSpan = document.querySelector('#minutes');
let secondsValue = 0;
let minutesValue = 0;
let currentChronometrer;

function startChronometrer(){
    currentChronometrer = setInterval(() =>{
        secondsValue = secondsValue + 1;
        if(secondsValue === 60){
            secondsValue = 0;
            minutesValue = minutesValue + 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}

function stopChronometrer(){
    clearInterval(currentChronometrer);
}

function resetChronometrer(){
    stopChronometrer();
    secondsValue = 0;
    minutesValue = 0;
    minutesSpan.textContent = '00';
    secondsSpan.textContent = '00'; 
} 

function formatValue(value){
    return (`${0}${value}`).slice(-2);
}