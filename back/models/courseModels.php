<?php
require_once 'models.php';
require_once '../common/dal.php';
//class model to replicate table in DB

Class CourseModel extends Model implements JsonSerializable{

//private $idNum;
private $course_id;
private $course_name;
private $course_description;
private $course_image;

function __construct($params) 
{
   $this->tableName =`school_courses`; //check to see if key exists, if not creates it
  // $this->Rows=array("course_name","course_description","course_image");
  // if(array_key_exists("course_id",$params)) $this->idNum = $params["course_id"];
  $this->course_id= $params["course_id"];
   //if(array_key_exists("course_name",$params))
   $this->course_name = $params["course_name"];
  // if(array_key_exists("course_description",$params))
  $this->course_description = $params["course_description"];
   //if(array_key_exists("course_image",$params))
   $this->course_image = $params["course_image"];
   
}
 
public function getID()
{ return $this->course_id;
   // return $this->idNum;
}

function getName()
{
    return $this->course_name;
}
function getDescription()
{
    return $this->course_description;
}
function getImage()
{
    return $this->course_image;
 }

function jsonSerialize(){
    return[
      // "Course_course_id"=>$this->idNum,
      // "Course_course_name"=>$this->course_name,
      // "Course_course_description"=>$this->course_description, 
       //"Course_course_image"=>$this->course_image
       'course_id'=> $this->getID(),
       'course_name'=> $this->getName(),
       'course_description'=>$this->getDescription(),
       'course_image'=>$this->getImage()
                  ];
}

}
?>
