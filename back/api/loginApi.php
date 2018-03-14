
<?php
require_once '../controllers/loginController.php';
require_once '../common/session.php';
require_once '../models/administratorModel.php';

//request from client

$loginParams = $_REQUEST['loginArray'];
    
if (!isset($loginParams['username']) || !isset($loginParams['password'])) {
  echo "Please fill in username and password";
}else{ 
    
   $username = $loginParams['username'];
  $password = $loginParams['password'];
   $login = new LoginController();
   $loginUser = $login->getUserDB('school_admin',$username, $password);
   
   
   if($loginUser == false) {
       echo json_encode("Username or password is incorrect.");
       $_SESSION['loggedin'] = false;
       
   }else{
       $_SESSION['loggedin'] = true;
    
       $_SESSION['role'] = $loginUser;
      
       echo json_encode($loginUser);
   }
}
   ?>
    


