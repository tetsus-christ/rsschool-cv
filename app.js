function openTab(ref, button) {
    var i;
    var tabs = document.getElementsByClassName('tab');
    for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
    }

    var buttons = document.getElementsByClassName('button');
    for (i = 0; i < buttons.length; i++) {
      buttons[i].style.backgroundColor = ''
      buttons[i].style.color = '';
    }

    document.getElementById(ref).style.display = 'block';
    button.style.backgroundColor = '#36283B';
    button.style.color = '#cf548b';
  }

  document.getElementById('default-tab').click();