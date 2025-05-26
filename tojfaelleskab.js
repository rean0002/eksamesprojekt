document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const by = params.get("by"); // f.eks. "Nørrebro"

  const header = document.querySelector(".header-row h1");
  if (header && by) {
    header.textContent = `KLÆDESKABET HOS ${by.toUpperCase()}`;
  }

  const cardSektion = document.querySelector(".gallery");

  fetch(`https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?by=eq.${by}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const cardsMarkup = data
        .map(
          (produkt) => `
       <a href="produktside.html?id=${produkt.id}"  class="card">
          <img src="${produkt.billede || "/img/produktimg.png"}" alt="${produkt.produktnavn}">
          <div class="produkt_info">
            <h4>${produkt.produktnavn}</h4>
            <p class="str">${produkt.mærke}</p>
            <p class="str">${produkt.str}</p>
          </div>
        </div>
      `
        )
        .join("");
      cardSektion.innerHTML = cardsMarkup;
    });
});
