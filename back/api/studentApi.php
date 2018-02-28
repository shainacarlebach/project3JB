<?php
    require_once 'abstractApi.php';
    require_once 'api.php';
    require_once '../controllers/studentController.php';
    require_once '../controllers/studentCourseController.php';


    class StudentApi extends Api{
     private $controller;
     private $studentCourseController;

     function __construct(){
         $this->controller= new StudentController($params);
         $this->studentcoursecontroller= new StudentCourseController($params);
     }

       
    //create new student and  new courses enrolled in
        function Create($params) {
            $this->controller->CreateRowinStudents($params);
           $obj_new_row=$this->controller->getLastId();
            $new_id =$obj_new_row[0]['student_id'];
            if (array_key_exists('courses',$params)){
            $newcourses =$params['school_courses'];
            $c= new CourseController($params);
            $c->addCourse($newcourses,$newID);    
            }
            return [true, $newID];
        }
        

//get all students or one student by id
        function Read($params) {
                 
                
             if (array_key_exists("student_id", $params)) {
             //  if (array_key_exists("inner", $params)) {
               //    $allcoursesforstudent = $this->controller->getCoursesPerStudent($params);
                 //  return $allcoursesforstudent;
                  //} else {
                  //  if (isset($_REQUEST['student_id'])) {
                    //    $id = $_REQUEST['student_id'];
                         
               $student = $this->controller->getStudentById($params);
              return json_encode($student);
            }
        
           else {
                     $students=$this->controller->getAllStudents();
                           return $students;
               }
                }

        //updates student        
 function Update($params) {
     if(!array_key_exists('school_courses',$params)){
         $params['school_courses']= [];
     }
     $c = new CoursesController($params);
    $currentcourses = $c->joinTables($params);
    $updatedStudent =$this->controller->UpdateStudent();
    return $updatedStudent;
    }    
                        
    //deletes a student
 function Delete($params) {
  $c =new CourseController($params);
  $currentcourses = $c->joinTables($params);
  $deleteCourses=  $c->DeleteCourses($currentcourses,$params["course_id"]);
  if($deleteCourses){
               $student = $this->controller->DeleteStudent();
               return $student;
         }
         else{
             return "Unable to delete student";
         }
           
        }                  
  }
?>