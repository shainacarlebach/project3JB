<<<<<<< HEAD
<?php

    abstract Class Api {
        abstract function Create($params);
        abstract function Read($params);
        abstract function Update($params);
        abstract function Delete($params);


        public function gateway($method, $params) {
                    switch ($method) {
                        case "POST":
                            return $this->Create($params);
                        case "GET":
                            return  $this->Read($params);
                        case "PUT":
                            return $this->Update($params);
                        case "DELETE":
                            return $this->Delete($params);
                    }
        
        }
    }
=======
<?php

    abstract Class Api {
        abstract function Create($params);
        abstract function Read($params);
        abstract function Update($params);
        abstract function Delete($params);


        public function gateway($method, $params) {
                    switch ($method) {
                        case "POST":
                            return $this->Create($params);
                        case "GET":
                            return  $this->Read($params);
                        case "PUT":
                            return $this->Update($params);
                        case "DELETE":
                            return $this->Delete($params);
                    }
        
        }
    }
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
?>