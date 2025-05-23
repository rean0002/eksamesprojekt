document.addEventListener("DOMContentLoaded", () => {
  const myProduct = new URLSearchParams(window.location.search);
  const productId = myProduct.get("id");
  const productContainer = document.querySelector(".produkt-container");
  const cardSektion = document.querySelector(".card_sektion");

  // Hent specifikt produkt
  fetch(`https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?id=eq.${productId}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const produkt = data[0];
      productContainer.innerHTML = `
        <section class="produkt-container">
          <div class="produkt-billede">
            <img src="${produkt.billede}" alt="${produkt.produktnavn}">
          </div>
          <div class="produkt-info">
            <h1>${produkt.produktnavn}</h1>
            <p class="size"><strong>Str.${produkt.str}</strong></p>
            <p class="produkt-infop">${produkt.produktinfo}</p>
            <button class="reserve-btn">RESERVÉR</button>

            <p class="ikon_p1">Når du lejer dette stykke tøj...</p>
            <div class="ikon-sektion">
              <div class="ikon">
                <img class="ikon1" src="/SVG/klode.svg" alt="Klode ikon">
                <p class="ikon_p2"><strong>Svarer det til…</strong><br>at springe 14 håndvaske over</p>
              </div>
              <div class="ikon">
                <img class="ikon2" src="/SVG/pose.svg" alt="Stop taske ikon">
                <p class="ikon_p2"><strong>Svarer det til…</strong><br>30% mindre tøjforbrug</p>
              </div>
              <div class="ikon">
                <img class="ikon3" src="/SVG/pung.svg" alt="Penge ikon">
                <p class="ikon_p2"><strong>Svarer det til…</strong><br>at du sparer penge hver måned</p>
              </div>
            </div>

            <p class="produkt-info2"><strong>STAND:</strong><br>${produkt.stand}</p>
            <p class="produkt-info2-1"><strong>VASK:</strong><br>${produkt.vask}</p>
            <p class="produkt-info2-2"><strong>EJER:</strong><br>${produkt.ejer} &lt;3</p>
          </div>
        </section>
      `;
    });

  // Hent nyeste produkter
  fetch("https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?select=*&order=id.desc&limit=8", {
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
        <a href="produktside.html?id=${produkt.id}" class="card_container">
          <img src="${produkt.billede}" alt="${produkt.produktnavn}">
          <div class="produkt_info">
            <h4>${produkt.produktnavn}</h4>
            <p class="str">${produkt.str}</p>
            <p class="by">${produkt.by}</p>
          </div>
        </a>
      `
        )
        .join("");
      cardSektion.innerHTML = cardsMarkup;
    });
});
