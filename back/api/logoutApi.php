<?php
	session_start();
	unset($_SESSION['role']);	
	if(session_destroy()) {
		header("Location: index.html");
	}
?>