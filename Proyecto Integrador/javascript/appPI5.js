window.addEventListener("load", function() {

// trailer
  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('id');


// detalle
  fetch("https://api.themoviedb.org/3/movie/" + query + "?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);
      var una_pelicula = document.querySelector(".una_pelicula")
      una_pelicula.innerHTML = "<h1>" + informacion.title + "</h1>"
      una_pelicula.innerHTML = "<h2> <img src='https://image.tmdb.org/t/p/w500" + informacion.poster_path +"'alt=''</h2>"
      una_pelicula.innerHTML = "<p>" + informacion.release_date + "</p>"
      una_pelicula.innerHTML = "<p>" + informacion.original_language + "</p>"
      

    })
    .catch(function(error){
      console.log("Error" + error);
    })

})
