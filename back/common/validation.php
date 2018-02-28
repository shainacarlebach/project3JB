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
