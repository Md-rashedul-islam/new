var guess = parseInt (prompt("Enter a number 1 to 5:"));

var randomNumber  =  Math.floor(Math.random()*5)+1;
if(guess== randomNumber){
    document.write("You have won");
}
else{
    document.write("you have lost.Random number was" + randomNumber);
}
