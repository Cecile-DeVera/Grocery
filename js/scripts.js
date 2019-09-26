$(document).ready(function() {
  var groceries = [];
  $("form").submit(function(event) {
    $("#userList ul").empty();
    $("#userList").show();
    var groceryItemValue = $("#groceryItem").val();
    groceries.push(groceryItemValue);
    var alphabetizedGroceries = groceries.sort();
    alphabetizedGroceries.forEach(function(grocery) {
      $("#userList ul").append("<li>" + grocery + "</li>");
    })
    event.preventDefault();
  });
});
