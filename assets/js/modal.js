
  document.addEventListener("DOMContentLoaded", function () {
    const ageModal = document.getElementById("ageModal");
    const confirmBtn = document.getElementById("confirmAgeBtn");

    const alreadyConfirmed = localStorage.getItem("ageConfirmed");

    if (!alreadyConfirmed) {
      ageModal.classList.remove("hidden");
    }

    confirmBtn.addEventListener("click", () => {
      localStorage.setItem("ageConfirmed", "true");
      ageModal.classList.add("hidden");
    });
  });

