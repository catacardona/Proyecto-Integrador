window.onload = function(){
  var urlParams = new URLSearchParams(window.location.search);

  var query = urlParams.get('busqueda');

  var url = "https://api.themoviedb.org/3/search/movie?api_key=0c400c447b681b6753c82605b0973bd4&query=" + query + " &page=1&include_adult=true"

  fetch(url)
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayPeliculas = informacion.results
      console.log(arrayPeliculas);

      for (var i = 0; i < arrayPeliculas.length; i++) {
        var id = arrayPeliculas[i].id
        var titulo = arrayPeliculas[i].title
        var url2= arrayPeliculas[i].poster_path
        console.log("https://image.tmdb.org/t/p/w500" + url2);

        // <li>
        //     <img src="images/slider1.jpg" alt="">
        //     <div class="uk-position-center uk-panel"><h1>1</h1></div>
        // </li>

        document.querySelector('ul.peliculas').innerHTML += "<li><a href='pagina5.html?id=" + id + "'><img src='https://image.tmdb.org/t/p/w500" + url2 +"' alt=''><div class='uk-position-center uk-panel'></h2></div></li>"
        if (arrayPeliculas = null){
          document.querySelector('ul.peliculas').innerHTML += "<li><img src='../imagenes/contenido-no-disponible.jpg'><div class='uk-position-center uk-panel'></h2></div></li>"
        }
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })
}
