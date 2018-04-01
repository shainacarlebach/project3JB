
'use strict;'
function checkForm(form){

  if(form.username.value==""){
    alert("Error: Username cannot be blank!");
    form.username.focus();
    return false;
  }
  
  var name_regex = /^[a-zA-Z]+$/;
  
  if(!form.username.value.match(name_regex)) {
    alert("Error: Username must contain only letters!");
    form.username.focus();
    return false;
  }

  if(form.password.value != "" ) {
    if(form.password.value.length < 10) {
      alert("Error: Password must contain at least 10 characters!");
      form.password.focus();
      return false;
    }
    if(form.password.value == form.username.value) {
      alert("Error: Password must be different from Username!");
      form.password.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain at least 4 numbers (0-9)!");
      form.password.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain at least 3 lowercase letters (a-z)!");
      form.password.focus();
      return false;
    }
    re = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    if(!re.test(form.password.value)) {
      alert("Error: password must contain special characters!");
      form.password.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered  your password!");
    form.password.focus();
    return false;
  }
 
  alert("You entered a valid password ");
  return true;
}

function checkAddStudentForm(addStudentForm){
  console.log( $("#name").val());
  if($("#name").val()==""){
    alert("Error: name cannot be blank!");
    $("#name").focus();
    return false;
  }
 
   var name_regex =   /^[a-zA-Z]+$/;
  
  if(!name_regex.test($("#name").val())) {
    alert("Error: name must contain only letters!");
    $("#name").focus();
    return false;
  }
  if($("#phone").val()==""){
    console.log( $("#phone").val());
    alert("Error: Phone cannot be blank!");
    $("#phone").focus();
    return false;
  }
 var phone_regex=  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
 if(!phone_regex.test($("#phone").val())) {
  alert("Error: phone must contain only numbers!");
  $("#phone").focus();
  return false;
}
if($("#email").val()==""){
  console.log( $("#email").val());
  alert("Error: email cannot be blank!");
  $("#email").focus();
  return false;
}
var email_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!email_regex.test($("#email").val())) {
  alert("Error: email must contain only letters!");
  $("#email").focus();
  return false;
}
if($("#inputimage").val()==""){
  alert("Error: image must be chosen!");
  $("#inputimage").focus();
  return false;
}
if ($("#inputimage").val() > 1000000){
  alert( "File cannot be larger then 1 MB");
  $("#inputimage").focus();
  return false;
}

alert("Your input is valid! ");
return true;
}

function checkEditStudentForm(editStudentForm){
  console.log( $("#inputname").val(""));
  if($("#inputname").val()==""){
    alert("Error: name cannot be blank!");
    $("#inputname").focus();
    return false;
  }
 
   var validname_regex =   /^[a-zA-Z]+$/;
  
  if(!validname_regex.test($("#inputname").val(""))) {
    alert("Error: name must contain only letters!");
    $("#inputname").focus();
    return false;
  }
  if($("#inputphone").val()==""){
    console.log( $("#inputphone").val(""));
    alert("Error: Phone cannot be blank!");
    $("#inputphone").focus();
    return false;
  }
 var validphone_regex=  /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
 if(!phone_regex.test($("#inputphone").val(""))) {
  alert("Error: phone must contain only numbers!");
  $("#inputphone").focus();
  return false;
}
if($("#inputemail").val()==""){
  console.log( $("#inputemail").val(""));
  alert("Error: email cannot be blank!");
  $("#inputemail").focus();
  return false;
}
var validemail_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!email_regex.test($("#inputemail").val(""))) {
  alert("Error: email must contain only letters!");
  $("#inputemail").focus();
  return false;
}
if($("#inputimage").val("")==""){
  alert("Error: image must be chosen!");
  $("#inputimage").focus();
  return false;
}
if ($("#inputimage").val() > 1000000){
  alert( "File cannot be larger then 1 MB");
  $("#inputimage").focus();
  return false;
}

alert("Your input is valid! ");
return true;
}




