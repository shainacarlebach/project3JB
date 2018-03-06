<<<<<<< HEAD
<?php
require_once 'controller.php';
require_once '../models/administratorModel.php';
require_once '../common/bl.php';
require_once '../common/passwordHandler.php';

class AdminController extends Controller{
    private $tableName ='school_admin';
    private $model;  
      
    function getAllAdministrators(){
        $bl = new BL();	
        $adminArray=array();
         
        $column_names='admin_id,username,admin_phone,admin_email,password,admin_image,role_id'; 
        $table1= 'school_admin';
        $table2='school_role';
        $table1.$column_name='role_id';
        $table2.$column_name ='role';

        $tablejoin = $this->bl->innerJoin($column_names, $table1,$table2,$column_name);
        for($i=0; $i<count($tablejoin); $i++) {
            $m = new AdminModel($tablejoin[$i]);
            array_push($adminArray, $m->jsonSerialize());
        }
        return $adminArray;   
    } 
       // get admin by id 
     function getAdminById($param) {
        $bl=new BL(); 
        
        $adminRow=$bl->get_ID_DB($this->tableName);
        return $adminRow;
        
}
/// Creates a new administrator
function AddAdmin($param) {
    $bl=new BL();
    
}
}
?>    



=======
<?php
require_once 'controller.php';
require_once '../models/administratorModel.php';
require_once '../common/bl.php';
require_once '../common/passwordHandler.php';

class AdminController extends Controller{
    private $tableName ='school_admin';
    private $model;  
      
    function getAllAdministrators(){
        $bl = new BL();	
        $adminArray=array();
         
        $column_names='admin_id,username,admin_phone,admin_email,password,admin_image,role_id'; 
        $table1= 'school_admin';
        $table2='school_role';
        $table1.$column_name='role_id';
        $table2.$column_name ='role';

        $tablejoin = $this->bl->innerJoin($column_names, $table1,$table2,$column_name);
        for($i=0; $i<count($tablejoin); $i++) {
            $m = new AdminModel($tablejoin[$i]);
            array_push($adminArray, $m->jsonSerialize());
        }
        return $adminArray;   
    } 
       // get admin by id 
     function getAdminById($param) {
        $bl=new BL(); 
        
        $adminRow=$bl->get_ID_DB($this->tableName);
        return $adminRow;
        
}
/// Creates a new administrator
function AddAdmin($param) {
    $bl=new BL();
    
}
}
?>    



>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
