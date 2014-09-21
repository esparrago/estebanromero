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

$(".fixedarrow" ).click (function(){
    var nextdiv = $( window ).height();
    $('html, body').animate({
        scrollTop: ($(window).scrollTop() + nextdiv)
    });
       
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


function cargaSendMail(){
 
 
    $("#c_enviar").attr("disabled", true);
 
    $(".c_error").remove();
 
    var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var s_email = $('#c_mail').val();
    var s_name = $('#c_name').val();    
    var s_msg = $('#c_msg').val();
 
    if (filter.test(s_email)){
    sendMail = "true";
    } else{
    $('#c_mail').after("<span class='c_error' id='c_error_mail'>Ingrese e-mail valido.</span>");
     //aplicamos color de borde si el se encontro algun error en el envio
    $('#contactform').css("border-color","#e74c3c");   
    sendMail = "false";
    }
    if (s_name.length == 0 ){
    $('#c_name').after( "<span class='c_error' id='c_error_name'>Ingrese su nombre.</span>" );
    var sendMail = "false";
    }
    if (s_msg.length == 0 ){
    $('#c_msg').after( "<span class='c_error' id='c_error_msg'>Ingrese mensaje.</span>" );
    var sendMail = "false";
    }
 
    
    if(sendMail == "true"){
     
     var datos = {
 
             "nombre" : $('#c_name').val(),
 
             "email" : $('#c_mail').val(),
 
             "mensaje" : $('#c_msg').val()
 
     };
 
     $.ajax({
 
             data:  datos,
             // hacemos referencia al archivo contacto.php
             url:   'contacto.php',
 
             type:  'post',
 
             beforeSend: function () {
             //aplicamos color de borde si el envio es exitoso
                    $('#contactform').css("border-color","#25A25A");
 
                     $("#c_enviar").val("Enviando...");
 
             },
 
             success:  function (response) {
 
                    $('form')[0].reset(); 
                    $("#c_enviar").val("Enviar");
                    $("#c_information p").html(response);
                    $("#c_information").fadeIn('slow');
                    $("#c_enviar").removeAttr("disabled");
                    alert(enviado);
 
 
             }
 
     });
 
} else{
    $("#c_enviar").removeAttr("disabled");
}
 
}

    
