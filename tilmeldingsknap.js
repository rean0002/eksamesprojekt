// Lyt efter klik på hele dokumentet
document.addEventListener("click", function (e) {
  // Hvis det klikkede element har klassen "reserve-btn"
  if (e.target && e.target.classList.contains("reserve-btn")) {
    // Find modal-elementet
    const modal = document.querySelector(".modal");
    // Vis modal hvis den findes
    if (modal) modal.style.display = "flex";
  }

  // Hvis det klikkede element har klassen "close-btn"
  if (e.target && e.target.classList.contains("close-btn")) {
    // Find modal-elementet
    const modal = document.querySelector(".modal");
    // Skjul modal hvis den findes
    if (modal) modal.style.display = "none";
  }

  // Hvis det klikkede element selv er modal'en (baggrund)
  if (e.target && e.target.classList.contains("modal")) {
    // Skjul modal ved klik på baggrunden
    e.target.style.display = "none";
  }
});
