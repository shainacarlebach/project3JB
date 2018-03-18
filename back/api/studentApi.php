
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
           $newStudent= $this->controller->CreateStudent($params);
           $get_new_row =  $this->controller->getLastId();
           $new_id = $get_new_row[0]['student_id'];
            if (array_key_exists('student_courses',$params)){
            $newcourses =$params['school_courses'];
            $c= new CourseController($params);
           $c->addCourse($newcourses,$newID);    
           if ($newStudent==true){
              return $get_new_row;
        }
    }
}
        function getLastId() {
            $bl= new BL(); 
            $newId=$bl->lastInsertedId('school_students');
            return $newId;
        }          

//get all students or one student by id
        function Read($params) {
                            
             if (array_key_exists("student_id", $params)) {
                              
               $student = $this->controller->getStudentById($params);
              return json_encode($student);
            }
            if(array_key_exists("new_id", $params)){
                $get_new_row =  $this->controller->getLastId();
                $new_id = $get_new_row[0]['student_id'];
                return json_encode($new_id);    
            }
            
      else {    $students=$this->controller->getAllStudents();
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
  //  $courses = new CourseController($params); //get all courses for student and delete them first
    //$stuOldCourses = $courses->getCoursesInnerJoin($params);
   // $deleteCourses = $courses->RemoveCourses($stuOldCourses, $params["id"]);
     //   if($deleteCourses){ //delete the student
  $deleteStudent = $this->controller->DeleteStudent($params);
               return $deleteStudent;
           }
           
                         
  }
?>