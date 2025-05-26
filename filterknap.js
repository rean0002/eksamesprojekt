function openFilter() {
  document.getElementById("filterPopup").style.display = "block";
}

function closeFilter() {
  document.getElementById("filterPopup").style.display = "none";
}

function resetFilter() {
  document.getElementById("size").selectedIndex = 0;
  document.getElementById("color").selectedIndex = 0;
  document.getElementById("brand").selectedIndex = 0;
  document.getElementById("style").selectedIndex = 0;
}
