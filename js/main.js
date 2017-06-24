$(document).ready(function() {



    $("#nav").hide();
    $(".head").hide();
    $("#introright").hide();
    $("#introleft").hide();
    $("#canvas-5").hide();
    $("#a").hide();
    $("#b").hide();
    $("#skillz").hide();
    $("#handshake").hide();

$(window).resize(function() {
    windowResize();
});

    openingDance();
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


$("html,body").mousedown(function(){
    $(this).addClass("mousedown");
    $(this).removeClass("mouseup");

});

$("html,body").mouseup(function(){
    $(this).addClass("mouseup");

});


$("#project1").mouseenter(function(){

    $("#proj1pic").animate({
        width:"55vw"
    });


});

$("#project1").mouseleave(function(){

    $("#proj1pic").animate({
        width:"50vw"
    });


});

$("#project2").mouseenter(function(){

    $("#proj2pic").animate({
        width:"55vw"
    });


});

$("#project2").mouseleave(function(){

    $("#proj2pic").animate({
        width:"50vw"
    });


});

});





function openingDance() {

    // $("#introleft").off("fadeIn");


    if ($(window).width() > 580) {

        $(".head").show().delay(4000).animate({ marginTop: "0px" }, 2000);

        // $(".head").animate({opacity:"1"},2000);

        $("#handshake").delay(200).show();
        $("#handshake").delay(2800).animate({
            marginTop: "-100px",
            fontSize: "7vw"
        }, 1200);

        $("#a").delay(500).fadeIn(2000);
        $("#b").delay(1500).fadeIn(2000);
        $("#skillz").delay(3500).fadeIn().animate({ left: "10px" }, 2000);
        $("#introleft").fadeIn(1000);
        $("#introleft").delay(2000).animate({
            width: "50%",
            height: "30vw",
            margin: "0px 0px 0px 3vw",
            paddingTop: "53px",
            top: "95px"
        }, 1000);

        $("h4").animate({
            color: "rgba(255,255,255,.4)"
        });

        $("#introright").delay(4000).fadeIn(1000);
        $("#canvas-5").delay(4000).fadeIn(1000);

    } else {


        $(".head").show().delay(4000).animate({ marginTop: "0px" }, 2000);

        // $(".head").animate({opacity:"1"},2000);

        $("#handshake").delay(200).show();
        $("#handshake").delay(2800).animate({
            marginTop: "-100px",
            fontSize: "9vw"
        }, 1200);

        $("#a").delay(500).fadeIn(2000);
        $("#b").delay(1500).fadeIn(2000);
        $("#skillz").delay(3500).fadeIn().animate({ left: "10px" }, 2000);

        $("#introleft").fadeIn(1000);
        $("#introleft").delay(2000).animate({
            width: "100%",
            height: "60vw",
            margin: "0px",
            paddingTop: "53px",
            top: "65px",
            float: "none"
        }, 1000);



        $("h4").animate({
            color: "rgba(255,255,255,.4)"
        });

        $("#introright").delay(4000).fadeIn(1000);
        // $("#introright").animate({
        // float: "none",
        // width: "83vw",
        // bottom: "250px",
        // marginLeft: "auto",
        // marginRight: "auto",
        // float: "none",
        // right: "0px"
        // });


        $("#canvas-5").delay(4000).fadeIn(1000);
        // $("#canvas-5").animate({
        // width: "100vw",
        // float: "none",
        // margin:"0px",
        // top: "90px"    });
    }

}

function windowResize() {

    // $("#introleft").off("fadeIn");
    // $("#handshake").off("show");



    if ($(window).width() > 580) {

        // $(".head").animate({opacity:"1"},2000);


        $("#introleft").animate({
            width: "50%",
            height: "30vw",
            margin: "0px 0px 0px 3vw",
            paddingTop: "53px",
            top: "95px"
        });

        $("#handshake").animate({
            fontSize: "7vw"
        });

    } else {
        // $(".head").animate({opacity:"1"},2000);

        $("#handshake").animate({
            fontSize: "9vw"
        });

        // $("#a").delay(500).fadeIn(2000);
        // $("#b").delay(1500).fadeIn(2000);

        // $("#skillz").delay(3500).fadeIn().animate({ left: "10px" }, 2000);

        // $("#introleft").fadeIn(1000);
        $("#introleft").animate({
            width: "100%",
            height: "60vw",
            margin: "0px",
            paddingTop: "53px",
            top: "65px",
            float: "none"
        });

        // $("#introright").delay(4000).fadeIn(1000);
        // $("#introright").animate({
        // float: "none",
        // width: "83vw",
        // bottom: "250px",
        // marginLeft: "auto",
        // marginRight: "auto",
        // float: "none",
        // right: "0px"
        // });


        // $("#canvas-5").delay(4000).fadeIn(1000);
        // $("#canvas-5").animate({
        // width: "100vw",
        // float: "none",
        // margin:"0px",
        // top: "90px"    });
    }

}



