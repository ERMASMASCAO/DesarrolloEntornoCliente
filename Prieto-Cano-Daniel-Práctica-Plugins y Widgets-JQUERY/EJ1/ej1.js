jQuery.fn.desaparece = function() {
    this.each(function(){
       elem = $(this);
       elem.css("display", "none");
    });   
    return this;
};
$(document).ready(function(){
    $("#botonDesaparecer").click(function() {
        $("p").desaparece();
    });
});
