<<<<<<< HEAD
<?php
    require_once 'dal.php';

    class PasswordHandler {
        private $salt;

        function __construct()
        {
            $this->salt = "myApp##";
        }
        public function getHash($password) {
        return MD5($this->salt.$password);
          }
=======
<?php
    require_once 'dal.php';

    class PasswordHandler {
        private $salt;

        function __construct()
        {
            $this->salt = "myApp##";
        }
        public function getHash($password) {
        return MD5($this->salt.$password);
          }
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
    }