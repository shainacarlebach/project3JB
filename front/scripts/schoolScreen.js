<<<<<<< HEAD
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
                for (var i = 0; i < onestudentresult.length; i += 1) {
                    console.log(onestudentresult[i].student_name);

                    var s = studentinfotemplate;

                    s = s.replace("{{studentid}}", onestudentresult[i].student_id);
                    s = s.replace("{{imgsrc}}", "uploads/" + onestudentresult[i].student_image);
                    s = s.replace("{{name}}", onestudentresult[i].student_name);
                    s = s.replace("{{phone}}", onestudentresult[i].student_phone);
                    s = s.replace("{{email}}", onestudentresult[i].student_email);

                    let d = document.createElement("div");
                    d.innerHTML = s;
                    $("#mainSales").append(d);

                   let coursemodule = new courseModule();
                   let courseApiMethod = 'CourseApi';
                   var data = { ctrl: courseApiMethod };
                   coursemodule.getCourseForStudent(onestudentresult[i].student_id);
                }
            })
        },
        getStudentJoinCourses: function (coursestudentresult) {

            $.ajax("front/viewTemplates/studentCourseTemplate.html").always(function (courseTemplate) {
                $("#courses").html("");
                for (let i=0;i < coursestudentresult.length; i++) {
                    console.log(coursestudentresult["0"].course_name);
                    var c = courseTemplate;
                    c = c.replace("{{courseName}}", coursestudentresult["0"].course_name);
                    c = c.replace("{{courseid}}", coursestudentresult["0"].course_id);
                    c = c.replace("{{courseDescription}}", coursestudentresult["0"].course_description);
                    c = c.replace("{{imgsrc}}", "uploads/" + coursestudentresult["0"].course_image);
                    let d = document.createElement("div");
                    d.innerHTML = c;
                    $("#courses").append(d);
                }

            });
        },
        getstudentform:function(studentdetails,studentCourses,s_id){
                $.ajax("front/viewTemplates/addeditStudent.html").always(function (editStudentTemplate) {
            var e = editStudentTemplate;
            var studentdetails = {
                name: $("#name").html(),
                phone: $("#phone").html(),
                mail: $("#email").html(),
            };
          //  e = e.replace("{{saveid}}", student_id);
           
    
            let d = document.createElement("div");
            d.innerHTML = e;
            $("#mainSales").html("");
            $("#mainSales").append(d);
            $("#inputname").val(studentdetails.name);
            $("#inputphone").val(studentdetails.phone);
            $("#inputemail").val(studentdetails.email);
    
            //add checkbox
             });
            }
    }
}
//click edit button brings delete form
function getStudenteditForm(buttonID){
    $.ajax("front/viewTemplates/deleteEditStudent.html").always(function (deleteStudentTemplate) {
        var e = deleteStudentTemplate;
        var studentdetails = {
            name: $("#name").html(),
            phone: $("#phone").html(),
            mail: $("#email").html(),
        };
       
       e = e.replace("{{deleteid}}", data.student_id);

        let d = document.createElement("div");
        d.innerHTML = e;
        $("#mainSales").html("");
        $("#mainSales").append(d);
        $("#inputname").val(studentdetails.name);
        $("#inputphone").val(studentdetails.phone);
        $("#inputemail").val(studentdetails.email);
    });   
        //deletes a student
        let studentmodule = new studentModule();
        let studentApiMethod = 'StudentApi';
        var data = {
            ctrl: studentApiMethod
        };

        studentmodule.deleteStudent(buttonID, data, function (deletestudentresult) {
            console.log(deletestudentresult); 
   
});
}










=======
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
                    for (let i = 0; i < courseresult.length; i++) {
                        var c = courseTemplate;
                        const num = 'course' + courseresult[i].Course_id;//element id

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
            //let student=new Student(studentdata)

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
                for (var i=0;i<onestudentresult.length;i+=1) {
                   console.log(onestudentresult[i].student_name);
                
                var s = studentinfotemplate;

                s = s.replace("{{studentid}}",onestudentresult[i].student_id);
               s = s.replace("{{imgsrc}}", "uploads/" + onestudentresult[i].student_image);
               s = s.replace("{{name}}", onestudentresult[i].student_name);
               s = s.replace("{{phone}}", onestudentresult[i].student_phone);
               s = s.replace("{{email}}", onestudentresult[i].student_email);

                let d = document.createElement("div");
               d.innerHTML = s;
               $("#mainSales").append(d);
                }
            })
        }
    }
}













>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
