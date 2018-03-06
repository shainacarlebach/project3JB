<<<<<<< HEAD
<?php
    require_once 'studentApi.php';
    require_once 'courseApi.php';
    require_once 'adminApi.php';
    require_once 'abstractApi.php';
    require_once '../common/session.php';
    
    $method = $_SERVER['REQUEST_METHOD']; //verb
    
    if($method==  'PUT' || $method == 'DELETE') {
        parse_str(file_get_contents("php://input"),$post_vars);
        $params = $post_vars['activitiesArray']; 
    }
    else{
    $params = $_REQUEST['activitiesArray'];
    }

   // check if logged in
    //bring method and params from loginapi  
   if ($_SESSION['loggedin'] == true) {
   $loginUser = $_SESSION['role'];
   }
   else{
    echo "please login";
   }
//direct to api depending on request    
    switch ($params['ctrl']) {
                
            
            case 'StudentApi':
            $sapi = new StudentApi($params);
            $result = $sapi->gateway($method, $params);
            echo json_encode($result);
            break;
            case 'CourseApi':
            $capi = new CourseApi($params);
            $result  = $capi->gateway($method, $params);
            echo json_encode($result);
            break;
            case 'AdminApi':
            $aapi = new AdminApi($params);
            $result = $aapi->gateway($method, $params);
            echo json_encode($result);
            break;
    }


=======
<?php
    require_once 'studentApi.php';
    require_once 'courseApi.php';
    require_once 'adminApi.php';
    require_once 'abstractApi.php';
    require_once '../common/session.php';
    
    $method = $_SERVER['REQUEST_METHOD']; //verb
    
    if($method==  'PUT' || $method == 'DELETE') {
        parse_str(file_get_contents("php://input"),$post_vars);
        $params = $post_vars['activitiesArray']; 
    }
    else{
    $params = $_REQUEST['activitiesArray'];
    }

   // check if logged in
    //bring method and params from loginapi  
   if ($_SESSION['loggedin'] == true) {
   $loginUser = $_SESSION['role'];
   }
   else{
    echo "please login";
   }
//direct to api depending on request    
    switch ($params['ctrl']) {
                
            
            case 'StudentApi':
            $sapi = new StudentApi($params);
            $result = $sapi->gateway($method, $params);
            echo json_encode($result);
            break;
            case 'CourseApi':
            $capi = new CourseApi($params);
            $result  = $capi->gateway($method, $params);
            echo json_encode($result);
            break;
            case 'AdminApi':
            $aapi = new AdminApi($params);
            $result = $aapi->gateway($method, $params);
            echo json_encode($result);
            break;
    }


>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
?>