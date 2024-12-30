//Ex1
var array=[];
 array[0] = prompt('please enter your name:' );
 array[1] = prompt('please enter your gender:' );
 gender();
 array[2] = prompt('please enter your order: shawarma, zinger, or burger' );
 alert('your order '+ "("+array[2]+") " +'is being prepared ')

for(i=0; i<=array.length; i++){
console.log(array[i]);
}

function gender(){
    while(array[1] !== "male" && array[1] !== "female"){
       array[1] = prompt('please enter a valid gender:');
    }
   if (array[1] == "male"){
       alert('Welcome Mr '+ array[0]);
   }
   else if (array[1] == "female"){
       alert('Welcome Ms '+ array[0]);
   }
   else{
       alert('Welcome ' + array[0])
   }
}








