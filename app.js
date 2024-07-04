function openTab(ref) {
    var tabs = document.getElementsByClassName("tab");
    var mainPadding = document.getElementsByClassName("main");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      document.getElementById("main").style.padding = "0";
    }
    document.getElementById(ref).style.display = "block";
    document.getElementById("main").style.padding = "10px";
  }