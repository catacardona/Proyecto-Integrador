window.onload = function(){


  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion){
      console.log(informacion);

      var arrayGeneros = informacion.genres
      console.log(arrayGeneros);

      for (var i = 0; i < arrayGeneros.length; i++) {
        var id = arrayGeneros[i].id
        var generos = arrayGeneros[i].name

      document.querySelector('.generos').innerHTML += "<li> <a href='pagina3.html?idDeGenero="+ id +"'>" + generos + "</a> </li>"


      }
    })
    .catch(function(error){
      console.log("Error" + error);
    })
}
