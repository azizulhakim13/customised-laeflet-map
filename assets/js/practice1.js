const options = {
  coordinates: [40, 40],
  name: "Unicorn Company",
  adress: "123 whatever boulevard",
  postalCode: "000000",
  city: "Bear town",
  website:  ["https://www.example.com/", "example.com →"],
  socialMedia: ["https://www.linkedin.com/", "Linkedin →"]
}


// Defining the map
let map = L.map("map", {
  center: options.coordinates,
  zoom: 9,
  scrollWheelZoom: false
});

// Basemap config
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Setting the company logo as a custom icon
let myIcon = L.divIcon({
  className: "logo",
  iconSize: [45, 72],
  iconAnchor: [22.5, 72],
  popupAnchor: [0, -72]
});



// adding the marker
L.marker(options.coordinates, { icon: myIcon })
  .addTo(map)
  .bindPopup(
    L.popup({}).setContent(
      `<h3>${options.name}</h3>
      <p>${options.adress}</p>
      <p>${options.postalCode}, ${options.city}</p>
      <div class="links">
        <a href="${options.website[0]}">${options.website[1]}</a>
        <a href="${options.socialMedia[0]}">${options.socialMedia[1]}</a>
      </div>`
    )
  )
.openPopup();
