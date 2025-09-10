//Tehtävä 2
    window.alert("Hello World!");
    document.write("<h2>Hallo World! :-D</h2>");
    console.log("Hello World!");

// Tehtävä 9
var x = 50;
var order = 'Beer';
if(x>50) {document.write("He's over 50!");} else if(x <= 50 && x>30){document.write("Middle aged man, who ordered some"+order);}else if(x <= 30 && x>20){document.write("Young adult, who ordered some" + order);} else {document.write("It seems you're bit underaged.");}


// Tehtävä 10
for (var i=0; i<15; i++) {
var num = Math.floor(Math.random()*100)+1; document.write(num + "\n" )}

// Tehtävä 11
function addNumbers(a, b) {
  return a + b;
}
var num1 = 60;   // first number
var num2 = 55;   // second number
var sum = addNumbers(num1, num2);
if (sum > 100) {
  alert("The sum is over 100!");
}
document.write("<h3>First number: " + num1 + "</h3>");
document.write("<h3>Second number: " + num2 + "</h3>");
document.write("<h3>Sum: " + sum + "</h3>");