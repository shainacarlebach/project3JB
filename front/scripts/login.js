<<<<<<< HEAD
"use strict";
// Get the modal login page
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "block";
	}
}

var loginModule = function () {
	//send ajax request to server
	return {
		login: function (user, successCallback, error) {
			$.ajax({
				type: 'POST',
				url: 'back/api/loginAPI.php',
				cache: false,
				data: { loginArray: user },
				success: function (result) {
					successCallback(JSON.parse(result));//direct user to page based on role 
					
				},
				error: function (jqXHR, exception) {
					var msg = '';
					if (jqXHR.status === 0) {
						msg = ' could not connect to server!.'
					}
				}
			})
		}
	}
};




=======
"use strict";
// Get the modal login page
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "block";
	}
}

var loginModule = function () {
	//send ajax request to server
	return {
		login: function (user, successCallback, error) {
			$.ajax({
				type: 'POST',
				url: 'back/api/loginAPI.php',
				cache: false,
				data: { loginArray: user },
				success: function (result) {
					successCallback(JSON.parse(result));//direct user to page based on role 
					
				},
				error: function (jqXHR, exception) {
					var msg = '';
					if (jqXHR.status === 0) {
						msg = ' could not connect to server!.'
					}
				}
			})
		}
	}
};




>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
