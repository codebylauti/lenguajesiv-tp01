const geolocationButton = document.getElementById('geolocation-button')
const geolocationDiv = document.getElementById('geolocation')

geolocationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    console.error('NO API available for geolocalization')
    return
  }

  const succesCallback = (position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    geolocationDiv.innerHTML = `
    <p>Latitud: ${latitude} - Longitud: ${longitude}</p>
    <a href="https://www.google.com/maps?q=${latitude},${longitude}" target="_blank" rel="noopener noreferrer">Tu ubicación</a>`;
}

  const errorCallback = (error) => {
    console.error(error)
    geolocationDiv.innerHTML = 'Error al consultar su geolocalización'
  }

  navigator.geolocation.getCurrentPosition(succesCallback, errorCallback)
})

const imageInput = document.getElementById('image-input')
const imageDiv = document.getElementById('image')

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];

  if (!file) return;
  if (!/^image\/*/.test(file.type)) {
    console.error('El archivo no es una imágen')
    imageDiv.innerHTML = 'El archivo no es una imágen'
    return
  }

  const imageUrl = URL.createObjectURL(file);

  imageDiv.innerHTML = `
    <img src="${imageUrl}" alt="preview" style="max-width: 100%; height: auto;" />
  `;
});
