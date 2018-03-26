
<?php
require_once 'models.php';
// class model to replicate table in database 
    
Class StudentCourseModel extends Model implements JsonSerializable{

private $id_student;
private $id_course;

function __construct($params) 
{
   $this->tableName =`school_relation`;
    if(array_key_exists("id_student",$params))$this->id_student = $params["id_student"];
   if(array_key_exists("id_course",$params))$this->id_course= $params["id_course"];
  
 }

 public function setSTUDENTID(){
    $validations=new Validation();
    if($validation->NotNull($id_student)&& ($validation->isNumber($id_student))){
    $this->id_student=$id_student;
}
}
public function getStudentID()
{
    return $this->id_student;
}

public function setCOURSEID(){
    $validations=new Validation();
    if($validation->NotNull($id_course)&& ($validation->isNumber($id_course))){
    $this->id_course=$id_course;
}
}
public function getCourseID()
{
    return $this->id_course;
}


function jsonSerialize(){
    return[
       "id_student"=>$this->id_student,
       "id_course"=>$this->id_course
        ];
}
}
?>