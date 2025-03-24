 mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/standard', // Map style
    center: listing.geometry.coordinates, // Initial map center [lng, lat]
    zoom: 9 // Initial zoom level
});

const marker = new mapboxgl.Marker({color: "red"  })
.setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
.setPopup(new mapboxgl.Popup({ offset: 25})
.setHTML(`<h4>${listing.title}</h4> <p>Exact Location will be provided after booking</p>`))
.addTo(map);