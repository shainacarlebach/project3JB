<?php
require_once 'models.php';
require_once '../common/bl.php';
require_once '../common/validation.php';

//class model to add rows in to DB course table    
            
Class StudentModel extends Model implements JsonSerializable{

//private $idNum;
private $student_id;
private $student_name;
private $student_email;
private $student_phone;
private $student_image;
private $validation;

//construct array as params to add to course table
function __construct($params) 
{
//$this->tableName =`school_courses`;
  // $this->Rows = array ("student_name","student_email","student_phone","student_image");
  $this->tableName =`school_students`;
  $this->validation= new Validation;
 // if(array_key_exists("student_id",$params)) $this->idNum = $params["student_id"];
  
  if(array_key_exists("student_id",$params)) $this->student_id = $params["student_id"];
  if(array_key_exists("student_name",$params)) $this->student_name = $params["student_name"];
  if(array_key_exists("student_phone",$params)) $this->student_phone = $params["student_phone"];
  if(array_key_exists("student_email",$params))   $this->student_email = $params["student_email"];
   if(array_key_exists("student_image",$params))   $this->student_image = $params["student_image"];
   
}

public function getID(){
  
 return $this ->student_id; 
   // return $this->idNum;
}


function getName(){
 
      return $this->student_name;
}

function getPhone()
{ 
    
    return $this->student_phone;
}


function getEmail()
{ 
    return $this->student_email;

}
function getImage()
{
    return $this->student_image;
 }

function jsonSerialize(){
    return[
       //"Student_student_id"=>$this->idNum,
       //"Student_student_name"=>$this->student_name,
       //"Student_student_phone"=>$this->student_phone,
       //"Student_student_email"=>$this->student_email, 
       //"Student_student_image"=>$this->student_image
        'student_id'=>$this->getID(),
        'student_name'=>$this->getName(),
        'student_phone'=>$this->getPhone(),  
        'student_email'=>$this->getEmail(),
        'student_image'=>$this->getImage()   
    ];
}
}


?>