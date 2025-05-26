// Vent på klik på hele dokumentet
document.addEventListener("click", function (e) {
  // BLIV MEDLEM pop-up
  if (e.target.classList.contains("bliv-medlem-btn")) {
    e.preventDefault(); // Forhindrer evt. link-adfærd
    const medlemModal = document.querySelector("#medlems-modal");
    if (medlemModal) medlemModal.style.display = "flex";
  }

  // LOG IND pop-up
  if (e.target.classList.contains("log-ind-btn")) {
    e.preventDefault();
    const loginModal = document.querySelector("#login-modal");
    if (loginModal) loginModal.style.display = "flex";
  }

  // LUK pop-up (klik på luk-knap)
  if (e.target.classList.contains("close-btn")) {
    const modal = e.target.closest(".modal");
    if (modal) modal.style.display = "none";
  }

  // LUK pop-up (klik på mørk baggrund)
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
