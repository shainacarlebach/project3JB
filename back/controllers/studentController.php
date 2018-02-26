<?php

require_once 'controller.php';
require_once '../models/studentModels.php';
require_once '../common/bl.php';

class StudentController extends Controller{
       private $tableName='school_students';
       private $model;



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

// Creates a new row in a table
function CreateRowinStudents() {
    $bl= new BL();
    $m= new StudentModel($param);
    $rows = $m->getRows();
    $data = $this->createNewRow($rows, $m);
    $newrowsinserted = $bl->Insert('school_students',$data[0], $data[1],$data[2]);
     if($newrowsinserted == true){ return true;
     }else{
         return false;
     }
 }
// get the courses student enrolled by student id
function getCoursesPerStudent($params) {
    $bl=new BL();
    $studentCoursesArray = array();
    $column_names ='student_id, student_name,student_phone,student_email,student_image';
    $table1=`school_students`;
    $table2=`school_relation`;
    $table3=`school_courses`;
    $table1.$table1_id=`school_students.student_id`;
    $table2.$table2_id = `school_relation.id_student`;
    $table3.$table3_id= `school_courses.course_id`;
    $table2.$table2_id2 = `school_relation.id_course`;
    
  //"SELECT ".$column_names." FROM ".$table1." 
	//INNER JOIN ".$table2." ON ".$table2.$table2_id."=".$table1.$table1_id."
	//INNER JOIN ".$table3." ON ".$table2.$table2_id2."=".$table3.$table3_id."  ";; 
    $coursesforstudent=$bl->jointhreetables($column_names,$table1,$table2,$table3,
    $table1.$table1_id,$table2.$table2_id,$table3.$table3_id,$table2.$table2_id2);
    foreach($coursesforstudent as $row){
        $students= new StudentModel ($row);
    array_push($studentCoursesArray,$students->jsonSerialize());
    }
    return $studentCoursesArray;
    }


// Get all students to display to client       

function getAllStudents(){
$bl = new BL();	
$studentsArray=array();	
$allstudents=$bl->getAllTable($this->tableName);
foreach($allstudents as $row){
	$students= new StudentModel ($row);
array_push($studentsArray,$students->jsonSerialize());
}
return $studentsArray;
}



//check if id exists and retrieve student
function getStudentById() {
       $bl=new BL();
       $m= new StudentModel($param);
       if($m->getID()!='null'||$m->getID()!='Nan'){
       $sid=$bl-> get_ID_DB('school_students',$m->getID());
       return $sid; 
       }
    }
    
 
//get all courses to put in student info temp
function getAllCourses(){
    $bl = new BL();	
    $list=$bl->getAllTable('school_students');
    $courseSelect="option value='Select a course'>Select a Course</option>";	
     
    for($i=0;i<count($list);$i++){
    $courseSelect.="<optionvalue=".$list[i]["student_id"].">".$list[i]["student_name"]."</option>";    
        }
    return $courseSelect;
    }
    
       
      function getLastId() {
            $bl= new BL(); 
            $laststudentId=$bl->lastInsertedId('school_students');
            return $laststudentId;
        }      
//deletes student from system
      
 function DeleteStudent(){
     $bl=new BL();
     $m =new StudentModel($param);
     if($m->getID()!='false'){
     $deletedStudent=$bl-> deleteData($this->tableName,$m->getID());
     if($deletedStudent == true){ return true;
     }else{
         return false;
     }
 }       
 } 

 //updates student
    function UpdateStudent(){
        $bl=new BL();
        $m =new StudentModel($param);
        if($m->getID()!='null'||$m->getID()!='Nan'){
            $updateStudent="student_name='".$m->getName()."',student_phone='".$m->getPhone()."',email='".$m->getEmail()."',
            student_image='".$m->getImage()."'";
         $updatedStudent=$bl->updateData($this->tableName,$m->getID(),$updateStudent);
         if($updatedStudent == true){
          return true;
         }else{
             return false;
         }
     }   
}


}
?>