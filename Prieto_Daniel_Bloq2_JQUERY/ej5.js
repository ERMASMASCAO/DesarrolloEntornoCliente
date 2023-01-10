$(document).ready(function(){
    parrafo = $("p");
    $(parrafo).mouseover(function() {
    $(parrafo).addClass("parrafo");
})
    $(parrafo).mouseout(function(){
    $(parrafo).removeClass("parrafo");
    })
})