var granimInstance = new Granim({
    element: '#canvas-1',
    name: 'basic-gradient',
    direction: 'left-bottom',
    opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#e4a6d8', '#dadff3', '#f3c7bc'],
                ['#f3c7bc', '#dadff3', '#e4a6d8'],
            ],
            transitionSpeed: "1000"
        }
    }
});

var granimInstance2 = new Granim({
    element: '#canvas-2',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#e4a6d8', '#dadff3', '#f3c7bc'],
                ['#f3c7bc', '#dadff3', '#e4a6d8'],
            ],
            transitionSpeed: "1000"
        }
    }
});

var granimInstance3 = new Granim({
    element: '#canvas-3',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#e4a6d8', '#dadff3', '#f3c7bc'],
                ['#f3c7bc', '#dadff3', '#e4a6d8'],
            ],
            transitionSpeed: "1000"
        }
    }
});
var granimInstance4 = new Granim({
    element: '#canvas-4',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#e4a6d8', '#dadff3', '#f3c7bc'],
                ['#f3c7bc', '#dadff3', '#e4a6d8'],
            ],
            transitionSpeed: "1000"
        }
    }
});

// orange/pinks

var granimInstance5 = new Granim({
    element: '#canvas-5',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1, 1],
    isPausedWhenNotInView: true,
    states: {
        "default-state": {
            gradients: [
                ['#ffffff', '#dadff3', '#f3c7bc'],
                ['#ff9d85', '#eac8ff', "#ffffff"],
                ['#e4a6d8', '#ffffff', '#f3c7bc'],

            ],
            transitionSpeed: "1500"
        }
    }
});

// silvery/cooltoned


// var granimInstance5 = new Granim({
//     element: '#canvas-5',
//     name: 'basic-gradient',
//     direction: 'left-right',
//     opacity: [1, 1,1,1],
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             gradients: [
//                 ['#897bf6', '#b8c2cc','#f6a4ed','#62a1fe'],
//                 ['#f0cdec', '#b0a7f2',"#a2c6fb",'#d6e1ed']
//             ],
//             transitionSpeed: "2000"
//         }
//     }
// });

// cooltones2

// var granimInstance5 = new Granim({
//     element: '#canvas-5',
//     name: 'basic-gradient',
//     direction: 'diagonal',
//     opacity: [1, 1,1],
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             gradients: [
//                 ['#e0fff6', '#b6d3f5','#e5b1c8',],
//                 ['#85b4ec', '#f8d6e5',"#81e8ca",]
//             ],
//             transitionSpeed: "2000"
//         }
//     }
// });

// hmmm idk

// var granimInstance5 = new Granim({
//     element: '#canvas-5',
//     name: 'basic-gradient',
//     direction: 'left-right',
//     opacity: [1, 1,1,1],
//     isPausedWhenNotInView: true,
//     states: {
//         "default-state": {
//             gradients: [
//                 ['#faddef', '#f3f3f3','#3d675d'],['#7f456b','#c6f4cd','#f3f3f3',],

//                 ['#f3f3f3','#faffda',"#52b1b5"]
//                             ],
//             transitionSpeed: "2000"
//         }
//     }
// });
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
        $("#projlink").css("color", "white");
        // $("#sidetext").html("section one");



        // $("#sectionnav").css("transform","rotate(-90deg) translate(0vw,-30vw)");
    }
});



$('#projects').waypoint(function(direction) {
    if (direction === 'up') {
        $("#projectsnav").fadeOut();
        $("#projlink").css("color", "black");

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
        $("#projectstext").css("display", "none");
        $("#projlink").css("color", "black");
        $("#resumelink").css("color", "white");



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
        $("#projectstext").css("display", "block");
        $("#projlink").css("color", "white");
        $("#resumelink").css("color", "black");





        // $("#sidetext").html("section one");
        // $("#sectionnav").css("transform","rotate(-90deg) translate(-31vw, -47vw)");

    }

}, {
    offset: '50%'
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
