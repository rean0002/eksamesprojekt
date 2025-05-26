document.addEventListener("click", function (e) {
  // Forhindre linket i at reloade siden
  if (e.target.classList.contains("bliv-medlem-btn")) {
    e.preventDefault();

    const modal = document.querySelector("#medlems-modal");
    if (modal) modal.style.display = "flex";
  }

  // Lukke-knappen
  if (e.target.classList.contains("close-btn")) {
    const modal = document.querySelector("#medlems-modal");
    if (modal) modal.style.display = "none";
  }

  // Klik udenfor modal-content lukker pop-up
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
