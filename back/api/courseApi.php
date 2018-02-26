<?php
    require_once 'abstractApi.php';
    require_once '../controllers/studentController.php';
    require_once '../controllers/courseController.php';
    require_once '../common/session.php';
    require_once '../models/administratorModel.php';
    
    class CourseApi extends Api{
      
    //create new course
        function Create($params) {
            if ($loginRole!="sales"){
            $c=new CourseController;
            $newCourse=$c->addCourse();
            return $newCourse;
             } else {
                return 'Sorry you cannot add a new course!';                        
             }
       }
       
     //retrieve all courses from db
       function Read($params) {
            $c = new CourseController;
            $courses=$c->getAllCourses();
            if (array_key_exists("course_id", $params)) {
                $course = $c->getCourseById($params["course_id"]);
                return json_encode($course, JSON_PRETTY_PRINT);
            }
            else {
                return $courses;
            }
        }
//update a course
         function Update($params) {
             if($loginRole!="sales"){
            $c=new CourseController;
            $updatedCourse=$c->UpdateCourse();
           return $updatedCourse; 
         }
        else{
            return 'Sorry you cannot update a course!';
        }  
        
    }
  //deletes a course,returns message      
         function Delete($params) {
            if($loginRole!="sales"){
                $c=new CourseController; 
                $wasdeleted=$c->deleteCourse();
                return $wasdeleted;
         }
         else{
            'Sorry you cannot update a course!'; 
         }
    }
}
?>
