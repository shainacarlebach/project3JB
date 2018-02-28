function sendFiletoServer(data, callback){
  $.ajax({
    dataType: "text", // what to expect back from the PHP script, if anything
    url: "back/api/fileUploads.php", // point to server-side PHP script 
    cache: false,
    contentType: false,
    processData: false,
    data: data,
    type: "POST",
    success: function(response_text) {
        callback(JSON.parse(response_text));
    }
});
}

function sendAjax(url, data, method,callback ) { 
$.ajax({
    url: url,
    data: { activitiesArray: data
     },
    type: method,
    success: function (response) {
        callback(JSON.parse(response))
         },
    error: function (jqXHR, exception) {
      var msg = '';
      if (jqXHR.status === 0) {
        msg = ' could not connect to server!.'
      }
    }
  });
}
