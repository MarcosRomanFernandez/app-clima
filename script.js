
let urlBase = 'https://api.openweathermap.org'
let api_key = 'ebddb8ab35abbf096c17e0e081eca6c1'
let difkelvin = 273.15
 //* Cramos Boton de Busqueda *//
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
})
    //* Fetch *//
const fetchDatosClima = ciudad=>{
    fetch(`${urlBase}/data/2.5/weather?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}
    //* Mostramos el Resultado de la busqueda *//
const mostrarDatosClima = data=>{
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es: ${Math.floor(temperatura - difkelvin)}°C`
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es ${humedad}%`
    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`
    iconoInfo.alt = "imagen del clima";
    iconoInfo.classList.add("img-clima");
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`
    const paisNombreInfo = document.createElement('p')
    paisNombreInfo.textContent = `País: ${paisNombre}`
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(paisNombreInfo)
    divDatosClima.appendChild(humedadInfo)
}