//HTML events are things that happen to html elements
//when js is used in HTML pages, JS can react on these events
//HTML events can be something that browser does or something that user does
//e.g.
//an html page has finished loading
// //an html input field was changed
// // ..an html button was clicked
// often when events happen you may want to do something

//JS lets you execute code when events are detected
//HTML allows event handler attributes, 
//with JS code to be added to HTML elements


// // 4ways of  writing events in JS
// 1. using alert();
// 2.By calling a function
// 3.using inline EventSource(HTML onclick=""property and Element.onclick)
// 4.using event listners(addEventListner and IE's attachEvent)
// see _6events1.html
console.log("srction2");
//what is Event Object
//Event object is the  parent object of the event object
//eg    MouseEventfocusEvent KeywordObject, etc


//what is MouseEvent object in JS
// //events that occur when the mouse interacts with the JS
// document belong to the mouse object


// KeyboardEvent in JS
// Event that occur when the user pressses a key on the keyboard
// belong to the KeyboardEvent object


//input events in JS
//the onvhange event occurs when the value of an element has been changed

//for radiobuttons and checkboxes, the onchange
//ocurs when the checked state has been changed

//timimg events in js
//setTimeout()
// //setInterval()
// clearTimeout()
// clearInterval()

// //the window object allows execution of code at a specified time interval   
// ..this time events are called as timing events
// setTimeout(function,miliseconds);
// //executes a function after specified miliseconds
// setInterval(function, miliseconds);
//same as timeout but repeat the execution of function repetatatively
