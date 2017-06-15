$(document).ready(function() {




    $("#nav").hide();

    // var lastScrollTop = 0;
    // $(window).scroll(function(event){
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop){
    //            $("#starleft").animate({left:"-3.11vw",width:"4vw"
    //        // top:"300px"
    //     },{duration:600});
    //      $("#starright").animate({right:"-3.11vw",width:"4vw"
    //        // top:"300px"
    //     },{duration:600});


    $("#plus").click(function() {
        $("#nav").slideToggle();
        $(this).toggleClass("xout");

    });



    // $("#starleft").css("width","7vw");
    // $("#starright").css("width","7vw");


    //    $("#moveup").animate({ marginTop:"-70px"
    //    },{duration:600});

    //    $("#canvas-1").animate({ height:"0px"
    //    },{duration:600});
    //     // downscroll code
    // }
    // lastScrollTop = st;

    // });




});


var granimInstance = new Granim({
    element: '#canvas-1',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});

var granimInstance = new Granim({
    element: '#canvas-2',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});

var granimInstance = new Granim({
    element: '#canvas-3',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});
var granimInstance = new Granim({
    element: '#canvas-4',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#AA076B', '#61045F'],
                ['#02AAB0', '#00CDAC'],
                ['#DA22FF', '#9733EE']
            ]
        }
    }
});

// $('#projects').waypoint(function(event, direction) {
//     if (direction === 'down') {
//          $("#sectionnav").css("position","fixed");
//    $("#sectionnav").css("transform","rotate(-90deg) translate(0px,-360px)");


//     } else {

//            $("#sectionnav").css("position","absolute");

//     }
// });

$("#projectsnav").hide();
$("#resumenav").hide();
$("#projectsnav").css("position", "fixed");
$("#resumenav").css("position", "fixed");



$('#projects').waypoint(function(direction) {
    if (direction === 'down') {
        $("#projectsnav").fadeIn(1000);
        // $("#sidetext").html("section one");



        // $("#sectionnav").css("transform","rotate(-90deg) translate(0vw,-30vw)");
    }
});


// $('#project3').waypoint(function(direction) {
//   if (direction === 'down') {
//               $("#projectsnav").hide();
//               // $("#sidetext").html("section one");


//            $("#projectsnav").css("position","static");

//     // $("#sectionnav").css("transform","rotate(-90deg) translate(0vw,-30vw)");
//   }
// },{
//   offset:"50%"
// });

$('#projects').waypoint(function(direction) {
    if (direction === 'up') {
        $("#projectsnav").fadeOut();
        // $("#sectionnav").css("transform","rotate(-90deg) translate(-31vw, -47vw)");

    }
}, {
    offset: '-20%'
});


$('#resume').waypoint(function(direction) {
    if (direction === 'down') {

        $("#resumenav").show();
        $("#projectsnav").hide();
        // $("#projectsnav").css("display", "none");
        $("#projectstext").css("display","none");



        // $("#sidetext").html("resume");


        // $("#sectionnav").css("position","fixed");

        // $("#sectionnav").css("transform","rotate(-90deg) translate(0vw,-30vw)");
    }
}, {
    offset: '50%'
});




$('#resume').waypoint(function(direction) {
    if (direction === 'up') {
        $("#resumenav").hide();
        $("#projectsnav").show();
                $("#projectstext").css("display","block");



        // $("#sidetext").html("section one");
        // $("#sectionnav").css("transform","rotate(-90deg) translate(-31vw, -47vw)");

    }

},{
  offset:'50%'
});

// var waypoint = new Waypoint({
//  element: document.getElementById("projects"),
//  handler: function(down) {
//    $("#sectionnav").css("position","fixed");
//    $("#sectionnav").css("transform","rotate(-90deg) translate(0px,-360px)");
//    // $("#sectionnav").css("left","200px;")
//  }
// });


// var waypoint1 = new Waypoint({
//  element: document.getElementById("top"),
//  handler: function(up) {
//    $("#sectionnav").css("display","none");

//  },
//  offset: 300
// });


// var waypoint2 = new Waypoint({
//  element: document.getElementById("projects"),
//  handler: function(up) {
//    $("#sectionnav").css("display","none");
//    // $("#sectionnav").css("left","200px;")
//  }
// });

// $(window).on("scroll",function(e){
//  if(this.scrollTop>1000) {
//    $("#sectionnav").css("position","fixed");
//          $("#sectionnav").css("left","150px");

//  }
//  else {
//    $("#sectionnav").css("position","absolute");
//  }
// });

// $(window).scroll(function(event){
//   if(this.scrollTop>600) {
//    $("s").addClass("fixme");

//  }
//  else {
//    sidebar.removeClass("fixme");
//  }
// });
