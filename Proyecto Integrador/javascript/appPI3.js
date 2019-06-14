window.onload = function(){
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayPeliculasPorGenero = informacion.results
      console.log(arrayPeliculasPorGenero);

      for (var i = 0; i < arrayPeliculasPorGenero.length; i++) {
        var id = arrayPeliculasPorGenero[i].id
        var titulo = arrayPeliculasPorGenero[i].title
        var url= arrayPeliculasPorGenero[i].poster_path

        // <li>
        //     <img src="images/slider1.jpg" alt="">
        //     <div class="uk-position-center uk-panel"><h1>1</h1></div>
        // </li>

        document.querySelector('ul.populares').innerHTML += "<li><img src='https://image.tmdb.org/t/p/w500" + url + "' alt=''><div class='uk-position-center uk-panel'></h2></div></li>"
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })
