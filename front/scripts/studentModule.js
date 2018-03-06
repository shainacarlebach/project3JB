"use strict";

//construct Student object to send to server with ajax
function Student(data) {
  if ("ctrl" in data && data.ctrl) this.ctrl = data.ctrl;
  if ("student_id" in data && data.student_id) this.student_id = data.student_id;
  if ("student_name" in data && data.student_name) this.student_name = data.student_name;
  if ("student_phone" in data && data.student_phone) this.student_phone = data.student_phone;
  if ("student_email" in data && data.student_email) this.student_email = data.student_mail;
  if ("student_image" in data && data.student_image) this.student_image = data.student_image;
  if ("student_courses" in data && data.student_courses) this.student_courses = data.student_courses;
  if ("inner" in data && data.inner) this.inner = data.inner;
}


//get Student by id to show in main container
function getStudentbyId($this = data("studentid")) {
    let studentApiMethod = 'StudentApi';
    var StudentData = {
      ctrl: studentApiMethod,
      student_id: $this
    };
    let student = new Student(StudentData);
    sendAjax('back/api/api.php', student, "GET", function (onestudentresult) {
      console.log(onestudentresult);
      let school = new SchoolScreen;
      school.showOneStudent(JSON.parse(onestudentresult))
    });
  }
  
  
//get Student by id to show in main container
// function getStudentbyId($this = data("studentid"), student_id) {
//   let studentApiMethod = 'StudentApi';
//   var data = {
//     ctrl: studentApiMethod
//   };
//   { data.student_id = $this }
//   let student = new Student(data)
//   sendAjax('back/api/api.php', student, "GET", function (onestudentresult) {
//     console.log(onestudentresult);
//     let school = new SchoolScreen;
//     school.showOneStudent(JSON.parse(onestudentresult))
//   });
// }

// //get all students, create new student

var studentModule = function () {
  return {
       createStudents: function (buttonID,createstudentresult) {
        let image;
        let courses=[];
        let values=[];

        values.name=$("#inputname").val().trim();
        values.phone = $("#inputphone").val().trim();
        values.email = $("#inputemail").val().trim();
        values.image = $("#browse_s").prop("files")[0];
        {data.student_id=buttonID};      
        let student = new Student(data);
        sendAjax('back/api/api.php', student,"POST", function(createstudentresult) {
            console.log(createstudentresult);
                let studentModel = new StudentModelController();   
     });
    },

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
    },
    deleteStudent:function(buttonID){
     let check =confirm("Are you sure you want to delete this student?")
     if( check=true){
       data.student_id=buttonID;
       let student= new Student(data);
       sendAjax('back/api/api.php', student, "DELETE", function (deletestudentresult) {
       console.log(deletestudentresult); 
     });
    }
    },
    updateStudent:function(buttonID){
      
        getValuesfromForm(buttonId, function() {
            let student = new Student(data);
            sendAjax("back/api/api.php", student,"PUT", function(updatestudentresult) {
                if (updatestudentresult === true) {
                    alert("Student was updated!");
                    getStudentbyId($this = data("studentid"), student_id);
                }
    });
  })
}
  }
}





























































































