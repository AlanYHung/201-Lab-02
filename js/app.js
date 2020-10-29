'use strict';

var numOfCorrectAns = 0;
var userName = 'Alan';
var i = 0;

function greetUser(){
    userName = prompt('What is your name?');
    //console.log('Hi, ' + userName + '!');
    alert('Hi, ' + userName + '!');
}

function askQuestion1(){
    var question1 = prompt('Is my name Alan?').toLowerCase();
    if((question1=='yes')||(question1=='y')){
        //console.log('That is correct.');
        alert('That is correct.');
        numOfCorrectAns++;
    }else if((question1=='no')||(question1=='n')){
        //console.log('Sorry ' + userName + ', that is incorrect. My name is Alan.');
        alert('Sorry ' + userName + ', that is incorrect. My name is Alan.');
    }else{
        //console.log('Please answer with a Yes or No.');
        alert('Please answer with a Yes or No.');
    }
}

function askQuestion2(){
    var question2 = prompt('Am I Asian?').toLowerCase();
    if((question2=='yes')||(question2=='y')){
        //console.log('That is correct.');
        alert('That is correct.');
        numOfCorrectAns++;
    }else if((question2=='no')||(question2=='n')){
        //console.log('Sorry ' + userName + ', that is incorrect. I am Asian.');
        alert('Sorry ' + userName + ', that is incorrect. I am Asian.');
    }else{
        //console.log('Please answer with a Yes or No.');
        alert('Please answer with a Yes or No.');
    }
}

function askQuestion3(){
    var question3 = prompt('Did I graduate from ASU (Arizona State University?').toLowerCase();
    if((question3=='yes')||(question3=='y')){
        //console.log('Sorry ' + userName + ', that is incorrect. I graduated from Augusta State University.');
        alert('Sorry ' + userName + ', that is incorrect. I graduated from Augusta State University.');
    }else if((question3=='no')||(question3=='n')){
        //console.log('That is correct.');
        alert('That is correct.');
        numOfCorrectAns++;
    }else{
        //console.log('Please answer with a Yes or No.');
        alert('Please answer with a Yes or No.');
    }
}

function askQuestion4(){
    var question4 = prompt('Do I have an Associate\'s Degree?').toLowerCase();
    if((question4=='yes')||(question4=='y')){
        //console.log('Sorry ' + userName + ', that is incorrect. I have a Bachelor\'s Degree.');
        alert('Sorry ' + userName + ', that is incorrect. I have a Bachelor\'s Degree.');
    }else if((question4=='no')||(question4=='n')){
        //console.log('That is correct.');
        alert('That is correct.');
        numOfCorrectAns++;
    }else{
        //console.log('Please answer with a Yes or No.');
        alert('Please answer with a Yes or No.');
    }
}

function askQuestion5(){
    var question5 = prompt('Do I know how to use Excel?').toLowerCase();
    if((question5=='yes')||(question5=='y')){
        //console.log('That is correct.');
        alert('That is correct.');
        numOfCorrectAns++;
    }else if((question5=='no')||(question5=='n')){
        //console.log('Sorry ' + userName + ', that is incorrect. I do know how to use Excel.');
        alert('Sorry ' + userName + ', that is incorrect. I do know how to use Excel.');
    }else{
        //console.log('Please answer with a Yes or No.');
        alert('Please answer with a Yes or No.');
    }
}

// Code taken from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://www.w3schools.com/js/js_random.asp
function askQuestion6(){
    var question6;
    var randomNumber = Math.floor(Math.random() * 100);
    i=0;
    alert('Hi, ' + userName + '.  Let\'s play a couple of guessing games.');
    //console.log(randomNumber);
    do{
        question6 = parseInt(prompt('Guess a number between 1-100.'));
        if(isNaN(question6)){
            question6=prompt('Invalid entry. Please choose a NUMBER between 1-100.');
        }else{
            if(question6===randomNumber){
                alert('That is correct.');
                i=10;
                numOfCorrectAns++;
            }else if(question6>randomNumber){
                alert('That is too High.');
            }else{
                alert('That is too Low');
            }
        }
        i++;
    }while(i<4);
    if(i!==11){
        alert('Sorry you are out of guesses.  The correct number is ' + randomNumber + '.');
    }
}

// https://www.digitalocean.com/community/tutorials/js-array-search-methods
function askQuestion7(){
    var answer7 = ['canada', 'taiwan', 'cambodia'];
    var question7;
    i=0;
    do{
        question7 = prompt('Name a country I have been to.').toLowerCase();
        if(answer7.includes(question7)){
            alert('That is correct');
            i=10;
            numOfCorrectAns++;
        }else{
            alert('Sorry, I have not been there before.');
        }
        i++;
    }while(i<7);
    var countries = '';
    for(var j=0;j<answer7.length;j++){
        if(j==(answer7.length-1)){
            countries = countries + '& ' + answer7[j] + '.';    
        }else{
            countries = countries + answer7[j] + ', ';
        }
    }
    var correctAnswers;
    if(i!==11){
        correctAnswers = 'Sorry, You are out of tries.  I have been to ' + countries;
    }else{
        correctAnswers = 'Congratulations!  Here are all the countries I have been to ' + countries;
    }
    alert(correctAnswers);
}

function farewellUser(){
    alert('Thank you for playing my guessing game, ' + userName + '!  You got ' + numOfCorrectAns + ' out of 7 questions correct.');
}

greetUser();
askQuestion1();
askQuestion2();
askQuestion3();
askQuestion4();
askQuestion5();
askQuestion6();
askQuestion7();
farewellUser();
