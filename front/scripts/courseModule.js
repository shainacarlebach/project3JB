<<<<<<< HEAD
'use strict';

//create  courses object
function Course(data) {
if("ctrl" in data && data.ctrl)this.ctrl=data.ctrl;    
if("course_id" in data && data.course_id)this.course_id = data.course_id;
if("course_name"in data && data.course_name)this.course_name = data.course_name;
if("course_description" in data && data.course_description) this.course_description = data.course_description;
if("course_image" in data && data.course_image) this.course_image = data.course_image;
if("inner" in data && data.inner)this.inner= data.inner;
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
        getCourseForStudent: function(course_id) {
         
          let courseApiMethod = 'CourseApi';
          var data = { ctrl: courseApiMethod,
          student_id: course_id,
        inner: true};
            
        sendAjax('back/api/api.php',data,"GET", function(coursestudentresult) {
          console.log(coursestudentresult);
          let school=new SchoolScreen;
          school.getStudentJoinCourses(coursestudentresult)
              });
    }
};
}


=======
'use strict';

//create  courses object
//function Course(data) {
//if("ctrl" in data && data.ctrl)this.ctrl=data.ctrl;    
//if("course_id" in data && data.course_id)this.course_id = data.course_id;
//if("course_name"in data && data.course_name)this.course_name = data.course_name;
//if("course_description" in data && data.course_description) this.course_description = data.course_description;
//if("course_image" in data && data.course_image) this.course_image = data.course_image;
//if("inner" in data && data.inner)this.inner= data.inner;
//}


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
      //  getCourseForStudent: function(course_id) {
        //    let course=new Course("course_id","course_name","course_description","course_image");
            //course.id();
          //  Course.id=course_id;
                 
            // sendAJAX("GET", CourseApiUrl, course, function(respnse) {
              //  let column3 = new Column3Director();
                //column3.getinnerJoin(respnse);

            //});
    }
};

//  $('#Courses').html("");
//put total amount of courses here
//$('#total')  
// $.ajax('front/viewTemplates/schoolTemplate').always(function (schoolTemplate) {
//   for (let i = 0; i < request.length; i++) {
//     var c = schoolTemplate;
//   const num = 'course' + request[i].Course_id;//element id

// c = c.replace("{{courseid}}", request[i].course_id);
//c = c.replace("{{imgsrc}}", "uploads/" + request[i].course_image);
//c = c.replace("{{courseName}}", request[i].course_name);
//c = c.replace("{{courseDescription}}", request[i].course_description);

// $('#Courses').append(c);
// }
//})
//};

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

>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
