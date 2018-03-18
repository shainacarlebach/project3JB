
<?php

require_once 'controller.php';
require_once '../models/studentModels.php';
require_once '../common/bl.php';

class StudentController extends Controller{
       private $tableName='school_students';
       private $model;

       
// Create  new student in students table
function CreateStudent($params) {
    $bl= new BL();
    $s = new StudentModel($params);
    if($s->getName() != 'null' && $s->getPhone()!='null'&& $s->getEmail()!='null' && $s->getImage()!='null' ){
    $column="school_students.student_name,school_students.student_phone,school_students.student_email,school_students.student_image";
    $values=":student_name, :student_phone, :student_email,:student_image";
    $insertedobjects = array(
            "student_name"=> $s->getName(),
            "student_phone"=>$s-> getPhone(),
            "student_email"=>$s->getEmail(),
            "student_image"=> $s->getImage()
    );
    $newStudent = $bl->Insert($this->tableName, $column,$values,$insertedobjects);
    return true;
   }
   else{
       return false;
   }
}

// get the courses student enrolled by student id
  
    function getCoursesPerStudent($param) {
        $bl=new BL();
        $studentsArray = array();
        $column_names = "school_courses.course_name,school_courses.course_description,school_courses.course_image";
        $table1 = 'school_courses';
        $table3 = 'school_relation';
        $columnEqual = 'school_students.student_id = school_relation.id_student';
        $columnEqual2 = 'school_courses.course_id = school_relation.id_course';
        $where = 'school_students.student_id = ' . $param;
        // $getall = ($selected_rows, $this->table_name, $table2, $table3, $Column_equal_to, $Column_equal_to2, $where);        
        $getall = $bl->jointhreetables($column_names,$table1, 'school_students', $table3, $columnEqual, $columnEqual2,$where);//, $where);
        for($i=0; $i<count($getall); $i++) {
            $s = new StudentModel($getall[$i]);
            array_push($studentsArray, $s->jsonSerialize());
        }
        return $studentsArray;   
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
return $allstudents;
}



//check if id exists and retrieve student
function getStudentById($params) {
       $bl=new BL();
       $m= new StudentModel($params);
       if($m->getID()!='null'||$m->getID()!='Nan'){
       $sid=$bl-> get_studentID_DB('school_students',$m->getID());
    //    $courses=$this->getCoursesPerStudent($m->getID());
       return $sid; 
       }
    }
    
 
//get all courses to put in student info temp
function getAllStudentCourses(){
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
            $newId=$bl->lastInsertedId('school_students');
            return $newId;
        }      
//deletes student from system
      
 function DeleteStudent($params){
     $bl=new BL();
     $m =new StudentModel($params);
     if($m->getID()!='false'){
     $deletedStudent=$bl-> deleteData($this->tableName,$m->getID());
     if($deletedStudent == true){
          return true;
     }else{
         return false;
     }
 }       
 } 

 //updates student
    function UpdateStudent($params){
        $bl=new BL();
        $m =new StudentModel($params);
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