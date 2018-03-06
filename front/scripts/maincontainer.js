<<<<<<< HEAD
//bring temp main container

function loadmainsales(){
$.ajax('front/viewTemplates/mainSales.html').always(function(maincontainer) {
    var m = maincontainer;
    $("#mainSales").html("");
    let e = document.createElement("div");
    e.innerHTML = m;
    $("#mainSales").append(m);
});
}

function loadmainadmin(){
    $.ajax('front/viewTemplates/mainAdmin.html').always(function(maincontainer) { 
        var m = maincontainer; 
        $("#mainAdmin").html("");
        let e = document.createElement("div");
        e.innerHTML = m;
        $("#mainAdmin").append(m);
    }); 
=======
//bring temp main container

function loadmainsales(){
$.ajax('front/viewTemplates/mainSales.html').always(function(maincontainer) {
    var m = maincontainer;
    $("#mainSales").html("");
    let e = document.createElement("div");
    e.innerHTML = m;
    $("#mainSales").append(m);
});
}

function loadmainadmin(){
    $.ajax('front/viewTemplates/mainAdmin.html').always(function(maincontainer) { 
        var m = maincontainer; 
        $("#mainAdmin").html("");
        let e = document.createElement("div");
        e.innerHTML = m;
        $("#mainAdmin").append(m);
    }); 
>>>>>>> 75fd0c29c762eec98629b0c575c7d62650efb4b2
}