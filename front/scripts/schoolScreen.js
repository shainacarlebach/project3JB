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













