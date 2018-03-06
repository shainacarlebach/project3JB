<<<<<<< HEAD
<?php
	session_start();
	unset($_SESSION['role']);	
	if(session_destroy()) {
		header("Location: index.html");
	}
=======
<?php
	session_start();
	unset($_SESSION['role']);	
	if(session_destroy()) {
		header("Location: index.html");
	}
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
?>