
let flag = 0;
let darkflag = 0;
let textflag = 0;



$("#accessMenu").hide();

  $("#darkBtn").click(function darkTest () {
    if (darkflag === 0) {
      $("#navbarCollapse").addClass("darkMode");
      $(".navbar").addClass("darkMode");
      $(".nav-item").addClass("whitetext");
      $("h1").addClass("whitetext")  

      $("body").addClass("darkMode");
      $("#bgHead").removeClass("bg-custom-class");

      $("p").removeClass("bg-custom-class");
      $(".bgdark").removeClass("bg-custom-class");
      
    //   $("#body").removeClass("bg-gray-200");
     

      darkflag = 1;
    } else {
      $("#navbarCollapse").removeClass("darkMode");
      $(".navbar").removeClass("darkMode");
      $(".nav-item").removeClass("whitetext");
      $("h1").removeClass("whitetext");
      $("body").removeClass("darkMode");
      $("#RealAbout").addClass("bg-light");
      $(".bgdark").addClass("bg-custom-class");

      $("#bgHead").addClass("bg-light");
      $("p").addClass("bbg-custom-class");
      $("p").removeClass("bg-white");
      $("#RealAbout").removeClass("bg-custom-class");
      
      darkflag = 0;
    }
  

  });



  $("#largeFont").click(function () {
    if (textflag === 0) {
      $("p").addClass("largeFont");
      $("h1").addClass("largerH");

      textflag = 1;
    } else {
      $("p").removeClass("largeFont");
      $("h1").removeClass("largerH");

      textflag = 0;
    }
  });

  $("#acessability").click(function () {
    if (flag === 0) {
      $("#acessability").addClass("widthAccess");
      
      flag = 1;
    } else {
      $("#acessability").removeClass("widthAccess");
      flag = 0;
    }

    // $("#accessMenu").toggle("drop");
    return false;
  });