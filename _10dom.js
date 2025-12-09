//window vs document
// //DOM vs BOM
// DOM navigation
//searchinf and getting reference

//window vs document
//window is the main container or we can say the global object and any operations 
//related to entire browser window can be a part of window object
//all the members like object, methods or properties 
// document(DOM) is a child of window object

//if they are the part of window object then we do not refer the window object
//where in the DOM we need to refer the document, if we want 
//to use the document object, methods or properties

//window has methods, properties, objects 
//ex:setTimeout(), detInterval() are methods 
//where as Document is the object of the window and 
//it also has a screen object with properties describing the physical display
//containing the HTml welements themselves


//the DOM is the document Object Model, which deals with the document 
// the html elements themselves.
//e.g. document and all traversal you do in it,events,etc
//document.body.style.background="red"

//BOM is the browser object Model, which deas with browser components
//aside from the document, like history,location.navigator and screen
//(as erll as some others that are vary by browswe). OR
// in simple meaning all the window operations which comes under BOM are performed using BOM

// Functions alert/confirm/prompt are also a part of BOM:
//they are directly not related rto the document
//but represent pure browser methods of communicating with the user.
//alert(location.href);//shows current URL
// if(confirm("Want to visit fda")){
//     location.href = "htts://www.google.com"//redirect to the href 
// // }
// window.history.back(); is used to go back to the previious web page

// HTMl is the root element if the document

// document.documentElement return the element that is root element of the document
// document.head
// document.body
// document.body.childNodes(includes tab enter and whitespaces)
// //returns the direct children only and represents tabs enter and white spaces as text
// document.children returns only regular elements without text nodes
// document.childNodes.length()
//document.body.firstChild//includes whitespaces as well
//document.body.firstElementChild
//document.body.firstElementChild.firstElementChild
//document.body.parentNode returs entire html document
//document.body.parentElement
//documentbody.nextSibling
//document.body.previousSibling//inculdes text or whitespaces as text
//document.body.previousElementSiblng


// // SEarching in js by ID class tag name by name
// document.getElementById('id').innerHTML = "sahil";//replaces the innerHTML of the ID by sahil
//searching by reference
// const xyz = document.getElementById('id');
// // xyz.innerHTML="sahil"
// document.getElementsByClassName("classname")
// // document.getElementsByTagName('p') returns the all paragraph tags
// document.getElementsByName('gender');


// Querry selector
// document.querySelector('#heading').innerHTML  = "Sahil"
// in querry selector we can get id by using #
// we can get class by using .
// we can get tagName by using direct tag name
// quey sselector finds the first matching values WebGLShaderPrecisionFormat
// // querrySelectorAll() finds all occurences of the element 

// difference b/w getelementbyId and querryselector
// get elementbyid finds reference by ID
// i not found null
// //elementby id is faster
