window.addEventListener("scroll", () => {
    const loginBtn = document.getElementById("loginButton");
    if (window.scrollY > 10) {
      loginBtn.classList.add("bg-blue-600", "text-white");
      loginBtn.classList.remove("text-blue-600", "hover:bg-blue-50");
    } else {
      loginBtn.classList.remove("bg-blue-600", "text-white");
      loginBtn.classList.add("text-blue-600", "hover:bg-blue-50");
    }
  });