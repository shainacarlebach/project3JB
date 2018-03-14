
<?php
    class Validation { 
        public function NotNull($value) {
            if($value == '')
            {
                return false;
            }
            return true;
        }
        public function isNumber($value) {
            if(!ctype_digit($value))
            {
                return false;
            }
            return true;
        }
        public function validateName($student_name){
        $student_name = test_input("student_name");
        return preg_match("/^[a-zA-Z ]*$/",$student_name);
    }
      public function validateDescription($course_description){
        return  preg_match("/^[a-zA-Z]+$/", $course_description); 
       }  
      public function validateEmail($student_email){
        return filter_var($student_email, FILTER_VALIDATE_EMAIL);
             }          
      
      public function validatePhone($student_phone){
      }
    }
?>