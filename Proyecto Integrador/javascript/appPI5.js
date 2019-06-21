window.addEventListener("load", function() {

// trailer
  //var id= informacion.id

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('id');
  var urlTrailer= ""

  //json se usa para pasar informacion de un servidor a una pagina web
  fetch("https://api.themoviedb.org/3/movie/" + query + "/videos?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      console.log(data.status_code);
        var trailer = data.results[0].api_key
        urlTrailer = '<iframe class="iframe" width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
    .catch(function(error){
      console.log(error);
      return console.log("Error" + error);
    })

// detalle
  fetch("https://api.themoviedb.org/3/movie/" + query + "?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);
      var una_pelicula = document.querySelector(".una_pelicula")
      var arraygeneros= informacion.genres
      var contenidoFinal = "<h1>" + informacion.title +"</h1>"
      contenidoFinal += "<button id='botonFavorito' name='"+informacion.id+"' class='estrellita'> &#9733; </button>"
      contenidoFinal+= "<h2> <img src='https://image.tmdb.org/t/p/w500" + informacion.poster_path +"'alt=''<h2>"
      contenidoFinal += "<h2>" + 'Sinopsis:' + " " + informacion.overview + "</h2>"
      contenidoFinal += "<h2>" + 'Lenguaje original:' + " " + informacion.original_language + "</h2>"
      contenidoFinal += "<h2>" + 'Fecha de estreno:' + " " + informacion.release_date + "</h2>"
      contenidoFinal += "<h2>" + 'Generos a los que pertence:<ul>'
            for (var i=0; i < arraygeneros.length; i++) {
              var id = arraygeneros[i].id
              var genero= arraygeneros[i].name
              contenidoFinal += "<li>" + genero + "</li>"
            }
      contenidoFinal +=  + "</ul></h2>"



      una_pelicula.innerHTML = contenidoFinal


//recomendaciones
var urlParams= new URLSearchParams(window.location.search);
var query = urlParams.get("id");

fetch("https://api.themoviedb.org/3/movie/"+query+"/recommendations?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US&page=1")
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    var ul= document.querySelector("ul.recomendaciones")
    console.log(ul);

    for(var i = 0; i < data.results.length; i++) {
      var id= data.results[i].id;
      var titulo= data.results[i].title;
      var poster = data.results[i].poster_path;

      li = "<li>"
        li += "<p>" + titulo +"</p>"
        li += "<a href=pagina5.html?id="+ id + "'>"
        li += "<img src='https://image.tmdb.org/t/p/w500/"+poster+"'>"
        li += "</a>"
      li += "</li>"

      ul.innerHTML += li
    }
  })
  .catch(function(error){
    return console.log("Error"+ error);
  })

      // alert("pelis prefe")
     //parse cambia un string a un objeto
     //indexof recorre el array
      var arrayPelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"))

      if (arrayPelisFavoritas == null) {

      }else if(arrayPelisFavoritas.indexOf(query)===-1){



      } else {
          document.querySelector("#botonFavorito").style.backgroundColor = "gold"
      }

      // function agregarFavoritos(id) {
        var boton = document.querySelector("#botonFavorito")
        console.log(boton.name);
        boton.addEventListener("click",function(){

          if (arrayPelisFavoritas == null) {
            arrayPelisFavoritas = []
            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))

          }else if(arrayPelisFavoritas.indexOf(boton.name)===-1){

            arrayPelisFavoritas.push(boton.name)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
            document.querySelector("#botonFavorito").style.backgroundColor = "gold"

          }
          //splice devuelve el item eliminado
            else {
            console.log(arrayPelisFavoritas.indexOf(boton.name));
            arrayPelisFavoritas.splice(arrayPelisFavoritas.indexOf(boton.name),1);
            console.log(arrayPelisFavoritas)
            window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
            document.querySelector("#botonFavorito").style.backgroundColor = "white"
          }

          console.log(boton.name);
          console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

        })


    })
    .catch(function(error){
      console.log("Error" + error);
    })


})
