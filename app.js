function openTab(ref) {
    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      document.getElementById("main").style.padding = "0";
    }
    document.getElementById(ref).style.display = "block";
    document.getElementById("main").style.padding = "20px";
  }

  function closeTabs() {
    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      document.getElementById("main").style.padding = "0";
    }
  }