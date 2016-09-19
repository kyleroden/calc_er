$(document).ready(function() {
  $("#wrapper").css("background-color", "cornflowerblue");
  //check if the current_operation div can be written to (delete this later)
  $("#current_operation").text('test');
  var write_current_operation = function(val){
    var current_input  = '';
    current_input += val;
    $("#current_operation").text(current_input);
    console.log(val);
  }

  var number = '';
  var newnumber = '';
  var operator = '';
  var totaldiv = $("#total_container");
  $(totaldiv).text("0");

  //click event handlers
  $("#numbers_container a").not("#clear, #allclear").click(function() {
    number += $(this).html();
    $(totaldiv).text(number);
    write_current_operation(number);
  });

  $("#functions_container > a").not("#equals").click(function() {
    operator = $(this).text();
    newnumber = number;
    number = '';
    write_current_operation(operator);
    //totaldiv.text('0');
  });

  $("#clear").click(function() {
    number = '';
    totaldiv.text("0");
  });
  $("#allclear").click(function() {
    number = '';
    totaldiv.text("0");
    newnumber = '';
  });
  $("#equals").click(function() {
    var results;
    switch (operator) {
      case "+":
        results = (parseInt(newnumber, 10) + parseInt(number, 10)).toString();
        break;
      case "-":
        results = (parseInt(newnumber, 10) - parseInt(number, 10)).toString();
        break;
      case "/":
        results = (parseInt(newnumber, 10) / parseInt(number, 10)).toString();
        break;
      case "*":
        results = (parseInt(newnumber, 10) * parseInt(number, 10)).toString();
        break;
    }
    totaldiv.text(results);
  });
});
