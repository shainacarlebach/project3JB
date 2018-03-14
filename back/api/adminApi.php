<?php
    require_once 'abstractApi.php';
    require_once 'api.php';
    require_once '../controllers/adminController.php';
    
    class AdminApi extends Api{
        private $loginRole; //owner,manager,sales
        
        
                function __construct($params) {
                     $this->loginRole=$loginRole;
                }
        //create new admin
            function Create($params) {
                $a = new AdminController;
                $a->addAdmin($params,$adminpermission);
                return $a;
            }
            
               
         // get all Adminss or check if  id exists
        function Read($params) {
            $a = new AdminController;
             if (array_key_exists("admin_id", $params)) {
                $oneAdministrator = $a->getAdminById();
                return $oneAdministrator;
            }
            else {
                
                switch ($adminpermission){
                case 'owner':
                    return [$a->getAllAdmin(), $adminpermission];
                     
                break;
                
                case 'manager':
                    return [$a->getAllbesidesOwner(), $adminpermission];
                break;
                
                case 'sales':
                return 'No permission!';
                break;
                }
            }
        } 
        // Update Admin
        function Update($params){
             
            $admininistrators =$a->UpdateAdmin($adminpermission);
            return $admininistrators;
            }
            
        //  Delete  Admin   
         function Delete($params) {
                        
            $Admins = $this->controller->DeleteAdminById($mypermission);
            return $Admins;
            
        }
    }
?>
    
