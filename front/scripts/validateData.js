<<<<<<< HEAD
var validate = {
    // clears the error when user types a new value
    emptyError: $("input").change(function() {
        $("#result").html("");
    }),
    // checks if the field is not empty
    NotEmpty: function(inputtxt) {
        if ((inputtxt == "") || (inputtxt == undefined)) {
            return false;
        }
    },

    // Validation for name input
    ValidateName: function(name) {
        var pattern =/^[a-zA-Z]+$/;
        if (this.NotEmpty(name) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!pattern.test(name)) {
            alert("The field contains invalid characters, only letters or numbers must be entered!");
            return false;

        } else {
            return true;
        }
    },

    // Validation for id input
    ValidateId: function(id) {
        if (this.NotEmpty(id) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (isNaN(id)) {
            alert("the id can contian only numbers!");
            return false;

        } else {
            return true;
        }
    },
    // Validation for phone input
    ValidatePhone: function(phone) {
        var phonepattern =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (this.NotEmpty(phone) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!phonepattern.test(phone)) {
            alert("phone can contian only numbers!");
            return false;

        } else {
            return true;
        }
    },
    ValidateEmail:function(email){
        var emailpattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.NotEmpty(phone) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!emailpattern.test(email)) {
            alert("email not valid!");
            return false;

        } else {
            return true;
        }
    }
=======
var validate = {
    // clears the error when user types a new value
    emptyError: $("input").change(function() {
        $("#result").html("");
    }),
    // checks if the field is not empty
    NotEmpty: function(inputtxt) {
        if ((inputtxt == "") || (inputtxt == undefined)) {
            return false;
        }
    },

    // Validation for name input
    ValidateName: function(name) {
        var pattern =/^[a-zA-Z]+$/;
        if (this.NotEmpty(name) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!pattern.test(name)) {
            alert("The field contains invalid characters, only letters or numbers must be entered!");
            return false;

        } else {
            return true;
        }
    },

    // Validation for id input
    ValidateId: function(id) {
        if (this.NotEmpty(id) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (isNaN(id)) {
            alert("the id can contian only numbers!");
            return false;

        } else {
            return true;
        }
    },
    // Validation for phone input
    ValidatePhone: function(phone) {
        var phonepattern =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (this.NotEmpty(phone) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!phonepattern.test(phone)) {
            alert("phone can contian only numbers!");
            return false;

        } else {
            return true;
        }
    },
    ValidateEmail:function(email){
        var emailpattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.NotEmpty(phone) == false) {
            alert("You must fill all input fields!");
            return false;

        } else if (!emailpattern.test(email)) {
            alert("email not valid!");
            return false;

        } else {
            return true;
        }
    }
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
}