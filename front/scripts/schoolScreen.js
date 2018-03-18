
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
                    for (var i in courseresult) {
                        var c = courseTemplate;
                        const num = 'course' + courseresult[i].course_id;//element id

                        c = c.replace("{{courseid}}", courseresult[i].course_id);
                        c = c.replace("{{imgsrc}}", "uploads/" + courseresult[i].course_image);
                        c = c.replace("{{courseName}}", courseresult[i].course_name);
                        c = c.replace("{{courseDescription}}", courseresult[i].course_description);

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
        getStudentJoinCourses: function (coursestudentresult) {

            $.ajax("front/viewTemplates/studentCourseTemplate.html").always(function (courseTemplate) {

                $("#courseslist").html("");
                for (let i = 0; i < coursestudentresult.length; i++) {

                    console.log(coursestudentresult["0"].course_name);
                    var c = courseTemplate;
                    c = c.replace("{{courseName}}", coursestudentresult["0"].course_name);
                    c = c.replace("{{courseid}}", coursestudentresult["0"].course_id);
                    c = c.replace("{{courseDescription}}", coursestudentresult["0"].course_description);
                    c = c.replace("{{imgsrc}}", "uploads/" + coursestudentresult["0"].course_image);
                    let d = document.createElement("div");
                    d.innerHTML = c;
                    $("#courseslist").append(d);
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
            //  let studentCourses = []; //gets the student courses list DOM
            // $(".courselist span h6").each(function(i, sp) {
            //    studentCourses.push($(sp).attr("id"));
            //});
            getUpdateStudentTemp(details, calltype, buttonID)
        }
    }
}

//tempNameFunction(details, studentCourses, studen_id, calltype);

function getUpdateStudentTemp(details, calltype, buttonID) {

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
        //$("input:checkbox:checked").val(details.courses)
        //add checkbox
        // column3 = new Column3Director();;
        //column3.addCheckbox(studentCourses);

    });
}








