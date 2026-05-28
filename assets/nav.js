(function () {
  var headers = document.querySelectorAll(".topbar");

  headers.forEach(function (header) {
    var toggle = header.querySelector(".nav-toggle");
    var menu = header.querySelector(".menu");
    if (!toggle || !menu) {
      return;
    }

    function closeMenu() {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 620) {
        closeMenu();
      }
    });
  });
})();
