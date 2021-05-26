// neues Bild am Ende von bidl einfügen, das letzte ohne komma
var bild=[
["img/layout/farben/orange.jpg","img/layout/schlossallee_preview.jpg"],
["img/layout/farben/grau.jpg","img/layout/kunstkatalog_preview.jpg"],
["img/layout/farben/blau.jpg","img/layout/finetrader_preview.jpg"],
["img/layout/farben/apricot.jpg","img/layout/styleguide_preview.jpg"],
["img/layout/farben/blau.jpg","img/layout/tradingclub_preview.jpg"],
["img/layout/farben/tuerkis.jpg","img/layout/papier_preview.jpg"],
["img/layout/farben/orange.jpg","img/layout/farben_preview.jpg"],
["img/img/layout/farben/grau.jpg","img/layout/illus_preview.jpg"],
["img/layout/farben/rosa.jpg","img/layout/jahrbuch_preview.jpg"],
["img/img/layout/farben/apricot.jpg","img/layout/studiofoto_preview.jpg"],
["img/layout/farben/blau.jpg","img/layout/deutschland_preview.jpg"]
]
var z = 0;
var _this;
var pic="";
$(document).ready(function() {
$(".dropdown-button").dropdown();
$(".button-collapse").sideNav();


$('a#mus').mouseout(function(){
  $(this).css("cursor","pointer");
    $(this).css("color","black");
})
$('a#mus').css("color","black");
$('.modal-trigger').leanModal();
$('a#mus').mouseover(function(){
$(this).css("cursor","pointer");
$(this).css("color","blue");
})
// neues Bild hier die Id einfügen im mouseover und mouseout
$("#img1, #img2, #img3, #img4, #img5, #img6").on("mouseover",function () {
  var z = $(this).attr('name');
  z= parseInt(z);
  z = z-1;
var pic = bild[z][0];
console.log(pic)
    $(this).animate({opacity:0.5},400, function(){
  var z = $(this).attr('name');

      z= parseInt(z);
      z = z-1;
    var pic = bild[z][1];
    console.log(pic)
     $(this).attr('src',pic)
      $(this).animate({opacity:1});

    })
  });

  $("#img1, #img2, #img3, #img4, #img5, #img6").on("mouseout",function () {

      $(this).animate({opacity:0.2},400, function(){
       var z = $(this).attr('name');

        z= parseInt(z);
        z = z-1;
      var pic = bild[z][0];
      console.log(pic)
       $(this).attr('src',pic)
        $(this).animate({opacity:1});

      })
    });






})
