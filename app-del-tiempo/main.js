//var localizacion = window.prompt('Localización');
var tipo = document.getElementById('tiempo');
var descripcion = document.getElementById('desc');
var img = document.getElementById('gif');
var tiempoVariable = "";
var elegido = document.getElementById('elegido');
var temperatura=document.getElementById('temperatura');

const cargarDatos = () => {
    async function getGif() {
        const resp = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=2JYp37k0AdoIRW7ZlTR8ygY5HJ3vTImL&s=' + tiempoVariable, { mode: 'cors' });
        const gif = await resp.json();
        img.src = gif.data.images.original.url;
    }

    async function getTiempo() {
        const datos = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + elegido.value + '&APPID=a9dcdf77bfc1bf02db60cce90cfabad6', { mode: 'cors' });
        const tiempo = await datos.json();
        console.log(tiempo);
        tiempo.weather.forEach(e => {
            console.log(e);
            tipo.textContent = e.main;
            descripcion.textContent = e.description;
            if (e.main == "Rain") {
                tiempoVariable = "Rain";
            } else if (e.main == "Clear") {
                tiempoVariable = "Sun";
            } else if (e.main == "Clouds") {
                tiempoVariable = "clouds";
            }
        })
        var tm=tiempo.main.temp - 273;
        temperatura.textContent="Temperatura actual " + tm + "ºC";;
        getGif();
    }

    getTiempo();
}

cargarDatos();