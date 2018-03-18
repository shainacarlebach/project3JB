"use strict";

let adminrole;
var CourseScreen = function () {
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
        }//,
       // showStudentsinCourse(onecourseresult){

       // }
    }
}
