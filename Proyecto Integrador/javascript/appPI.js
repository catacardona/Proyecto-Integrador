window.onload = function(){
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayPeliculasPopulares = informacion.results
      console.log(arrayPeliculasPopulares);

      for (var i = 0; i < arrayPeliculasPopulares.length; i++) {
        var id = arrayPeliculasPopulares[i].id
        var titulo = arrayPeliculasPopulares[i].title
        var url= arrayPeliculasPopulares[i].poster_path

        document.querySelector('.populares').innerHTML += '<li><img src="https://image.tmdb.org/t/p/w500' + url + '" alt="" uk-cover><div class="uk-position-center uk-position-small uk-text-center uk-light"><h2 class="uk-margin-remove">' + titulo + '</h2></div></li>'
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })



  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayMejorPuntaje = informacion.results
      console.log(arrayMejorPuntaje);

      for (var i = 0; i < arrayMejorPuntaje.length; i++) {
        var id = arrayMejorPuntaje[i].id
        var titulo = arrayMejorPuntaje[i].title
        var url= arrayMejorPuntaje[i].poster_path

        document.querySelector('.toprated').innerHTML += '<li><img src="https://image.tmdb.org/t/p/w500' + url + '" alt="" uk-cover><div class="uk-position-center uk-position-small uk-text-center uk-light"><h2 class="uk-margin-remove">' + titulo + '</h2></div></li>'
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })

  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US&page=1")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayProximosEstrenos = informacion.results
      console.log(arrayProximosEstrenos);

      for (var i = 0; i < arrayProximosEstrenos.length; i++) {
        var id = arrayProximosEstrenos[i].id
        var titulo = arrayProximosEstrenos[i].title
        var url= arrayProximosEstrenos[i].poster_path

        document.querySelector('.upcoming').innerHTML += '<li><img src="https://image.tmdb.org/t/p/w500' + url + '" alt="" uk-cover><div class="uk-position-center uk-position-small uk-text-center uk-light"><h2 class="uk-margin-remove">' + titulo + '</h2></div></li>'
      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })
}
