// Post Increment
var a = 8;
var a = a++; // The value of a is 8
var a = a; // The value of a is 9

// Pre Increment
var b = 9;
var b = ++b; // The value is 10

// Post Decrement
var c = 6;
var c = c--; // The value is 6
var c = c; // The value is 5

// Pre Decrement
var d = 13;
var d = --d; // Now the value of d is 12

document.write(
  "<h1>Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: </h1>"
);
document.write (
    "<h3>The difference between Post and Pre Increment is that Post increment works on the next line and it's identification is (++) comes after the value and Pre Increment works on the same line and it's identification is that (++) comes before the value.</h3>"
)
document.write (
    "<h2>Increment (++):</h2> <p>Increment means addition in increment a number adds in the value</p> <br><h2>Decrement (--):</h2><p> Decrement means subtraction in decrement the number subtracts from the value. </p>"
)

document.write ("<h2>This is Post Increment</h2>")
document.write("<strong>The value of a++ is: 8 </strong></br>");
document.write("<strong>Now the value of a++ is: 9 </strong></br></br></br>");

document.write ("<h2>This is Pre Increment</h2>")
document.write("<strong>The value of b is: 9 </strong></br>");
document.write("<strong>Now the value of ++b is: 10 </strong></br></br></br>");

document.write ("<h2>This is Post Decrement</h2>")
document.write("<strong>The value of c-- is: 6 </strong></br>");
document.write("<strong>Now the value of c-- is: 5 </strong></br></br></br>");

document.write ("<h2>This is Pre Decrement</h2>")
document.write("<strong>The value of d is: 6 </strong></br>");
document.write("<strong>Now the value of --d is: 5 </strong></br>");