var num1 = parseInt(prompt('Enter First Number: '));
var opp = prompt('Enter Operator(+ , - , * , / ): ');
var num2 = parseInt(prompt('Enter Second Number: '));


if(opp === '+')
{
    result = num1 + num2;
} else if(opp === '-'){
    result = num1 - num2;
} else if(opp === '*'){
    result = num1 * num2;
} else if(opp === '/'){
    result = num1 / num2;
}

//display the result
alert(`The Answer Is: ${result}`);