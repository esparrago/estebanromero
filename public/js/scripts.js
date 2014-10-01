$(window).stellar({

    horizontalOffset: 0,
    verticalOffset: 0,
    responsive: true,
    horizontalScrolling: false,
});

$(function(){
      $("#typedtext").typed({
        strings: ["WEB", "UI/UX", "GRAPHIC"],
        typeSpeed: 100,
        backDelay: 4000,
        showCursor:false,
        loop: true, 
        loopCount: false, 
      });
  });
  
$(document).ready(function() {
  
  var element =  $( "#chart" ).height();
  var view = $( ".sections" ).height();

  if (element > view) {

    $( ".sections" ).css( "height", "auto" );

  }


});


  $(function(  ){
    $.fn.centerizer = function() {
      var altocontainer = $( ".sections" ).height();
      console.log(altocontainer);
      var altoelement =  this.height();
      console.log(altoelement);
      var subcenter = (altocontainer - altoelement);
      console.log(subcenter);
      var center = (subcenter / 2);
      var titles = $( ".titles" ).height();
      var centertotal = (center - titles);
      console.log(centertotal);

      $( this ).css( "margin-top", centertotal );
  };
});

$(document).ready(function() {
$("#textabout p").centerizer();
});


$( "#menuicon" ).click(function() {
  $("#fullmenu").slideDown("slow");
});

$( "#closer" ).click(function() {
  $("#fullmenu").slideUp("slow");
});

$( ".triggerup" ).click(function() {
  $("#fullmenu").fadeOut("slow");
});

$(function(){
    var _top = $(window).scrollTop();
    var individualDivHeight = $( window ).height();
    $(window).mousewheel(function() {
        $('html, body').stop();
    });

    $(window).mousewheel(function(){setTimeout(
        function(){
    
            var _cur_top = $(window).scrollTop();
            var totalHeight = $('#container').height();
            var posToScroll = Math.round(_cur_top / individualDivHeight) * individualDivHeight;

            $('html, body').stop().animate({scrollTop: posToScroll}, 500);
        }, 800);
    });
});


$(document).ready(function() {
  function filterPath(string) {
    return string
      .replace(/^\//,'')
      .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
      .replace(/\/$/,'');
  }
  $('a[href*=#]').each(function() {
    if ( filterPath(location.pathname) == filterPath(this.pathname)
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').stop();
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });
});




  $(window).on("swipe",function(){setTimeout(
      function(){
        var _top = $(window).scrollTop();
        var individualDivHeight = $( window ).height();
        var _cur_top = $(window).scrollTop();
        var totalHeight = $('#container').height();
        var posToScroll = Math.round(_cur_top / individualDivHeight) * individualDivHeight;
        $('html, body').stop().animate({scrollTop: posToScroll}, 500);
        console.log("swipe")
        }, 800);
  });
                 
 
$(".fixedarrow" ).click (function(){
    var nextdiv = $( window ).height();
    $('html, body').animate({
        scrollTop: ($(window).scrollTop() + nextdiv)}
        , 1000);
       
});

$(function (  ) {
  $.fn.progress = function() {
    var percent = this.data("percent");
    this.css("width", percent+"%");
  };
});

$(function (  ) {
  $.fn.progress_revert = function() {
    this.css("width", "0%");
  };
});

  var height = $(window).height();
            $(function () {
                

                var scroller1 = new ScrollToggle($('#textabout').position().top - height, function () {
                    $('#face2').lazylinepainter('paint');
                    $("#face2 > svg").css({"width":"90%"})
                    console.log("estoy pintando");
                }, function () {
                    console.log("borrar");
                    $('#face2').lazylinepainter('erase'); 
                });

                    var scroller2 = new ScrollToggle($('#chart').position().top - height, function () {
                    $(".ps").progress();
                    $(".ai").progress();
                    $(".id").progress();
                    $(".fl").progress();
                    $(".dw").progress();
                    $(".ae").progress();
                    $(".pr").progress();
                    $(".lr").progress();
                    $(".au").progress();
                    $(".lr").progress();
                    $(".dmax").progress();
                    $(".c4d").progress();
                    console.log("");
                    }, function () {
                    $( ".progressBarValue" ).progress_revert();
                    console.log("");
                     });
});

