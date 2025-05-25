
  document.addEventListener("DOMContentLoaded", () => {
    const toggleOpen = document.getElementById("toggleOpen");
    const toggleClose = document.getElementById("toggleClose");
    const collapseMenu = document.getElementById("collapseMenu");
    const menuLinks = collapseMenu.querySelectorAll("a");

    if (!toggleOpen || !toggleClose || !collapseMenu) return;

    const openMenu = () => {
      collapseMenu.classList.remove("hidden", "translate-x-full");
      collapseMenu.classList.add("translate-x-0");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
      collapseMenu.classList.remove("translate-x-0");
      collapseMenu.classList.add("translate-x-full");

      setTimeout(() => {
        collapseMenu.classList.add("hidden");
        document.body.style.overflow = "";
      }, 300); 
    };

    toggleOpen.addEventListener("click", openMenu);
    toggleClose.addEventListener("click", closeMenu);


    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  });