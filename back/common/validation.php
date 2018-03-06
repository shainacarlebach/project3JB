<<<<<<< HEAD
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
        return preg_match("/[0-9]{9-10}/", $student_phone);
      }
    }
=======
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
     
      public function validateDescription($course_description){
        return  preg_match("/^[a-zA-Z]+$/", $course_description); 
       }  
      public function validateEmail($student_email){
        $testemail =  preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i", $student_email);
        return   $testemail;
      }          
      
      public function validatePhone($student_phone){
        return preg_match("/[0-9]{9-10}/", $student_phone);
      }
    }
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
