
<?php
require_once 'models.php';
require_once '../common/validation.php';

//class model to add rows in to DB course table    
            
Class StudentModel extends Model implements JsonSerializable{

private $student_id;
private $student_name;
private $student_email;
private $student_phone;
private $student_image;
private $student_courses;

//construct array as params 
function __construct($params) 
{
 if(array_key_exists("student_id",$params)) $this->student_id = $params["student_id"];
  if(array_key_exists("student_name",$params)) $this->student_name = $params["student_name"];
  if(array_key_exists("student_phone",$params)) $this->student_phone = $params["student_phone"];
  if(array_key_exists("student_email",$params))   $this->student_email = $params["student_email"];
  if(array_key_exists("student_image",$params))   $this->student_image = $params["student_image"];
  } 

public function setID(){
    $validations=new Validation();
    if($validation->NotNull($student_id)&& ($validation->isNumber($student_id))){
    $this->student_id=$student_id;
}
}
public function getID(){
  return $this ->student_id; 
  
}
public function setName($student_name){
    $validations = new Validation();
    if ($validations->validateName($student_name)){
           $this->student_name = $student_name;
}
}
function getName(){
      return $this->student_name;

}
public function setPhone($student_phone){
    $validations = new Validation();
    if ($validations->validatePhone($student_phone)){
        $this->student_phone = $student_phone;
    }
}
function getPhone(){
   return $this->student_phone;
}

function setEmail($student_email){
    $validations = new Validation();
     if ($validations->validateEmail($student_email)){
            $this->student_email = $student_email;
}
}


function getEmail()
{     return $this->student_email;
}


function getImage()
{
    return $this->student_image;
 }


function jsonSerialize(){
    return[

        'student_id'=>$this->getID(),
        'student_name'=>$this->getName(),
        'student_phone'=>$this->getPhone(),  
        'student_email'=>$this->getEmail(),
        'student_image'=>$this->getImage()
    ];
       
}
}

?>




