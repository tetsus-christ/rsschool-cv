function openTab(ref) {
    var tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }
    document.getElementById(ref).style.display = "block";
  }