<?php
require_once 'controller.php';
require_once '../models/administratorModel.php';
require_once '../common/bl.php';
require_once '../common/passwordHandler.php';
 
class LoginController extends Controller{
    private $tableName ='school_admin';
    
//verify username
public function is_valid_username($username){   
       // accepted username letters only
    if( !empty ($username) && preg_match(' /^[a-zA-Z]+$/', $username)){
            return true;         
          }
        else{
            return false;
    }
}
    
    //get user from DB
    public function getUserDB($tableName,$username,$password) {
        //verify password
       $loginPassword= new PasswordHandler();
       $Password= $loginPassword->getHash($password);
       $Username=$this->is_valid_username($username);
       $bl=new BL(); 
        //bring one object from indexed array
       $loginuser= $bl->getUser('school_admin',$username,$password);
       
          return $loginuser;     
     }
    }  
        
?>        
  
  