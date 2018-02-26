"use strict"

//construct Student object to send to server with ajax
function Student(studentdata) {
  if ("ctrl" in studentdata && studentdata.ctrl) this.ctrl = studentdata.ctrl;
  if ("student_id" in studentdata && studentdata.id) this.student_id = studentdata.id;
  if ("student_name" in studentdata && studentdata.name) this.student_name = studentdata.name;
  if ("student_phone" in studentdata && studentdata.phone) this.student_phone = studentdata.phone;
  if ("student_email" in studentdata && studentdata.email) this.student_email = studentdata.email;
  if ("student_image" in studentdata && studentdata.image) this.student_image = studentdata.image;
  if ("student_courses" in studentdata && studentdata.courses) this.student_courses = studentdata.courses;
  if ("inner" in studentdata && studentdata.inner) this.inner = studentdata.inner;
}

//get Student by id to show in main container
function getStudentbyId(student_id) {
  let studentApiMethod = 'StudentApi';
  let studentdata = {
   ctrl: studentApiMethod
  };
  let student = new Student(studentdata)
   Student.data_id = student_id;
  sendAjax('back/api/api.php', student, "GET", function (onestudentresult) {
    console.log(onestudentresult);
      $.ajax('front/viewTemplates/studentInfoTemplate.html').always(function (studentinfotemplate) {
      $('#mainSales').html("");
      var s = studentinfotemplate;
      s = s.replace("{{num}}", studentdata[0].student_id);
      s = s.replace("{{editid}}", studentdata[0].student_id);
      s = s.replace("{{imgsrc}}", "uploads/" + studentdata[0].student_image);
      s = s.replace("{{name}}", studentdata[0].student_name);
      s = s.replace("{{phone}}", studentdata[0].student_phone);
      s = s.replace("{{email}}", studentdata[0].student_email);

      let d = document.createElement("div");
      d.innerHTML = s;
      $("#mainSales").append(d);

      // let coursemodule = new courseModule();
      //let courseApiMethod = 'CourseApi';
      //let coursedata = {
      //  ctrl: courseApiMethod
      //};  
      //courseModel.getCourseForStudent(data[0].id);
    })
  }, error)
  // $.ajax({
  // url: 'back/api/api.php',
  //data: { activitiesArray: data,
  //},
  //type: 'GET',
  //success: function (onestudentresult) {
  //console.log(onestudentresult[1]);
  // showOneStudent(onestudentresult);
  // },
  //error: function (jqXHR, exception) {
  //var msg = '';
  //if (jqXHR.status === 0) {
  //  msg = ' could not connect to server!.'
  // }
  //}
  //});
}

//get all students, create new student

var studentModule = function () {

  return {
    //   createStudents: function () {
    //     jQuery.post(studentApiUrl).always(function (data) {
    //       console.log(data);
    // });
    //},

    getStudent: function (data, callstudents, error) {
      $.ajax({
        url: 'back/api/api.php',
        data: { activitiesArray: data },
        type: 'GET',
        success: function (studentresult) {
          callstudents(JSON.parse(studentresult));
        },
        error: function (jqXHR, exception) {
          var msg = '';
          if (jqXHR.status === 0) {
            msg = ' could not connect to server!.'
          }
        }
      });
    }
  }
};

//function showOneStudent(onestudentresult) {
//let studentmodule = new studentModule();
//let studentApiMethod = 'Student';
//let studentdata = {
// ctrl: studentApiMethod

//};

//$.ajax('front/viewTemplates/studentInfoTemplate.html').always(function (studentinfotemplate) {
// $('#mainSales').html("");
//var s = studentinfotemplate;
//s = s.replace("{{imgsrc}}", "uploads/" + onestudentresult[0].student_image);
//s = s.replace("{{name}}", onestudentresult[0].student_name);
//s = s.replace("{{phone}}", onestudentresult[0].student_phone);
//s = s.replace("{{email}}", onestudentresult[0].student_email);

//let d = document.createElement("div");
// d.innerHTML = s;
//$("#mainSales").append(d);

//courseModel.getCourseForStudent(data[0].id);
//})
//}


function sendFiletoServer(data, calltype) {
  $.ajax({
    dataType: 'text',//what to expect back from PHP script, if anything
    url: 'back/api/api.php',// point to image upload file in server
    cache: false,
    cotentType: false,
    processData: false,
    data: data,
    type: 'POST',
    success: function () { }

  });
}



































































































