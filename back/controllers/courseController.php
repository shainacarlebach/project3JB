<?php

require_once "controller.php";
require_once '../models/courseModels.php';
require_once '../common/bl.php';

class CourseController extends Controller {
    private $tableName='school_courses';
   

//get all courses for school
function getAllCourses(){
$bl = new BL();	
$coursesArray=array();	
$allCourses=$bl->getAllTable($this->tableName);
foreach($allCourses as $row){
$courses= new CourseModel($row);
array_push($coursesArray,$courses->jsonSerialize());
}
return $coursesArray;
}
}

 //get one course 
function getCourseById(){
 $bl=new BL();
 $m= new CourseModel($param);
 $m->getID();
 if($m->getID()!='null'||$m->getID()!='Nan'){
 $cid=$bl-> get_ID_DB($this->tableName,$m->getID());
 return $cid; 
    }
 }

 //check if id exists
 function check_course_id(){
 $bl=new BL();
 $m= new CourseModel($param);
 $m->getID();
 if($m->getID()!='null'||$m->getID()!='Nan'){
 $course_id=$bl->validate_id($this->tableName,$m->getID());
 return true;
  }else{
 return false;
  }

 //add a new course    
function addCourse($params){
  $bl=new BL();
  $m= new CourseModel($param);
  if($m->getID()!='null'||$m->getID()!='Nan'){
  $fields="course_name,course_description,course_image";
  $values= ":course_name,:course_description,:course_image";
  $insertedobjects=array(              
                  "course_name"=>getName(),
                  "course_description"=>getDescription(), 
                  "course_image"=>getImage()
                         );
                  
 $newCourse = $bl->Insert('school_courses',$fields,$values,$insertedobjects);
 return true;
}
  else{
  return "courseID is " . $m->getID() . "courseName is " .  $m->getName();
            }
  }
   //check last id to see where to insert new course 
 function lastId($params) {
    $bl=new BL();
    $m= new CourseModel($param);
    if($m->getID()!='null'||$m->getID()!='Nan'){
        $fields="course_name,course_description,course_image";    
        $where=$bl->lastInsertedId('school_courses', $fields,$idNum);
        return $where;
    } 
    else {
        return "Where to insert?";
    }
 }      


//updates course
 function UpdateCourse($param){
  $bl=new BL();
  $m =new CourseModel($param);
       if($m->getID()!='null'||$m->getID()!='Nan' && $m->getName()!='null'){
        
            $updatedCourse= "course_name =  '".$m->getName()."', course_description = '" .$m->getDescription(). "',
             course_image = '". $m->getImage()."'";
       
    $update =  $bl->updateData(`school_courses`, $m->getID(), $updateCourse);
    return true;
  }
else{
   return " Course not updated!";
}
}

//deletes a course
function deleteCourse($param){
    $bl=new BL();
    $m =new CourseModel($param);
    if($m->getID()!='null'||$m->getID()!='Nan'){
    $deletedCourse=$bl-> deleteData($this->tableName,$m->getID());
    return true;
    }
    else{
        return " Course not deleted!";
    }       
}

//join course table with student table via relation table
 function joinTables($param){  
  $bl= new BL;
  $coursesStudentsArray=array();
  $allStudentCourses=$bl->innerJoin($table1, $table2,$fields);
    $table1 = 'school_courses';
    $table2 = 'school_students';
    $table1.$fields='course_id';
    $table2.$fields='student_id';
    foreach($allStudentCourses as $row){
        $studentcourses= new CourseModel($row);
    array_push($coursesStudentArray,$studentcourses->jsonSerialize());
    }
    return $coursesStudentArray;
}    
 }  
 ?>