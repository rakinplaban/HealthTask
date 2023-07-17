let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        if(endValue===1500 && startValue===1500){
            valueDisplay.textContent = "+" + startValue;
        }else{
        valueDisplay.textContent = startValue;
        }
        if (startValue == endValue) {
            clearInterval(counter);
        }
    
    }, duration);
});