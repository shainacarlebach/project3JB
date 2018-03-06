<<<<<<< HEAD
//let's get started! 
$('document').ready(function () {
  //hide admin and sales link before login
  $("#nav_Administration").hide(),
    $("#logoutbutton").hide(),
    $("#addCourses").hide(), //sales can't edit course 
    //click on login button in modal to bring loginuser from server 
    $("#login_button").click(function (e) {
      e.preventDefault();
      if (checkForm(document.forms[0])) {
        let loginmodule = new loginModule();
        //send user request
        let user = {
          username: $("#username").val(),
          password: $("#password").val()
        };

        //use user response to load admin
        loginmodule.login(user, function (result) {
          console.log(result);///check resp is loginuser

          //put result in local storage, change screen acc. user
          for (let i = 0; i < result.length; i++) {
            let adminrole = result[i].role;
            localStorage.setItem('adminrole', JSON.stringify(adminrole));
            console.log(adminrole);
            modal.style.display = "none";
            $("#adminimg").attr('src', "uploads/" + result[i].admin_image);
            $('#admin').append('Hello ' + result[i].username);
            $('#role').append(result[i].role);
            $("#loginbutton1").hide();
            $("#logoutbutton").show();

            if (adminrole === "Owner" || adminrole === "Manager") {
              // modal.style.display = "none";
              //show admin link
              $("#nav_Administration").show();
              //show able to add courses link
              $("#addCourses").show();
              alert('login success');
            }
            else { adminrole === "sales" };
          }
        })
      }
    }),
    //click on school and go to school page
    $('#nav_School').click(function (e) {
      e.preventDefault();
      let school = new SchoolScreen;
      school.school_screen();
    }),

    //click on add button and get form to add students 
    $('#addStudents').click(function (e) {
      e.preventDefault();
      //load add/edit student form 
      let studentmodule = new studentModule();
      let studentApiMethod = 'StudentApi';
      let studentdata = {
        ctrl: studentApiMethod
      };
      let school = new SchoolScreen;
      school.getstudentform();
     
    });
});

















   
    //screen for manager and owner
    //$('#nav_Administration').click(function (e) {
      //  e.preventDefault();
        //let schoolrole = localStorage.getItem('adminrole');
        //schoolrole = JSON.parse(schoolrole);
        //console.log(schoolrole);
        //hide sales page , load admin page 
       // $('#mainSales').hide();
        //loadmainadmin();


       // let adminmodule = new adminModule();
        //let adminApiMethod = 'AdminApi';
        //let data = { ctrl: adminApiMethod };
   // })//,
      //$('#addStudents')
//});


            //click on + to get  courses from server 
      //  $("#addCourses").click(function (e) {

        //click on +to get students from server
        //$('#addStudents').click(function () 
=======
//let's get started! 
$('document').ready(function () {
  //hide admin and sales link before login
  $("#nav_Administration").hide(),
    $("#logoutbutton").hide(),
    $("#addCourses").hide(), //sales can't edit course 
    //click on login button in modal to bring loginuser from server 
    $("#login_button").click(function (e) {
      e.preventDefault();
      if (checkForm(document.forms[0])) {
        let loginmodule = new loginModule();
        //send user request
        let user = {
          username: $("#username").val(),
          password: $("#password").val()
        };

        //use user response to load admin
        loginmodule.login(user, function (result) {
          console.log(result);///check resp is loginuser

          //put result in local storage, change screen acc. user
          for (let i = 0; i < result.length; i++) {
            let adminrole = result[i].role;
            localStorage.setItem('adminrole', JSON.stringify(adminrole));
            console.log(adminrole);
            modal.style.display = "none";
            $("#adminimg").attr('src', "uploads/" + result[i].admin_image);
            $('#admin').append('Hello ' + result[i].username);
            $('#role').append(result[i].role);
            $("#loginbutton1").hide();
            $("#logoutbutton").show();

            if (adminrole === "Owner" || adminrole === "Manager") {
              // modal.style.display = "none";
              //show admin link
              $("#nav_Administration").show();
              //show able to add courses link
              $("#addCourses").show();
              alert('login success');
            }
            else { adminrole === "sales" };
          }
        })
      }
    }), 
    //click on school and go to school page
    $('#nav_School').click(function (e) {
      e.preventDefault();
      let school = new SchoolScreen;
      school.school_screen();
    }),
   //click on add button and get form to add students 
    $('#addStudents').click(function (e) {
      e.preventDefault();
      //load add/edit student form 
      let studentmodule = new studentModule();
      let studentApiMethod = 'StudentApi';
      let studentdata = {
        ctrl: studentApiMethod
      };

      $.ajax("/theSchool/front/viewTemplates/studentTemplate.html").always(function (editStudentTemplate) {
        var e = editStudentTemplate;

        e = e.replace("{{saveid}}", student_id);
        e = e.replace("{{deleteid}}", student_id);

        let d = document.createElement("div");
        d.innerHTML = e;
        $("#mainSales").html("");
        $("#mainSales").append(d);
        $("#inputname").val(details.name);
        $("#inputphone").val(details.phone);
        $("#inputemail").val(details.mail);

        //add checkbox
        // });
      });
    });
});

















   // });

    //$('#addStudents').click(function (e) {
      //  e.preventDefault();

    //}),
    //screen for manager and owner
    //$('#nav_Administration').click(function (e) {
      //  e.preventDefault();
        //let schoolrole = localStorage.getItem('adminrole');
        //schoolrole = JSON.parse(schoolrole);
        //console.log(schoolrole);
        //hide sales page , load admin page 
       // $('#mainSales').hide();
        //loadmainadmin();


       // let adminmodule = new adminModule();
        //let adminApiMethod = 'AdminApi';
        //let data = { ctrl: adminApiMethod };
   // })//,
      //$('#addStudents')
//});


            //click on + to get  courses from server 
      //  $("#addCourses").click(function (e) {

        //click on +to get students from server
        //$('#addStudents').click(function () 
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
