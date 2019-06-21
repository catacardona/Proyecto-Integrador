window.addEventListener("load",function() {

  // && opera con booleanos, ambas condiciones tienen que
  //ser verdaderas para que el resultado final sea verdadero
  //!= distinto a 
  if (window.sessionStorage.getItem("nombre") != "" && window.sessionStorage.getItem("nombre") != null) {
    document.querySelector('.fede').innerHTML = window.sessionStorage.getItem("nombre")
  }

  document.querySelector("form.form").addEventListener("submit",function(evento) {
    // evento.preventDefault()
    var name = document.querySelector("input[name='nombre']").value
    console.log(name);
    sessionStorage.setItem("nombre",name)
    sessionStorage.getItem("nombre")
    var email = document.querySelector("input[name='email']").value
    console.log(email);
    sessionStorage.setItem("email",email)
    sessionStorage.getItem("email")
    var genero = document.querySelector("select[name='genero']").value
    console.log(genero);
    sessionStorage.setItem("genero",genero)
    sessionStorage.getItem("genero")


  })




// var arrayPelisFavoritas = []
//
// function agregarFavoritos(id) {
//   alert("me clickearon!")
//
//   if (arrayPelisFavoritas.indexOf(id)===-1){
//
//   arrayPelisFavoritas.push(id)
//   window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
//
//   } else {
//
//     console.log(arrayPelisFavoritas.indexOf(id));
//     arrayPelisFavoritas.splice((arrayPelisFavoritas.indexOf(id),1));
//     console.log(arrayPelisFavoritas)
//     window.sessionStorage.setItem("favorita", JSON.stringify(arrayPelisFavoritas))
//   }
//
//   console.log(id);
//   console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
//
// }

})
