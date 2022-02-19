 export function getLocation() {
  if (!navigator.geoloation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('location not supported by this browser');
  }
};

function showPosition(position) {
  console.log('lat- ', position.coords.latitude, 'lon- ', position.coords.longitude);
};