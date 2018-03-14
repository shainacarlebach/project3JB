<?php
     require_once '../controllers/cropImageController.php';
     
if (!isset($_REQUEST['activitiesArray'])){
        echo json_encode("Failed to load image");
    } else {
            $image = $_REQUEST['activitiesArray'];
            $c = new CropImageController($image);
            $cropped = $c->CropImage();
            echo json_encode($cropped);  
    }
  ?>  
