(function(){
  if(!('querySelector' in document && 'addEventListener' in document)){

    return;
  }
}

// Declare variables
var signup = document.querySelector('#prizepicks-signup');
var submit = document.querySelector('#submit')

//insert all functions Here

//Functions to erase all the extra whitespace for email
function whitespace(value){
  //removes whitespace
  return value.replace(/\D/g,'');
}

//Check Email
function validate(value) {
  var email = whitespace(value);
}

function validateform(){
  var x = document.forms["prizepicks"][]
}

document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM Content Loaded');
})
