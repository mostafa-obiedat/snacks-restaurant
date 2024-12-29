//Ex2
let gender = prompt('please enter your gender (male/female)');
while(gender !== "male" && gender !== "female"){
     gender = prompt('please enter a valid gender:');
}
alert('yor gender is: '+ gender);



//Ex2 Q1
for (let i=0; i<=5;i++){
  alert(i);
}



//Ex2 Q4
let x = parseInt(prompt('please enter a number between 0 - 100'));
while(x < 0 || x > 100){
    x = parseInt(prompt('erorr! :please enter a number between 0 - 100'));
}


//Ex2 Q5
let y = parseInt(prompt('please enter an integer number'));
var sum = 0;
for(let i = 0; i <= y; i++){
    sum = sum + i;
}
alert(sum);