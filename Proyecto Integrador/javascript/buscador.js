window.addEventListener('load', function(){

  var form = document.querySelector(".form-buscador")

  form.onsubmit = function(evento) {
    evento.preventDefault()
    var buscador = document.querySelector('#input-buscador')
    console.log(buscador.value);
    window.location = 'pagina4.html?busqueda=' + buscador.value
  }

})
