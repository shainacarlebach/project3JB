<?php

$fileError= $_FILES['file']['error'];
if( 0 < $fileError){
  echo json_encode("failed to upload file");
}
else{
//check file size and if ok save file in uploads and return new file name
  if($_FILES['file']['size'] <= 1000000) { 
    $temp = explode(".", $_FILES["file"]["name"]);
 // $newfilename = round(microtime(true)) . '.' . end($temp);
 $newfilename=$_FILES["file"]["name"];
move_uploaded_file($_FILES['file']['tmp_name'],'../../uploads/'.  $newfilename);
echo json_encode([true, $newfilename]) ;
} else{
  echo json_encode("file too large") ;
    
}
}
?>
