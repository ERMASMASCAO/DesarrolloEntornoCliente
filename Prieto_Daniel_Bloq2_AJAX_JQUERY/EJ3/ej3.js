$.get("ej3xml.xml", function (xml) {
    $(xml).find("personas").each(function () {
    var name = $(this).find('name').text();
    var description = $(this).find('description').text();
    var sex = $(this).find('sexo').text();
    alert(name + " " + description + " " + sex);
    });
});