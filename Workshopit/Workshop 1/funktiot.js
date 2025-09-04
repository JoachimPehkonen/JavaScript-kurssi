// Tehtävä 4
var x = 50;
var order = 'Beer';
if(x>50) {document.write("He's over 50!");} else if(x <= 50 && x>30){document.write("Middle aged man, who ordered some"+order);}else if(x <= 30 && x>20){document.write("Young adult, who ordered some" + order);} else {document.write("It seems you're bit underaged.");}


// Tehtävä 5
for (var i=0; i<15; i++) {
var num = Math.floor(Math.random()*100)+1; document.write(num + "\n" )}