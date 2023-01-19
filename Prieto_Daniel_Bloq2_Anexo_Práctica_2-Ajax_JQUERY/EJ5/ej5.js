$(document).ready(function(){

   $("#boton").click(function () {

      $.getJSON("api.json",function (país) {
         var ns = país.countries;
         var length = " ";
         ns.forEach(function(countries){
            length=length+"Nombre: "+countries.name_en+"<br/> ";
         })

         $("#contenedor").html(length);

      }).fail(function(){

         $("#contenedor").text("Error, no funciona")
      })
   })
})
