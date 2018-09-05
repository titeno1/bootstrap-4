function myFunction() {
    var x = document.getElementById("btn_showAll");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function dropdown() {
    var x = document.getElementById("dropdown-content--1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).ready(function() {
    $(".btn-showAll").click(function() {
        $(".showAll__content").fadeToggle(1000);

    });
});
$(document).ready(function() {
    $(".btn-showAll--1").click(function() {
        $(".showAll__content").fadeToggle(1000);

    });
});
$(document).ready(function() {
    $(".btn-showAll--2").click(function() {
        $(".showAll__content").fadeToggle(1000);

    });
});