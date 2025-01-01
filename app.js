
let x = prompt('please enter your name:' );
let y = prompt('please enter your gender:' );
gender(y); 
let a = prompt('please enter your age:' );
let z = prompt('please enter your order: shawarma, zinger, or burger' );
alert('your order '+ "("+ z+") " +'is being prepared ')


 function gender(y){
    while(y !== "male" && y !== "female"){
       y = prompt('please enter a valid gender:');
    }
    if (y == "male"){
       alert('Welcome Mr '+ x);
    }
    else if (y == "female"){
       alert('Welcome Ms '+ x);
    }
    else{
       alert('Welcome ' + x);
    }
    return y;
}




const div = document.getElementById("container");
const para = document.createElement("p");
para.innerHTML = x;
const list = document.createElement("ol");
const item1 = document.createElement("li");
item1.innerHTML = "Gender:"+y;
const item2 = document.createElement("li");
item2.innerHTML = "Age : "+a;
const item3 = document.createElement("li");
item3.innerHTML = "Order : "+z;
div.appendChild(para);
div.appendChild(list);
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);




