$(document).ready(function() {



    $("#nav").hide();
    $(".head").hide();
    $("#introright").hide();
    $("#introleft").hide();
    $("#canvas-5").hide();
    $("#a").hide();
    $("#b").hide();
    $("#skillz").hide();

        $(".head").show().delay(3000).animate({marginTop:"0px"},2000);

        // $(".head").animate({opacity:"1"},2000);


$("#a").delay(1000).fadeIn(1000);
$("#b").delay(1500).fadeIn(1000);
$("#skillz").delay(2000).fadeIn().animate({left:"10px"},2000);

    $("#introleft").fadeIn(1000);

    $("#introright").delay(2000).fadeIn(1000);
    $("#canvas-5").delay(2000).fadeIn(1000);




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

var granimInstance2 = new Granim({
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

var granimInstance3 = new Granim({
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
var granimInstance4 = new Granim({
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

var granimInstance5 = new Granim({
    element: '#canvas-5',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#e4a6d8', '#dadff3','#f3c7bc'],
                ['#ffffff', '#e064c8',"#ff9d85"],
            ],
            transitionSpeed: "1000"
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
        $("#projlink").css("color","white");
        // $("#sidetext").html("section one");



        // $("#sectionnav").css("transform","rotate(-90deg) translate(0vw,-30vw)");
    }
});



$('#projects').waypoint(function(direction) {
    if (direction === 'up') {
        $("#projectsnav").fadeOut();
                $("#projlink").css("color","black");

        // $("#sectionnav").css("transform","rotate(-90deg) translate(-31vw, -47vw)");

    }
}, {
    offset: '10%'
});


$('#resume').waypoint(function(direction) {
    if (direction === 'down') {

        $("#resumenav").show();
        $("#projectsnav").hide();
        // $("#projectsnav").css("display", "none");
        $("#projectstext").css("display","none");
                $("#projlink").css("color","black");
        $("#resumelink").css("color","white");



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
                        $("#projlink").css("color","white");
                                $("#resumelink").css("color","black");





        // $("#sidetext").html("section one");
        // $("#sectionnav").css("transform","rotate(-90deg) translate(-31vw, -47vw)");

    }

},{
  offset:'50%'
});


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
