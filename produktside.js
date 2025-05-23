const myProduct = new URLSearchParams(window.location.search);
const productId = myProduct.get("id");
let productContainer = document.querySelector(".produkt-container");

fetch(`https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?${productId}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
  },
})
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <section class="produkt-container">
            <div class="produkt-billede">
                <img src=${data.billede} alt=${data.produktnavn}>
            </div>
            <div class="produkt-info">
                <h1>${data.produktnavn}</h1>
                <p class="size"><strong>Str.${data.str}</strong></p>
                <p class="produkt-infop">${data.produktinfo}</p>
                <button class="reserve-btn">RESERVÉR</button>

                <p class="ikon_p1">Når du lejer dette stykke tøj...</p>
                <div class="ikon-sektion">
                    <div class="ikon">
                        <img class="ikon1" src="/SVG/klode.svg" alt="Klode ikon">
                        <p class="ikon_p2"><strong>Svarer det til…</strong><br>at springe 14 håndvaske over</p>
                    </div>
                    <div class="ikon">
                        <img class="ikon2" src="SVG/pose.svg" alt="Stop taske ikon">
                        <p class="ikon_p2"><strong>Svarer det til…</strong><br>30% mindre tøjforbrug</p>
                    </div>
                    <div class="ikon">
                        <img class="ikon3" src="/SVG/pung.svg" alt="Penge ikon">
                        <p class="ikon_p2"><strong>Svarer det til…</strong><br>at du sparer penge hver måned</p>
                    </div>
                </div>

                <p class="produkt-info2"><strong>STAND:</strong><br>${data.str}</p>
                <p class="produkt-info2-1"><strong>VASK:</strong><br>${data.vask}</p>
                <p class="produkt-info2-2"><strong>EJER:</strong><br>${data.ejer} &lt;3</p>
            </div>
        </section>
        `;
  });
