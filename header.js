document.addEventListener("DOMContentLoaded", () => {
  const byContainer = document.querySelector(".dropdown-content");

  fetch("https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?select=*&order=id.asc&limit=8", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // By links
      const byMarkup = data.map((kategrori) => `<li> <a href="/tojfaelleskab.html?by=${encodeURIComponent(kategrori.by)}">${kategrori.by}</a> </li>`).join("");
      byContainer.innerHTML = byMarkup;
    });
});
