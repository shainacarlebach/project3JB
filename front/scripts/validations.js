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


    


