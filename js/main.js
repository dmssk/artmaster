$('.nav-menu').click(function(){
    $(".super-wrapper").addClass("active");
    $(this).css("opacity", "0");
    $(".menu").addClass("dbl");
})
$('.close-menu').click(function(){
    $(".super-wrapper").removeClass("active");
    $(".menu").removeClass("dbl");
    $(".nav-menu").css("opacity", "1");
})
function redArrow (){
    $(".arrow-up").removeClass("redarrow");
    $(".arrow-up").addClass("whitearrow");
}
function whiteArrow (){
    $(".arrow-up").removeClass("whitearrow");
    $(".arrow-up").addClass("redarrow");
}
function appendArrow (){
    $(".arrow-up").css("display", "flex");
}
function deleteArrow (){
    $(".arrow-up").css("display", "none");
}
function doWhite (){
    $("#span_menu").removeClass("red-menu");
    $("#span_menu").addClass("white-menu");
}
function doRed (){
    $("#span_menu").removeClass("white-menu");
    $("#span_menu").addClass("red-menu");
}
function gotop (){
    $('html, body').animate({scrollTop: 0},1500);
    currentAnchor = 0;
}
function gotoelementone (){
    $('html, body').animate({scrollTop:$('#anchor2').offset().top}, 500);
    currentAnchor = 1;
}
function gotoelementtwo (){
    $('html, body').animate({scrollTop:$('#anchor3').offset().top}, 500);
    currentAnchor = 2;
}
function gotoelementthree (){
    $('html, body').animate({scrollTop:$('#anchor4').offset().top}, 500);
    currentAnchor = 3;
}
function gotoelementtfour (){
    $('html, body').animate({scrollTop:$('#anchor5').offset().top}, 500);
    currentAnchor = 4;
}
function gotoelementsixth (){
    $('html, body').animate({scrollTop:$('#anchor6').offset().top}, 500);
    currentAnchor = 5;
}
function gotoelementseventh (){
    $('html, body').animate({scrollTop:$('#anchor7').offset().top}, 500);
    currentAnchor = 6;
}
//Bring back the browser object
jQuery.browser = {};
//Rest all is self explanatory.
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase())
                    && !/webkit/.test(navigator.userAgent.toLowerCase());

var chromeWheel = "mousewheel";
var mozWheel = "DOMMouseScroll";
function scrollTo (test){
    $('.main-page').on(test, function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        // Increase or reset current anchor
        if(e.type == chromeWheel){
            if( e.originalEvent.wheelDelta >= 0 ) {
                currentAnchor--;
            }else{
                currentAnchor++;
            }
        }else {
            if( e.originalEvent.detail >= 0 ) {
                currentAnchor++;
            }else{
                currentAnchor--;
            }
        }
        if( currentAnchor > (anchors.length - 1)){
            currentAnchor--;
        }else if( currentAnchor < 0 ) {
            currentAnchor++;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 400, 'swing', function(){
            isAnimating  = false;
        });
    });
}

if ( $(window).width() > 959 && $(window).width() > $(window).height() ){
    var anchors = [];
    var currentAnchor = -1;
    var isAnimating  = false;
    $(function(){
        function updateAnchors() {
            anchors = [];
            $('.anchor').each(function(i, element){
                anchors.push( $(element).offset().top );
            });
        }
        if(jQuery.browser.mozilla) {
            scrollTo(mozWheel);
        } else {
            scrollTo(chromeWheel);
        }
        updateAnchors();   
    });
}
$(window).scroll(function() {
    var CurrentPos = $(this).scrollTop();
    if(CurrentPos > window.innerHeight -100){
        doRed();
        deleteArrow();
    }
    else{
        doWhite();
    }
    if(CurrentPos >  window.innerHeight*2 - 100){
        doWhite();
        appendArrow();
        redArrow();
    }
    if(CurrentPos > window.innerHeight*4 - 100){
        doRed();
        whiteArrow();
    } 
});
$(document).mouseup(function (e) {
    var container = $(".menu");
    if (container.has(e.target).length === 0){
        container.removeClass("dbl");
        $(".nav-menu").css("opacity", "1");
    }
});
//          $('.arrow-up').click(function() {
//            $('html, body').animate({scrollTop: 0},1500);
//          })
$(document).ready(function(){

  $('.slide-parthners-mobile').slick({

  });
  $('.slide-wrapper').slick({
    slidesToShow: 1,
      dots: false,
      arrows: false,

  });
    $('.next').click(function(){
        $(".slide-wrapper").slick('slickNext');
    });
    $('.prev').click(function(){
        $(".slide-wrapper").slick('slickPrev');
    });
    $('.slide-wrapper').slickLightbox({
      itemSelector        : '.portfolio-item a img',
      navigateByKeyboard  : true,
      src: "src"
    });
    $('.lightbox-trigger').slickLightbox({
      itemSelector        : '.portfolio-item a img',
      navigateByKeyboard  : true,
      src: "src"
    });
    $('.slide-workers').slick({
         slidesToShow: 3,
         arrows: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    
//    mask
    $("#input-tel").mask("+380 (99) 999-99-99");
});
$('.arrow-down').click(function(){
       $('html, body').animate({scrollTop:$('#anchor2').position().top}, 500);
});
