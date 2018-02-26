<?php
require_once 'models.php';

// class model to replicate table in database 
    
            
Class StudentCourseModel extends Model implements JsonSerializable{

private $id_student;
private $id_course;

function __construct($params) 
{
   $this->tableName =`school_relation`;
   $this->Rows=array("id_student","id_course");
   if(array_key_exists("student_id",$params))$this->id_student = $params["student_id"];
   if(array_key_exists("courses",$params))$this->id_course= $params["courses"];
  
 }


public function getStudentID()
{
    return $this->id_student;
}

public function getCourseID()
{
    return $this->id_course;
}


function jsonSerialize(){
    return[
       "Student_student_id"=>$this->id_student,
       "Course_course_id"=>$this->id_courseID
        ];
}
}


?>