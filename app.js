//Ex5
const form1 = document.getElementById("form1");
const details = document.getElementById("details");


form1.addEventListener("submit",function(events){
    events.preventDefault(); 
    const username = document.getElementById("username").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  
  const orderChoice = document.querySelector('input[name="orderChoice"]:checked');
  if (!orderChoice) {
    details.textContent = "Please select an order choice.";
    return;
  }
  const checkbox = document.querySelector('input[name="order"]:checked');
  if (!checkbox) {
    details.textContent = "Please select an order size.";
    return;
  }
  const selectedOrder = orderChoice.value;
  const orderSize = checkbox.value;
  details.innerHTML=
 `
    <strong>Username:</strong> ${username} <br>
    <strong>Age:</strong> ${age} <br>
    <strong>Gender:</strong> ${gender} <br>
    <strong>Order Choice:</strong> ${selectedOrder}<br>
    <strong>Order Size:</strong> ${orderSize}`
  ;});









