<<<<<<< HEAD
<?php
require_once "controller.php";
require_once '../models/studentCourseModel.php';
require_once '../common/bl.php';

class StudentCourseController extends Controller {
    private $tableName='school_relation';

// fetch rows db table, each row stored array offset starting from 0.
function createNewRow($rows, $model){
    $m= new StudentModel($param);
    $column="";
    $values="";
    $insertedobjects = array();

        for($i=0; $i<count($rows); $i++) {
            if (count($rows) != $i+1) { 
            $column .= $rows[$i] . ", ";
            $values .= ":" .$rows[$i] . ", ";
            $obj = 'obj' . $rows[$i];
            $putobj = $m->{$obj}();
            $insertedobjects[$rows[$i]] = $putobj;
            }
            else {
            $column .= $rows[$i];
            $values .= ":" . $rows[$i];
            $obj = 'obj' . $rows[$i];
            $putobj = $m->{$obj}();
            $insertedobjects[$rows[$i]] = $putobj;
            }
        }
    return [$column, $values, $insertedobjects];
    }   
            
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

 // Creates a new line in a table
 function CreatenewCoursesRow() {
    $m= new StudentCourseModel($param);
    $rows = $m->getRows();
    $data = $this->createNewRow($rows, $m);
    $inserted = $bl->Insert(`school_relation`,$data[0], $data[1], $data[2]);
    if($newrowsinserted == true){
         return true;
    }else{
        return false;
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
=======
<?php
require_once "controller.php";
require_once '../models/studentCourseModel.php';
require_once '../common/bl.php';

class StudentCourseController extends Controller {
    private $tableName='school_relation';

// fetch rows db table, each row stored array offset starting from 0.
function createNewRow($rows, $model){
    $m= new StudentModel($param);
    $column="";
    $values="";
    $insertedobjects = array();

        for($i=0; $i<count($rows); $i++) {
            if (count($rows) != $i+1) { 
            $column .= $rows[$i] . ", ";
            $values .= ":" .$rows[$i] . ", ";
            $obj = 'obj' . $rows[$i];
            $putobj = $m->{$obj}();
            $insertedobjects[$rows[$i]] = $putobj;
            }
            else {
            $column .= $rows[$i];
            $values .= ":" . $rows[$i];
            $obj = 'obj' . $rows[$i];
            $putobj = $m->{$obj}();
            $insertedobjects[$rows[$i]] = $putobj;
            }
        }
    return [$column, $values, $insertedobjects];
    }   
            
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

 // Creates a new line in a table
 function CreatenewCoursesRow() {
    $m= new StudentCourseModel($param);
    $rows = $m->getRows();
    $data = $this->createNewRow($rows, $m);
    $inserted = $bl->Insert(`school_relation`,$data[0], $data[1], $data[2]);
    if($newrowsinserted == true){
         return true;
    }else{
        return false;
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
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
?>