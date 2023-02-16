window.onload = function(){

    var XMLHttpRequestObject = false;
    if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
    } 
    if(XMLHttpRequestObject) {
        var lugar = document.getElementById("contenedor");
        XMLHttpRequestObject.open("GET", "oracion.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&
        XMLHttpRequestObject.status == 200) {
        lugar.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }       
}
    $(document).ready(function() {
        $("#botonColor").click(function() {
        $("#contenedor").animate({
            backgroundColor: "red"
        }, 1000 );
        });

        $("#imagenfundido").hover(function() {
            $(this).fadeTo(100, 0);
          }, function() {
            $(this).fadeTo(100, 1);
          });
        
    });


    
