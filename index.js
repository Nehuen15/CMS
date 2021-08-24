function searchImg(imgId, data) {
  var aux = data.includes.Asset.find((arr) => {
    if (arr.sys.id == imgId) {
      return arr.fields.file.url;
    }
  });
  return aux.fields.file.url;
}

function setHtml(data) {
  var templateEl = document.querySelector(".template-main-proyect");
  var conteinerProyectsEl = document.querySelector(".div-main");

  for (const proyect of data.items) {
    // title;
    var nameEl = templateEl.content.querySelector(".proyect-name");
    nameEl.textContent = proyect.fields.titulo;
    //description
    var descriptionEl = templateEl.content.querySelector(
      ".proyect-description"
    );
    descriptionEl.textContent = proyect.fields.descripcion;
    // url
    var urlEl = templateEl.content.querySelector(".proyect-see");
    urlEl.href = proyect.fields.url;
    // img;
    var imgEl = templateEl.content.querySelector(".proyect-img");
    imgEl.src = searchImg(proyect.fields.imagen.sys.id, data);

    const clone = document.importNode(templateEl.content, true);
    conteinerProyectsEl.appendChild(clone);
  }
}

function conectApi() {
  fetch(
    "https://cdn.contentful.com/spaces/axlyjh8b1j3v/environments/master/entries?access_token=jPtA8OpLYR3jr7_PQLBoy-lP8Wl1D4uZw4MYkvmcTUM"
  )
    .then((response) => response.json())
    .then((data) => {
      setHtml(data);
    });
}

function main() {
  conectApi();
}

main();
