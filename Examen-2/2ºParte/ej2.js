$(document).ready(function() {
    $("input[type='radio']").click(function() {
      if ($("#radio-marruecos").is(":checked")) {
        $("#price").text("600€");
      } else if ($("#radio-india").is(":checked")) {
        $("#price").text("1000€");
      } else {
        $("#price").text("");
      }
    });
    $("#extras-checkbox").click(function() {
        if ($("#extras-checkbox").is(":checked")) {
          $.ajax({
            type: "get",
            url: "extras.txt",
            success: function(data) {
            $("#extras").html(data)
            $("#extras").animate({
                borderWidth: '20px',
                fontSize: '25pt'
              })
        }}
    )}else {
        $('#extras').html('');
      }
})
});




    
        
    
