function toggle(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

//ROTERENDE LOGO :
// Når man scroller på siden, skal logoet rotere:
window.addEventListener("scroll", () => {
  // Find logoet med id "rundtLogo"
  const logo = document.getElementById("rundtLogo");
  // Find ud af hvor langt man har scrollet ned
  const drej = window.scrollY;

  // Roter logoet i forhold til hvor langt man har scrollet
  // Jo mere man scroller, jo mere drejer det
  logo.style.transform = `rotate(${drej / 15}deg)`;
});
