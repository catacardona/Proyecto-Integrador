window.addEventListener("load", function() {

// trailer
  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('id');

  fetch("https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")

// detalle
  fetch("https://api.themoviedb.org/3/movie/" + query + "?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);
      var una_pelicula = document.querySelector(".una_pelicula")
      una_pelicula.innerHTML = "<h1>" + informacion.title + "</h1>"
<<<<<<< HEAD
      una_pelicula.innerHTML += "<h2> <img src='https://image.tmdb.org/t/p/w500" + informacion.poster_path +"'alt=''</h2>"
      una_pelicula.innerHTML += "<h2>" + informacion.release_date + "</h2>"
      una_pelicula.innerHTML += "<h2>" + informacion.original_language + "</h2>"
      una_pelicula.innerHTML += "<h2>" + informacion.overview + "</h2>"
      una_pelicula.innerHTML += "<h2>" + informacion.genres + "</h2>"
      una_pelicula.innerHTML += "<button id='botonFavorito' name='"+informacion.id+"' class='estrellita'> &#9733; </button> "




      // alert("pelis prefe")

      var arrayPelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"))

      // function agregarFavoritos(id) {
        var boton = document.querySelector("#botonFavorito")
        console.log(boton.name);
        boton.addEventListener("click",function(){

          alert("me clickearon!")

          if (arrayPelisFavoritas == null) {
            arrayPelisFavoritas = []
            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

          }else if(arrayPelisFavoritas.indexOf(boton.name)===-1){

            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

          } else {
            console.log(arrayPelisFavoritas.indexOf(boton.name));
            arrayPelisFavoritas.splice(arrayPelisFavoritas.indexOf(boton.name),1);
            console.log(arrayPelisFavoritas)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
          }

          console.log(boton.name);
          console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

        })

=======
      una_pelicula.innerHTML += "<h2> <img src='https://image.tmdb.org/t/p/w500" + informacion.poster_path +"'alt=''<h2>"
      una_pelicula.innerHTML += "<h2>" + 'Sinopsis:' + " " + informacion.overview + "</h2>"
      una_pelicula.innerHTML += "<h2>" + 'Generos a los que pertence:' + " " + informacion.genres + "</h2>"
      una_pelicula.innerHTML += "<h2>" + 'Lenguaje original:' + " " + informacion.original_language + "</h2>"
      una_pelicula.innerHTML += "<h2>" + 'Fecha de estreno:' + " " + informacion.release_date + "</h2>"
>>>>>>> master

    })
    .catch(function(error){
      console.log("Error" + error);
    })


})
