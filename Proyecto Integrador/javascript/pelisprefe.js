window.addEventListener("load",function() {



  var arrayPelisFavoritas = (JSON.parse(window.sessionStorage.getItem("favorita")))
  console.log(arrayPelisFavoritas);
  if (arrayPelisFavoritas != null) {

    for (var i = 0; i < arrayPelisFavoritas.length; i++) {



    var url = "https://api.themoviedb.org/3/movie/"+ arrayPelisFavoritas[i].id +"?api_key=0c400c447b681b6753c82605b0973bd4&language=en-US" + arrayPelisFavoritas[i]
    var urlImg= "http://image.tmdb.org/t/p/original"

    fetch(url)
    .then(function(respuesta){
      return respuesta.json()
    })
   .then(function(informacion) {
     console.log(informacion)
     var ul = document.querySelector("section ul")
     var li;

     li = "<li>"
     li += "<a href=''></a>"
     li += "<h2>"+informacion.title+"</h2>"
     li += "<img src='" +urlImg+ informacion.poster_path + "'>"
     li += "</a>"
     li+= "</li>"

     ul.innerHTML += li

   })


   .catch(function(error){
     console.log("Error" + error);
   })

}

}else {
  // alert('No tenes pelis favoritas')
}//termina el if


})//windows on load
