window.onload = function() {
  document.getElementById("menu-btn").onclick = function() {
    var menu = document.getElementById("menu-container");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
};
