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
}