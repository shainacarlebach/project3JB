<?php
    require_once '../controllers/studentController.php';
    require_once '../controllers/studentCourseController.php';

if (isset($_REQUEST['student_id'])) {
                        $id = $_REQUEST['student_id'];
    $s= new StudentController($params);                    
                $student = $s->getStudentById();
              return json_encode($student);
}
 ?>