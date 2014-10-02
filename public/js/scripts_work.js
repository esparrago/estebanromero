$("#galicon").click(function () {
  $("#scroll").slideToggle( function () {
    $("#galicon").css({
    
    "-webkit-animation": "none" ,
    "-moz-animation": "none" ,
    "-moz-animation": "none" ,
               
    });

    $(".arrowshover").css({
    
    "opacity": "1" ,
  
    });
  });
});



      

  
//arrows

$("#prev").click(function () { 
  var leftPos = $('#scroll').scrollLeft();
  $("#scroll").animate({scrollLeft: leftPos - 1000}, 1000);

});

$("#next").click(function () { 
  var leftPos = $('#scroll').scrollLeft();
  $("#scroll").animate({scrollLeft: leftPos + 1000}, 1000);
});



//-------------------------------------------------thumb


var hide = ["#avata","#tadeo", "#setmy"];


(function() {
    $( hide ).hide();
})();


var pro = function (grp) {
  

  if($(grp).is(':hidden')) {
  $(".pronames:visible").hide();
  $(grp).slideToggle("slow");
  }

}



$( ".1" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/1.jpg)');
    pro(avata);

     
});

$( ".2" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/2.jpg)');
    pro(avata);
    

 });

$( ".3" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/3.jpg)');
     pro(avata);
});


$( ".4" ).click(function() {
   $("#work").css('background-image', 'url(css/img/port/4.jpg)');
   pro(tadeo);

}); 

$( ".5" ).click(function() {
     $("#work").css('background-image', 'url(css/img/port/5.jpg)');
     pro(tadeo);
});

$( ".6" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/6.jpg)');
    pro(tadeo);
 });

$( ".7" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/7.jpg)');
    pro(setmy);
});


$( ".8" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/8.jpg)');
     pro(setmy);
});

$( ".9" ).click(function() {
    $("#work").css('background-image', 'url(css/img/port/9.jpg)');
     pro(setmy);
});




