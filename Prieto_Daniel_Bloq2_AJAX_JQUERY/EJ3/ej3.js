$(document).ready(function(){
$.get("ej3xml.xml", function (xml) {

    $(xml).find("persona").each(function () {

    var name = $(this).find('name').text();
    var description = $(this).find('description').text();
    var sex = $(this).find('sex').text();

    alert(name + " " + description + " " + sex);

    });
})
});