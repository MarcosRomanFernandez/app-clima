
// Define constantes
const urlBase = 'https://api.openweathermap.org';
const api_key = 'ebddb8ab35abbf096c17e0e081eca6c1';
const difkelvin = 273.15;

//* Obtener elementos del DOM *//
const botonBusqueda = document.getElementById('botonBusqueda');
const ciudadEntrada = document.getElementById('ciudadEntrada');
const divDatosClima = document.getElementById('datosClima');

    //* Agregar evento al botón de búsqueda *//
botonBusqueda.addEventListener('click', async () => {
    const ciudad = ciudadEntrada.value;
    if (ciudad) {
        await fetchDatosClima(ciudad);
    }
});

    //* Obtener datos climáticos *//
const fetchDatosClima = async (ciudad) => {
    try {
        const response = await fetch(`${urlBase}/data/2.5/weather?q=${ciudad}&appid=${api_key}`);
        const data = await response.json();
        mostrarDatosClima(data);
    } catch (error) {
        console.error('Error al obtener datos climáticos:', error);
    }
};

    //* Mostrar datos climáticos *//
const mostrarDatosClima = (data) => {
    divDatosClima.innerHTML = '';
    const { name: ciudadNombre, sys: { country: paisNombre }, main: { temp: temperatura, humidity: humedad }, weather: [{ description, icon }] } = data;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difkelvin)}°C`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La humedad es ${humedad}%`;

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 
    iconoInfo.alt = 'Imagen del clima';
    iconoInfo.classList.add('img-clima');

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción meteorológica es: ${description}`;

    const paisNombreInfo = document.createElement('p');
    paisNombreInfo.textContent = `País: ${paisNombre}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(paisNombreInfo);
};
//* soy un programador de la concha de la lora *//