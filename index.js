document.addEventListener("DOMContentLoaded", () => {
  const byContainer = document.querySelector(".by_container");

  fetch("https://mxjwhxmrqknlmiockfqj.supabase.co/rest/v1/produkter?limit=8", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14andoeG1ycWtubG1pb2NrZnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MzI4NDEsImV4cCI6MjA2MzQwODg0MX0.RF6zbra3sCC9LOXFzdWUb-Q6mecqRdeVX5qkzhoRedI",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const markup = data.map((kategrori) => `<a href="/tojfaelleskab.html?by=${encodeURIComponent(kategrori.by)}">${kategrori.by}</a>`).join("");
      byContainer.innerHTML = markup;
    });
});
