$(document).ready(function() {
  $("#wrapper").css("background-color", "cornflowerblue");

  var adder = function(num1, num2) {
    return num1 + num2;
  }

  var subtractor = function(num1, num2) {
    return num1 - num2;
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
  });

  $("#functions_container > a").not("#equals").click(function() {
    operator = $(this).text();
    newnumber = number;
    number = '';
    totaldiv.text('0');
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
