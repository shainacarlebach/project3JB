<<<<<<< HEAD
<?php

$fileError= $_FILES['file']['error'];
if( 0 < $fileError){
    echo json_encode("failed to upload file");
}
else{
    //check file size and if ok save file in uploads and return new file name
    if($_FILES['file']['size'] <= 1000000) { 
        $temp = explode(".", $_FILES["file"]["name"]);
        $newfilename = round(microtime(true)) . '.' . end($temp);
    move_uploaded_file($_FILES['file']['tmp_name'],'/uploads/'.$_FILES['file']['name']);
    echo json_encode([true, $newfilename]) ;
} else{
    echo json_encode("file too large") ;
    
}
}
=======
<?php

$fileError= $_FILES['file']['error'];
if( 0 < $fileError){
    echo json_encode("failed to upload file");
}
else{
    //check file size and if ok save file in uploads and return new file name
    if($_FILES['file']['size'] <= 1000000) { 
        $temp = explode(".", $_FILES["file"]["name"]);
        $newfilename = round(microtime(true)) . '.' . end($temp);
    move_uploaded_file($_FILES['file']['tmp_name'],'/uploads/'.$_FILES['file']['name']);
    echo json_encode([true, $newfilename]) ;
} else{
    echo json_encode("file too large") ;
    
}
}
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
?>