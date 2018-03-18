"use strict";
$(document).on("change", "#inputimage", function (e) {
        checkfile(this);
});
function checkfile(file) {
    readURL(file);
}

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#croppedimage").attr("src", e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
    
}
$(document).on("change", "#inputimage", function(e) {
    let image = $("#inputimage").prop("files")[0];
      uploadFile(image);

});

//sends file to server 
function uploadFile(image) {
  
    let formData = new FormData();
     formData.append("file", image);

    sendFiletoServer(formData, function (fileresult) {
                console.log(fileresult);
       
    });
}


