<?php
require_once "controller.php";
require_once '../models/studentCourseModel.php';
require_once '../common/bl.php';

class StudentCourseController extends Controller {
    private $tableName='school_relation';
    
 
           
 // create new row in table 
 function updateRelation() {
    $bl = new BL();
    $m= new StudentCourseModel($param);
    $courses=$m->getCourseID();
    
    for($i=0; $i<count($courses); $i++) {
    $newCourses= "id_course =  '".$courses[i]."', course_name='".$m->getName()."',course_description = '" .$m->getDescription(). "',
    course_image = '". $m->getImage()."'";
    $updatedCourse = $bl->updateData('school_relation', $m->getID(),$newCourses);
    if ($updatedCourse ==true){
        return true;
    }
    else{ return false;
}
}       
 }

 
 
 function getAllCourses(){
    $bl = new BL();	
    $coursesArray=array();	
    $allCourses=$bl->getAllTable($this->tableName);
    for($i=0; i<count($allCourses); $i++){
    $courses= new CourseModel($allCourses[i]);
    array_push($coursesArray,$courses->jsonSerialize());
    }
    return $coursesArray;
    }

    function DeleteCourseByRow() {
        $bl = new BL();	
        $m=new StudentCourseModel($param);
        if($m-> getCourseID() != false){
        $rowdeleted =  $bl->deleteData(`student_relation`, 'id_course', $m->getCourseID(), 'id_student', $m->getStudentID());
        if($rowsdeleted == true){
            return true;
       }else{
           return false;
       }
    }
}
function UpdateCourseById() {
    $bl = new BL();	
    $m=new StudentCourseModel($param);  
      if($m->getCourseID() != false){
                    if($m->getName() != false) {
$updatedCourses= "course_name =  '".$m->getName()."',course_description = '" .$m->getDescription(). "', course_image = '". $m->getImage()."'";
          $newCourse =  $bl->updateData(`school_relation`, $m->getCourseID(), $updatedCourses);
          if($rowsupdated == true){
            return true;
       }else{
           return false;
       }     
  }
}
}

}


?>