!function(){var a=0,e=0,s=0;$("#accessMenu").hide(),$("#darkBtn").click((function(){0===e?($("#navbarCollapse").addClass("darkMode"),$(".navbar").addClass("darkMode"),$(".nav-item").addClass("whitetext"),$(".loginbtn").removeClass("btn-outline-dark"),$(".loginbtn").addClass("bg-white"),$("h1").addClass("whitetext"),$("h5").addClass("whitetext"),$("p").removeClass("text-black"),$("p").addClass("whitetext"),$("body").addClass("darkMode"),$(".bgdark").removeClass("bg-custom-class"),$(".bgf").addClass("darkMode"),e=1):($("#navbarCollapse").removeClass("darkMode"),$(".navbar").removeClass("darkMode"),$(".nav-item").removeClass("whitetext"),$(".loginbtn").removeClass("bg-white"),$(".loginbtn").addClass("btn-outline-dark"),$("h1").removeClass("whitetext"),$("h5").removeClass("whitetext"),$("p").addClass("text-black"),$("p").removeClass("whitetext"),$("body").removeClass("darkMode"),$("#body").removeClass("bg-gray-200"),$(".bgdark").addClass("bg-custom-class"),$(".bgf").removeClass("darkMode"),e=0)})),$("#largeFont").click((function(){0===s?($("p").addClass("largeFont"),$("h1").addClass("largerH"),$(".navG").addClass("mediumFont"),s=1):($("p").removeClass("largeFont"),$("h1").removeClass("largerH"),$("body").removeClass("largeFont"),$(".navG").removeClass("mediumFont"),s=0)})),$("#acessability").click((function(){return 0===a?($("#acessability").addClass("widthAccess"),a=1):($("#acessability").removeClass("widthAccess"),a=0),$("#accessMenu").toggle("drop"),!1}))}();
//# sourceMappingURL=main.261ba47c.js.map