console.log('Sachin')

let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button') 
let displayValue = "";
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText)
        if (buttonText == 'X') {
            buttonText = '*';
            displayValue += buttonText;
            screen.value = displayValue;
        }
        else if(buttonText == 'C'){
            displayValue = "";
            screen.value = displayValue;
        }
        else if(buttonText == '='){
            screen.value = eval(displayValue);
        }
        else if (buttonText == 'B') {
            screen.value = screen.value.slice(0, -1);
        } else if (buttonText == '%') {
            buttonText = percentage;
            displayValue += buttonText;
            screen.value = displayValue;
        } 
        else {
            displayValue += buttonText;
            screen.value = displayValue
        }
    })
}


function percentage(num,per){
    return (num/100)*per
}
console.log(percentage(200,20))