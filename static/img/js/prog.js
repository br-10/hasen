// neues Bild am Ende von bidl einfügen, das letzte ohne komma
var bild=[
["img/layout/farben/1-grau.jpg","img/layout/schlossallee_preview.jpg"],
["img/layout/farben/2-orange.jpg","img/layout/kunstkatalog_preview.jpg"],
["img/layout/farben/3-blau.jpg","img/layout/finetrader_preview.jpg"],
["img/layout/farben/4-apricot.jpg","img/layout/styleguide_preview.jpg"],
["img/layout/farben/5-tuerkis.jpg","img/layout/tradingclub_preview.jpg"],
["img/layout/farben/6-rosa.jpg","img/layout/papier_preview.jpg"],
["img/layout/farben/7-orange.jpg","img/layout/farben_preview.jpg"],
["img/layout/farben/8-grau.jpg","img/layout/illus_preview.jpg"],
["img/layout/farben/9-blau.jpg","img/layout/jahrbuch_preview.jpg"],
["img/layout/farben/10-apricot.jpg","img/layout/studiofoto_preview.jpg"],
["img/layout/farben/11-rosa.jpg","img/layout/deutschland_preview.jpg"]
]
var z = 0;
var _this;
var pic="";
$(document).ready(function() {
$(".dropdown-button").dropdown();
$(".button-collapse").sideNav();

$(".kontakt").html(" <p> Katrin Gloggengiesser | Dipl. Kommunikationsdesignerin (FH) <br>  Land: Drehler Straße 1 | 49596 Gehrde <br>  Stadt: Schleusenufer 5 | 10997 Berlin <br>  mobil: 0151.70842472 <br>  kontakt@hasenoderbein.de <br></p>");

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
$("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12").on("mouseover",function () {
  var z = $(this).attr('name');
  z= parseInt(z);
  z = z-1;
var pic = bild[z][0];
console.log(pic)
    $(this).animate({opacity:0.5},40, function(){
  var z = $(this).attr('name');

      z= parseInt(z);
      z = z-1;
    var pic = bild[z][1];
    console.log(pic)
     $(this).attr('src',pic)
      $(this).animate({opacity:1});

    })
  });

  $("#img1, #img2, #img3, #img4, #img5, #img6, #img7, #img8, #img9, #img10, #img11, #img12").on("mouseout",function () {

      $(this).animate({opacity:0.4},200, function(){
       var z = $(this).attr('name');

        z= parseInt(z);
        z = z-1;
      var pic = bild[z][0];
      console.log(pic)
       $(this).attr('src',pic)
        $(this).animate({opacity:1});

      })
    });
$('.button-collapse').sideNav({
         menuWidth: 170, // Default is 240
         edge: 'left', // Choose the horizontal origin
         closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       }
     );



})
