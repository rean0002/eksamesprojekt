let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const by = params.get("by");

  const header = document.querySelector(".header-row h1");
  if (header && by) {
    header.textContent = `KLÆDESKABET HOS ${by.toUpperCase()}`;
  }

  const gallery = document.querySelector(".gallery");

  fetch(`https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?by=eq.${by}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      renderProducts(allProducts);
    });

  function renderProducts(products) {
    gallery.innerHTML = products
      .map(
        (produkt) => `
      <a href="produktside.html?id=${produkt.id}" class="card">
        <img src="${produkt.billede || "/img/produktimg.png"}" alt="${produkt.produktnavn}">
        <div class="produkt_info">
          <h4>${produkt.produktnavn}</h4>
          <p class="str">${produkt.mærke}</p>
          <p class="str">${produkt.str}</p>
        </div>
      </a>
    `
      )
      .join("");
  }

  // Åbn og luk filter-popup
  window.openFilter = function () {
    document.getElementById("filterPopup").style.display = "block";
  };

  window.closeFilter = function () {
    document.getElementById("filterPopup").style.display = "none";
  };

  // Filtrer produkter
  window.applyFilter = function () {
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    const brand = document.getElementById("brand").value;
    const style = document.getElementById("style").value;

    const filtered = allProducts.filter((p) => (size === "Vælg størrelse" || p.str === size) && (color === "Vælg farve" || (p.farve && p.farve.toLowerCase() === color.toLowerCase())) && (brand === "Vælg mærke" || p.mærke === brand) && (style === "Vælg style" || p.style === style));

    renderProducts(filtered);
    closeFilter();
  };

  // Nulstil filtre og vis alle
  window.resetFilter = function () {
    document.getElementById("size").selectedIndex = 0;
    document.getElementById("color").selectedIndex = 0;
    document.getElementById("brand").selectedIndex = 0;
    document.getElementById("style").selectedIndex = 0;
    renderProducts(allProducts);
  };
});
