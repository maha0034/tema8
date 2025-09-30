function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProducts(data));
}
const season = new URLSearchParams(window.location.search).get("season");
if (season) {
  getData(`https://kea-alt-del.dk/t7/api/products?season=${season}`);
} else {
  console.log("Ingen season valgt i URL");
}

console.log("data:", season);
