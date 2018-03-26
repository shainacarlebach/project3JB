"use strict";

var CourseScreen = function () {
 let adminrole;
// let coursescreen;
 //var coursescreen_data = {};

 //function callCoursesTemplate(details, studentCourses, calltype, buttonID ){

 //} 

    return {
        //switch main container to show one course info 
        showOneCourse: function (onecourseresult, adminrole) {

            $('#mainSales').html("");
            $.ajax('front/viewTemplates/courseInfo.html').always(function (courseinfotemplate) {
                let data = onecourseresult;
                for (var i = 0; i < data.length; i += 1) {
                    console.log(data[i].course_name);

                    var c = courseinfotemplate;

                    c = c.replace("{{editid}}", data[i].course_id);
                    c = c.replace("{{imgsrc}}", "uploads/" + data[i].course_image);
                    c = c.replace("{{name}}", data[i].course_name);
                    c = c.replace("{{details}}", data[0].description);

                    let d = document.createElement("div");
                    d.innerHTML = c;
                    $("#mainSales").append(d);
                    if (adminrole === "sales") {
                        $("#editCourse").hide();
                    }

                    let studentmodule = new studentModule();
                    studentmodule.getStudentsForCourse(data[i].student_id);

                }
            })
        }, //create a function to show courses as an array dynamically on student forms
        addCheckbox: function (studentCourses) {
            if (!studentCourses) {
               studentCourses = false;
            }
                              
            var CoursesArray = [];
          
            //gets all courses from index page and element id from template
            $(".selectCourses span h6").each(function (index, value) { 
              CoursesArray.push($(value).attr("id"));
            });
            
            
            var Coursesid = []; //gets all courses list from DOM
            $(".selectCourses button").each(function (index, value) {
                Coursesid.push($(value).data("courseid"));
           });
          // give each checkbox value from dyanmically generated data
             for (var i = 0; i < CoursesArray.length; i++) {
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "courses";
                checkbox.value = CoursesArray[i];
                console.log(CoursesArray[i]);
                checkbox.id = Coursesid[i];

                  if (studentCourses !== false) {
                   for (var x = 0; x < studentCourses.length; x++) {
                   if (Coursesid[i] == studentCourses[x]) {
                   checkbox.checked = true;
                 }
                }
            }
// add label for checkbox from dynamically generated data
            var label = document.createElement("label")
           label.htmlFor = i;
           console.log(label.htmlFor = i);
            label.appendChild(document.createTextNode(CoursesArray[i] + " course"));
            console.log(CoursesArray[i] + " course");
                      
            $("#course-checkbox").append(checkbox);
            $("#course-checkbox").append(label);
            
        }
    }
   // }); 
          
    //});
       // }
        //}//,

        // showStudentsinCourse(onecourseresult){

        // }
   
}
}
