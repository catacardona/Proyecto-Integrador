window.addEventListener("load",function() {


  arrayPelisFavoritas = (JSON.parse(window.sessionStorage.getItem("favorita"));

  if (arrayPelisFavoritas.length>0) {

    for (var i = 0; i < arrayPelisFavoritas.length; i++) {
      arrayPelisFavoritas[i]


    var url = "" + arrayPelisFavoritas[i]
    var urlImg= "http://image.tmdb.org/t/p/original"

    fetch(url)
    .then(function(respuesta){
      return respuesta.json()
    })
   .then(function(informacion)) {
     console.log(informacion)
     var ul = document.querySelector("section ul") (crear un ul en html)
     var li;

     li = "<li>"
     li += "<a href=''></a>"
     li += "<h2>"+pelicula.title+"</h2>"
     li += "<img src=''" +urlImg+ pelicula.poster_path + "'>"
     li += "</a>"
     li+= "</li>"

     ul.innerHTML += li

   })



}

})

.catch(function(error){
  console.log("Error" + error);
})
