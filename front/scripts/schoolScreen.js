
"use strict";

var SchoolScreen = function () {

    return {
        school_screen: function () {
            //get role from storage
            let schoolrole = localStorage.getItem('adminrole');
            schoolrole = JSON.parse(schoolrole);
            console.log(schoolrole);

            //get all courses
            let coursemodule = new courseModule();
            let courseApiMethod = 'CourseApi';
            var data = { ctrl: courseApiMethod };

            coursemodule.getCourse(data, function (courseresult) {
                console.log(courseresult);
                $('#Courses').html("");
                //put total amount of courses here
                $("#totalcourses").html(courseresult.length);

                $.ajax('front/viewTemplates/courseTemplate.html').always(function (courseTemplate) {
                    let data = courseresult;
                    for (var i in data) {
                        var c = courseTemplate;
                        const num = 'course' + data[i].course_id;//element id


                        c = c.replace("{{courseid}}", data[i].course_id);
                        console.log(data[i].course_id);
                        c = c.replace("{{imgsrc}}", "uploads/" + data[i].course_image);
                        c = c.replace("{{courseName}}", data[i].course_name);
                        c = c.replace("{{course_id}}", data[i].course_name);
                        console.log(data[i].course_name)
                        c = c.replace("{{courseDescription}}", data[i].course_description);

                        $('#Courses').append(c);
                    }
                })
            });
            //get all students
            let studentmodule = new studentModule();
            let studentApiMethod = 'StudentApi';
            var data = {
                ctrl: studentApiMethod
            };

            studentmodule.getStudent(data, function (studentresult) {
                console.log(studentresult);

                $('#Students').html("");
                //put total amount here
                $("#totalstudents").html(studentresult.length);
                $.ajax('front/viewTemplates/studentTemplate.html').always(function (studentTemplate) {
                    for (var i in studentresult) {
                        var s = studentTemplate;
                        const num = 'student' + studentresult[i].student_id;//element id

                        s = s.replace("{{studentid}}", studentresult[i].student_id);
                        s = s.replace("{{imgsrc}}", "uploads/" + studentresult[i].student_image);
                        s = s.replace("{{studentName}}", studentresult[i].student_name);
                        s = s.replace("{{studentPhone}}", studentresult[i].student_phone);

                        $('#Students').append(s);
                    }
                });
            });//load main container
            loadmainsales();
        },//switch main container to show one studentinfo 
        showOneStudent: function (onestudentresult) {

            $('#mainSales').html("");
            $.ajax('front/viewTemplates/studentInfoTemplate.html').always(function (studentinfotemplate) {
                let data = onestudentresult;
                for (var i = 0; i < data.length; i += 1) {
                    console.log(data[i].student_name);

                    var s = studentinfotemplate;

                    s = s.replace("{{editid}}", data[i].student_id);
                    s = s.replace("{{imgsrc}}", "uploads/" + data[i].student_image);
                    s = s.replace("{{name}}", data[i].student_name);
                    s = s.replace("{{phone}}", data[i].student_phone);
                    s = s.replace("{{email}}", data[i].student_email);

                    let d = document.createElement("div");
                    d.innerHTML = s;
                    $("#mainSales").append(d);


                    let coursemodule = new courseModule();
                    coursemodule.getCourseForStudent(data[i].student_id);

                }
            })
        },

        //bring courses to one student screen
        getStudentJoinCourses: function (data) {

            $.ajax("front/viewTemplates/courseTemplate.html").always(function (courseTemplate) {
                //   let data=coursestudentresult;
                $(".courseslist").html("");
                for (let i = 0; i < data.length; i++) {

                    console.log(data[i].course_name);
                    var c = courseTemplate;
                    c = c.replace("{{courseid}}",data[i].course_id);
                    console.log(data[i].course_id);
                    c = c.replace("{{courseName}}", data[i].course_name);
                    c = c.replace("{{course_id}}", data[i].course_name);
                    console.log(data[i].course_name);
                    c = c.replace("{{courseDescription}}", data[i].course_description);
                    c = c.replace("{{imgsrc}}", "uploads/" + data[i].course_image);
                    let d = document.createElement("div");
                    d.innerHTML = c;
                    $(".courseslist").append(d);
                }

            });
        },
        //bring form to add new student 
        createNewStudent: function () {
            $.ajax("front/viewTemplates/addStudent.html").always(function (createStudentTemplate) {

                var c = createStudentTemplate;

                let d = document.createElement("div");
                d.innerHTML = c;
                $('#mainSales').html("");
                $("#mainSales").append(d);

                let coursescreen = new CourseScreen;
                let studentCourses;
                coursescreen.addCheckbox();
            });
        },
        showNewStudent: function (newstudentresult) {

            $('#mainSales').html("");
            $.ajax('front/viewTemplates/studentInfoTemplate.html').always(function (studentinfotemplate) {
                let data = newstudentresult;
                for (var i = 0; i < data.length; i += 1) {
                    console.log(data[i].student_name);

                    var s = studentinfotemplate;

                    s = s.replace("{{editid}}", data[i].student_id);
                    s = s.replace("{{imgsrc}}", "uploads/" + data[i].student_image);
                    s = s.replace("{{name}}", data[i].student_name);
                    s = s.replace("{{phone}}", data[i].student_phone);
                    s = s.replace("{{email}}", data[i].student_email);

                    let d = document.createElement("div");
                    d.innerHTML = s;
                    $("#mainSales").append(d);


                    let coursemodule = new courseModule();
                    coursemodule.getCourseForStudent(data[i].student_id);

                }
            });
        }, 
        getStudenteditForm: function (calltype, buttonID) {

            var details = {
                name: $("#student_name").html(),
                phone: $("#student_phone").html(),
                mail: $("#student_email").html(),

            };
            //get courses student is registered to
            let studentCourses = []; 
             $(".courseslist span h6").each(function (i, sp){
                studentCourses.push($(sp).attr("id"));
               
             });
          //  $(".courseslist button").each(function(index,value){
            //  studentCourses.push($(value).data("courseid"));
           //});
            getUpdateStudentTemp(details, calltype, buttonID,studentCourses)
        }
    }
}


function getUpdateStudentTemp(details, calltype, buttonID,studentCourses) {

    $.ajax("front/viewTemplates/editStudent.html").always(function (editStudentTemplate) {
        var e = editStudentTemplate;
        e = e.replace("{{deletestudent}}", buttonID);
        e = e.replace("{{saveid}}", buttonID);


        let d = document.createElement("div");
        d.innerHTML = e;
        $('#mainSales').html("");
        $("#mainSales").append(d);

        $("#inputphone").val(details.phone);
        $("#inputemail").val(details.mail);
        $("#inputname").val(details.name);
     //   $("#input:checkbox:checked").val(details.courses);

        //add checkbox
        let coursescreen = new CourseScreen;
         coursescreen.addCheckbox(studentCourses);

    });
}








