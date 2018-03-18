
'use strict';

//create  courses object
function Course(data) {
if("ctrl" in data && data.ctrl)this.ctrl=data.ctrl;    
if("course_id" in data && data.course_id)this.course_id = data.course_id;
if("student_id"in data && data.student_id)this.student_id=data.student_id;
if("course_name"in data && data.course_name)this.course_name = data.course_name;
if("course_description" in data && data.course_description) this.course_description = data.course_description;
if("course_image" in data && data.course_image) this.course_image = data.course_image;
if("inner" in data && data.inner)this.inner= data.inner;
}

 //get Course by id to show in main container
function getCoursebyId($this = data("courseid")) {
  let courseApiMethod = 'CourseApi';
  var CourseData = {
    ctrl: courseApiMethod,
    course_id: $this
  };
  let course = new Course(CourseData);
  sendAjax('back/api/api.php', course, "GET", function (onecourseresult) {
    console.log(onecourseresult);
    let coursescreen = new CourseScreen;
    coursescreen.showOneCourse(JSON.parse(onecourseresult));

  });
}

//get all courses
var courseModule = function () {
   
    //let course = new Course("course_id", "course_name", "course_description", "course_image");
    return {
       
        //      createCourses: function () {
        //        jQuery.post(courseApiUrl).always(function (data) {
        //          console.log(data);
        //    });
        //},
        getCourse: function (data,callcourse,error) {
          // let course= new Course(data); 
          // sendAjax('back/api/api.php',course,"GET",callcourse);
            $.ajax({
              url: 'back/api/api.php',
               data: { activitiesArray: data },
              type: 'GET',
               success: function (courseresult) {
                 callcourse(JSON.parse(courseresult));
              },
               error: function (jqXHR, exception) {
                 var msg = '';
              if (jqXHR.status === 0) {
                 msg = ' could not connect to server!.'
               }
              }
            });
        },
        getCourseForStudent: function(student_id) {
         
          let courseApiMethod = 'CourseApi';
          var Coursedata = { ctrl: courseApiMethod,
          student_id: student_id,
        inner: true};
            
        sendAjax('back/api/api.php',Coursedata,"GET", function(coursestudentresult) {
          console.log(coursestudentresult);
          let school=new SchoolScreen;
          school.getStudentJoinCourses(coursestudentresult)
              });
    }
};
}


