<?php

 class CropImageController{
     private $image;
     
     function __construct($image){
         $this->image = $image;
     }

     function CropImage(){


        $name = $this->image['name'];
     //x-axis=o, y_axis=0
        $x_axis = $this->image['start_x'];
        $y_axis = $this->image['start_y'];
        $height = $this->image['height'];
        $width = $this->image['width'];

        $image_type = getimagesize("../../uploads/$name");
        if($image_type['mime'] == "image/jpeg"){
            $image1 =imagecreatefromjpeg("../../uploads/$name");
        }else{
            $image1 =imagecreatefrompng("../../uploads/$name");
        }

$size = min(imagesx($image1), imagesy($image1));
$image2 = imagecrop($image1, ['x' => $x_axis, 'y' => $y_axis, 'width' => $width, 'height' => $height]);
if ($image2 !== FALSE) {
    $image_type = getimagesize("../../uploads/$name");
            if($image_type['mime'] == "image/jpeg"){
                imagejpeg($image2, "../../uploads/C_$name");
            }else{
                imagepng($image2, "../../uploads/C_$name");
            }
    
    $deleteOriginal="../../uploads/$name";
    unlink($deleteOriginal);
    return [true, "C_".$name];
} else {
    return  "Error cropping image!";
}
}
}
?>
        
     