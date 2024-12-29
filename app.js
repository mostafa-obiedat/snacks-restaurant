//Ex1
let userName = prompt('please enter your name:' );
let gender = prompt('please enter your gender:' );
if (gender == "male"){
    alert('Welcome Mr '+ userName);
}
else if (gender == "female"){
    alert('Welcome Ms '+ userName);
}
else{
    alert('Welcome ' + userName)
}
let order = prompt('please enter your order: shawarma, zinger, or burger' );
alert('your order '+ "("+order+") " +'is being prepared ')
console.log("name: "+userName + ", order: "+ order);





//Q2
let x = parseInt(prompt('please enter a number'));
switch(x) {
    case 1:
    console.log("ONE");
    break;
    case 2: 
    console.log("TWO");
    break;
    case 3:
    console.log("THREE");
    break;
    case 4:
    console.log("FOUR");
    break;
    case 5:
    console.log("FIVE");
    break;
    case 6:
    console.log("SIX");
    break;
    case 7:
    console.log("SEVEN");
    break;
    case 8:
    console.log("EIGHT");
    break;
    case 9:
    console.log("NINE");
    break;
    default:
    console.log("PLEASE TRY AGAIN");
}








