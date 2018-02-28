"use strict";

//construct Student object to send to server with ajax
function Student(data) {
  if ("ctrl" in data && data.ctrl) this.ctrl = data.ctrl;
  if ("student_id" in data && data.student_id) this.student_id = data.student_id;
  if ("student_name" in data && data.student_name) this.student_name = data.student_name;
  if ("student_phone" in data && data.student_phone) this.student_phone = data.student_phone;
  if ("student_email" in data && data.student_email) this.student_email = data.student_mail;
  if ("student_image" in data && data.student_image) this.student_image = data.student_image;
  //  if ("student_courses" in data && data.courses) this.student_courses = data.courses;
  //if ("inner" in studentdata && studentdata.inner) this.inner = studentdata.inner;
}

//get Student by id to show in main container
function getStudentbyId($this = data("studentid"), student_id) {
  let studentApiMethod = 'StudentApi';
  var data = {
    ctrl: studentApiMethod
  };
  { data.student_id = $this }
  let student = new Student(data)
  sendAjax('back/api/api.php', student, "GET", function (onestudentresult) {
    console.log(onestudentresult);
    let school = new SchoolScreen;
    school.showOneStudent(JSON.parse(onestudentresult))
  });
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
}






































































































