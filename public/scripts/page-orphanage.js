const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-19.9182925, -43.9457874], 15);

// create and add tilelyer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker icon
L.marker([-19.9182925, -43.9457874], { icon: icon }).addTo(map);

/* image galary */

function selectImage(event) {
  const button = event.currentTarget;

  console.log(button.children);

  // remover todas as classes 'active'
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar container de image
  imageContainer.src = image.src;

  // adicionar a classe .active para este botão clicado
  button.classList.add("active");
}
