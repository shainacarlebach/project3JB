
"use strict";

function sendFiletoServer(data, callback){
  $.ajax({
    dataType: "text",// what to expect back from the PHP script, if anything
    url: "back/api/fileUploads.php", // point to server-side PHP script 
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    type: "POST",
    success: function(response) {
        callback(JSON.parse(response));
    }
});
}


function sendAjax(url, data, method,callback ) { 
$.ajax({
    url: url,
    data: { 
      activitiesArray: data
     },
    type: method,
    success: function (response) {
        callback(JSON.parse(response))
         }
     });
}

function sendFileToCrop(image_sizes, callback) {
  $.ajax({

      type: "POST",
      url: "back/api/cropAPI.php",
      data: { activitiesArray: image_sizes },
      success: function(cropresult) {
          callback(JSON.parse(cropresult));
      }
  });
}