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
