'use strict';

var userName = prompt('What is your name?');
//console.log('Hi, ' + userName + '!');
alert('Hi, ' + userName + '!');

var question1 = prompt('Is my name Alan?').toLowerCase();
if((question1=='yes')||(question1=='y')){
    //console.log('That is correct.');
    alert('That is correct.');
}else if((question1=='no')||(question1=='n')){
    //console.log('Sorry ' + userName + ', that is incorrect. My name is Alan.');
    alert('Sorry ' + userName + ', that is incorrect. My name is Alan.');
}else{
    //console.log('Please answer with a Yes or No.');
}

var question2 = prompt('Am I Asian?').toLowerCase();
if((question2=='yes')||(question2=='y')){
    //console.log('That is correct.');
    alert('That is correct.');
}else if((question2=='no')||(question2=='n')){
    //console.log('Sorry ' + userName + ', that is incorrect. I am Asian.');
    alert('Sorry ' + userName + ', that is incorrect. I am Asian.');
}else{
    //console.log('Please answer with a Yes or No.');
}

var question3 = prompt('Did I graduate from ASU (Arizona State University?').toLowerCase();
if((question3=='yes')||(question3=='y')){
    //console.log('Sorry ' + userName + ', that is incorrect. I graduated from Augusta State University.');
    alert('Sorry ' + userName + ', that is incorrect. I graduated from Augusta State University.');
}else if((question3=='no')||(question3=='n')){
    //console.log('That is correct.');
    alert('That is correct.');
}else{
    //console.log('Please answer with a Yes or No.');
}

var question4 = prompt('Do I have an Associate\'s Degree?').toLowerCase();
if((question4=='yes')||(question4=='y')){
    //console.log('Sorry ' + userName + ', that is incorrect. I have a Bachelor\'s Degree.');
    alert('Sorry ' + userName + ', that is incorrect. I have a Bachelor\'s Degree.');
}else if((question4=='no')||(question4=='n')){
    //console.log('That is correct.');
    alert('That is correct.');
}else{
    //console.log('Please answer with a Yes or No.');
}

var question5 = prompt('Do I know how to use Excel?').toLowerCase();
if((question5=='yes')||(question5=='y')){
    //console.log('That is correct.');
    alert('That is correct.');
}else if((question5=='no')||(question5=='n')){
    //console.log('Sorry ' + userName + ', that is incorrect. I do know how to use Excel.');
    alert('Sorry ' + userName + ', that is incorrect. I do know how to use Excel.');
}else{
    //console.log('Please answer with a Yes or No.');
}

alert('Thank you for playing my guess game, ' + userName + '!');