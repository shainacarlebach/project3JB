
<?php
require_once 'models.php';
require_once '../common/dal.php';
require_once '../common/passwordHandler.php';
require_once '../common/session.php';

//class model to replicate table in database
Class AdminModel extends Model implements JsonSerializable{
    
private $admin_id;
private $username;
private $admin_phone;
private $admin_email;
private $password;
private $admin_image;
private $role;//1:owner, 2:manager, 3:sales



//check to see if key exists, if not create it
function __construct($params) 
{  
    $this->tableName =`school_admin`;
    $this->admin_id = $params["admin_id"];
    $this->username = $params["username"];
    $this->admin_phone = $params["admin_phone"];
    $this->admin_email= $params["admin_email"];
    $this->password= $params["password"];
    $this->admin_image = $params["admin_image"];
    $this->role=$params["role"];
    
}
public function getID()
{
    return $this->admin_id;
}

public function getAdminName()
{
    return $this->username;
}

public function getPhone()
{
    return $this->admin_phone;
}

public function getEmail()
{
    return $this->admin_email;
}
public function getPassword()
{
    return $this->password_hash(password);
 }
 
 
public function setAdminPassword(){
    $pw= new PasswordHandler();
    $this->admin_password=$pw->getHash($password);
}

public function getImage(){
return $this->admin_image;    
}

public function getRole()
{
return $this->role;//1:owner, 2:manager,3:sales
} 

public function jsonSerialize(){
    return[
   'admin_id'=> $this->getID(),
   'username'=> $this->getAdminName(),
   'admin_phone'=>$this->getPhone(),
   'admin_email'=>$this->getEmail(),
   'password'=>$this->getPassword(),
   'admin_image'=>$this->getImage(),
   'role'=> $this->getRole()
   
      ];
   
    }
}

?>