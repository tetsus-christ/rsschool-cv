function openTab(ref, button) {
    var i;
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      document.getElementById("main").style.padding = "0";
    }

    var buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = ""
      buttons[i].style.color = "";
    }

    document.getElementById(ref).style.display = "block";
    button.style.backgroundColor = "#36283B";
    button.style.color = "#cf548b";
    document.getElementById("main").style.padding = "20px";
  }



  function closeTabs() {

    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      document.getElementById("main").style.padding = "0";
    }

    var buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = ""
      buttons[i].style.color = "";
    }

  }


  function myFunction() {
    var nav = document.getElementById("navigation");
    if (window.screen.width < 800) {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }