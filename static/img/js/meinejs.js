$(document).ready(function() {
  var playing = false;
  $('a#mus').css("color","black");
  $('.modal-trigger').leanModal();
  $('a#mus').mouseover(function(){
  $(this).css("cursor","pointer");
  $(this).css("color","blue");

  $(".img1").on("mouseover",function (e) {
    alert(e.target.name+ "hal")
    }
    });
})
$(".button-collapse").sideNav();
//$("#m1").css('opacity',0);
$('a#mus').mouseout(function(){
  $(this).css("cursor","pointer");
    $(this).css("color","black");
})




      $("#img1").on("mouseout",function () {

          $('#img1').animate({opacity:0.1},700)
        },function(){

          $('#img1').css('opacity',0.1)
          $('#img1').attr('src','img/layout/farben/blau.jpg');
            $('#img1').animate({opacity:1},700);


        });

/*


$("#b1").on("click",function(e){
  console.log(e.target.name+ e.target.src+ e.target.img)
  _this = e.target;
  pic = e.target.name;
  var z = parseInt(pic)

  z = z-1;
   $('#b1').animate({opacity:0.4},700)
   },function(){
      $(pic).css('opacity',0.3);
      $(pic).scr= bild[z][1];
   })


                $("img2").on("mouseover",function () {
                    $('#img2').animate({opacity:0},700)
                  },function(){
                    $('#img2').css('opacity',0.4)
                    $('#img2').attr('src','img/layout/kunstkatalog_preview.jpg');
                      $('#img2').animate({opacity:1},700);


                  });

                  $("#img2").on("mouseout",function () {

                      $('#img2').animate({opacity:0.1},700)
                    },function(){

                      $('#img2').css('opacity',0.1)
                      $('#img2').attr('src','img/layout/farben/grau.jpg');
                        $('#img2').animate({opacity:1},700);


                    });
*/


$('body').on("click","a#mus",function() {
      $(this).toggleClass("down");
      if (playing == false) {
      document.getElementById('loop').play();
      playing = true;

      } else {
        document.getElementById('player').pause();
        playing = false;
      }
  });
});
