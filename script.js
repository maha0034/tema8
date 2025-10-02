console.log("Hej fra product.js");

const id = new URLSearchParams(window.location.search).get("id");
const productcontainer = document.querySelector(".produktcontainer");

getData(`https://kea-alt-del.dk/t7/api/products/${id}`);

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));
}
function showProduct(product) {
  console.log("showProduct: ", product);

  productcontainer.innerHTML += `<article>
       <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
       </article>
            <div class="produkt-information">
                <h2>Produkt information:</h2>
                <h4>Model navn:</h4>
                <p>Sahara Team India Fanwear Round Neck Jersey</p>
                <h4>Farve:</h4>
                <p>Blå</p>
                <h4>Inventar nummer:</h4>
                <p>1163</p>
                <h2>Nike</h2>
                <p>Nike, skaber oplevelser for nye atleter</p>
            </div>
            <div class="tilføj-kurv">
                <h6>Sahara Team India Fanwear Round Neck Jersey</h6>
                <h5>t-shirts | nike</h5>
                <label for="size">Vælg størrelse:</label>
                <select id="size" name="size">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                 Now DKK <span>${product.price - (product.price * product.discount) / 100}</span>,-
                <button class="tilfoej-til-kurv">Tilføj til kurv</button>
            </div>
      </article>`;
}
