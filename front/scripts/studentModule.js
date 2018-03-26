"use strict";

//construct Student object to send to server with ajax
function Student(data) {
  if ("ctrl" in data && data.ctrl) this.ctrl = data.ctrl;
  if ("student_id" in data && data.student_id) this.student_id = data.student_id;
  if ("student_name" in data && data.student_name) this.student_name = data.student_name;
  if ("student_phone" in data && data.student_phone) this.student_phone = data.student_phone;
  if ("student_email" in data && data.student_email) this.student_email = data.student_email;
  if ("student_image" in data && data.student_image) this.student_image = data.student_image;
  if ("studentCourses" in data && data.studentCourses) this.studentCourses = data.studentCourses;
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
    school.showOneStudent(JSON.parse(onestudentresult));

  });
}


//get all students, create new student

var studentModule = function () {
  return {
    //creates new student when click on save button
    createStudent: function () {
      let studentApiMethod = 'StudentApi';
      var data = { ctrl: studentApiMethod }
      let image;
      let courses = [];
      let values = [];
     

     // var courses = $("input:checkbox:checked").map(function () {
       // return $(this).val();
        //console.log(courses);
      //}).toArray();

      if (checkAddStudentForm($("#addStudentForm"))) {

        values.name = $("#name").val().trim();
        values.phone = $("#phone").val().trim();
        values.email = $("#email").val().trim();
        values.image = $("#inputimage").prop("files")[0];
        console.log($("#inputimage").prop("files")[0]);

        $("input:checkbox[name='courses']:checked").each(function() { //get courses checked
          courses.push($(this).attr("id"));
      });

        data.student_name = values.name;
        data.student_phone = values.phone;
        data.student_email = values.email;
        data.student_image = values.image.name;
        data.studentCourses=courses;
        console.log(values.image.name);
      }

      let student = new Student(data);

      sendAjax('back/api/api.php', student, "POST", function (newstudentresult) {
        console.log(newstudentresult);
        let school = new SchoolScreen;
        school.showNewStudent(newstudentresult);
      });
    },

    getStudent: function (data, callstudents) {
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
    getStudentsForCourse(id){
      let studentApiMethod = 'StudentApi';
     var data={
        ctrl: studentApiMethod,
        id:student_id,
        inner:true
      };
      let student = new Student(data);
     
     sendAjax('back/api/api.php', student, "GET", function (studentsincourseresult) {
          let coursesceeen = new CourseScreen();
         coursesceeen.showStudentsinCourse(studentsincourseresult);

      });
  },
    

    deleteStudent: function (buttonID) {
      let check = confirm("Are you sure you want to delete this student?")
      if (check === true) {

        let studentApiMethod = 'StudentApi';
        var data = {
          ctrl: studentApiMethod,
          student_id: buttonID
        };
        let student = new Student(data);

        sendAjax('back/api/api.php', student, "DELETE", function (deletestudentresult) {
          console.log(deletestudentresult);
          alert("Your request was completed successfully! Click on school button. ")
        });
        $('#mainSales').html("");
        $('#Students').html("");
        $("#Courses").html("");
      
      }
    },
               
    updateStudent: function (buttonID) {
      
      let studentApiMethod = 'StudentApi';
      var data = { ctrl: studentApiMethod,
      student_id:buttonID }
      let image;
      // let courses = [];
      let values = [];

      var courses = $("input:checkbox:checked").map(function () {
        return $(this).val();
        console.log(courses);
      }).toArray();

      if (checkEditStudentForm($("#editStudentForm"))) {

        values.name = $("#inputname").val().trim();
        console.log(values.name);
         values.phone = $("#inputphone").val().trim();
         console.log(values.phone);
         values.email = $("#inputemail").val().trim();
         console.log(values.email);
        values.image = $("#inputimage").prop("files")[0];
        console.log($("#inputimage").prop("files")[0]);


        data.student_name = values.name;
        data.student_phone = values.phone;
        data.student_email = values.email;
        data.student_image = values.image.name;
        console.log(values.image.name);
      }
      let student = new Student(data);
      sendAjax("back/api/api.php", student, "PUT", function (updatestudentresult) {
        if (updatestudentresult === true) {
          alert("Student was updated!");
          getStudentbyId($this = data("studentid"), student_id);
        }
      });

    }
  }
}


//calls function to creates a new student when clicked
$(document).on("click", "#createStudent", function (e) {
  e.preventDefault();
  let studentmodule = new studentModule();
  let student_id = $(this).data("savestudent");
  studentmodule.createStudent();
});

//calls edit student template
$(document).on("click", "#editStudent", function () {
  location.hash = "edit student " + $(this).data("editid");
  let school = new SchoolScreen;
  school.getStudenteditForm("edit", $(this).data("editid"));
});
// calls functions to update student when clicked 
$(document).on("click", "#save_student", function (e) {
  e.preventDefault();
  let studentmodule = new studentModule();
  let studentId = $(this).data("savestudent");
  studentmodule.updateStudent(studentId);
});
//calls functions to delete student when clicked
$(document).on("click", "#delete_student", function (e) {
  e.preventDefault();
  let studentmodule = new studentModule();
   studentmodule.deleteStudent($(this).data("deletestudent"));
});






















































































