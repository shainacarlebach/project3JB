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

//sends file to server before cropping
function uploadFile(image) {
   // let image = $("#inputimage").prop("files")[0];

    let formData = new FormData();
     formData.append("file", image);

    sendFiletoServer(formData, function (fileresult) {
      //  if (fileresult[0] === true) {

        //    $("#croppedimage").attr("src", "uploads/" + fileresult[1]);
          //  $("#croppedimage").data("name", fileresult[1]);
            //let imageTop = $("#croppedimage").position().top;
           // let imageLeft = $("#croppedimage").position().left;
           // $("#crop_tool").css("top", imageTop).css("left", imageLeft);
           // $("#crop_tool").resizable({ containmet: "parent" });
           // $("#crop_tool").draggable({ containmet: "parent" });
        //} else {
           console.log(fileresult);
        //}

    });
}

//change original size image to new image with different dimensions    
//function getImageCropSize(callback) {
  //  let image_name = $("#croppedimage").data("name");
    //let orginalImageTop = $("#croppedimage").position().top;
    //let orginalImageLeft = $("#croppedimage").position().left;
    //let newImageTop = $("#crop_tool").position().top;
    //let newImageLeft = $("#crop_tool").position().left;

    //orginalImageTop.toFixed();
    //orginalImageLeft.toFixed();
    //newImageTop.toFixed();
    //newImageLeft.toFixed();

    //let cropStartY = newImageLeft - orginalImageLeft;
    //let cropStartX = newImageTop - orginalImageTop;

    //let newImageWidth = parseInt($("#crop_tool").width());
    //let newImageHeight = parseInt($("#crop_tool").height());

    //newImageWidth.toFixed();
    //newImageHeight.toFixed();

    //let cropSizes = {
      //  start_x: cropStartY * 3,
       // start_y: cropStartX * 3,
       // width: newImageWidth * 3,
        //height: newImageHeight * 3,
       // name: image_name
   // }
    //callback(cropSizes);
//}


