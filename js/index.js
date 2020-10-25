$(document).ready(function () {
   $(".glass").on("click", function () {
      $(".knife1").animate({top: "60px"}, 200);
      $(".knife4").animate({left: "450px"}, 200);
      $(".knife7").animate({top: "355px"}, 200);
      $(".knife10").animate({right: "588px"}, 200);

      $(".knife2").animate({top: "105px"},  200);
      $(".knife3").animate({left: "488px"}, 200);
      $(".knife5").animate({left: "488px"}, 200);
      $(".knife6").animate({top: "337px"}, 200);
      $(".knife8").animate({top: "337px"}, 200);
      $(".knife9").animate({right: "645px"}, 200);
      $(".knife11").animate({right: "638px"}, 200);
      $(".knife12").animate({top: "112px"}, 200);
   })

   $(".glass").mouseout(function (e) {
      $(".knife1").animate({top: "-250px"}, 200);
      $(".knife4").animate({left: "-210px"}, 200);
      $(".knife7").animate({top: "700px"}, 200);
      $(".knife10").animate({right: "-200px"}, 200);

      $(".knife2").animate({top: "95px"}, 20);
      $(".knife3").animate({left: "31%"}, 20);
      $(".knife5").animate({left: "31%"}, 20);
      $(".knife6").animate({top: "345px"}, 20);
      $(".knife8").animate({top: "355px"}, 20);
      $(".knife9").animate({right: "41.5%"}, 20);
      $(".knife11").animate({right: "41%"}, 20);
      $(".knife12").animate({top: "95px"}, 20);
   })
})


//$(".animate-button").on("click", function () {
    // $(".type-1").css("fill", "red")
    // $(".type-2").css("transform", "translateX(150px)")
    // $(".type-3").css("transform", "rotateZ(360deg)")})

    // $(document.body).vide('video/ocean'); // Non declarative initialization
    // $(".block-bg").vide('video/ocean')