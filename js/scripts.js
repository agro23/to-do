// initialization

var itemsList = [];

// Business Logic

function Item (name, done) { // Place constructer
  this.name = name;
  this.done = done;
};

function clearForm(){
  // $("#item").val("");
  $("#list")[0].reset();
}

function showItemsByName(){
// if item.done is true then strikethrough the text via CSS by adding the class "done" to it
  var myList = "";
  var killButtons = "";
  var checkBoxes = "";
  console.log ("These are the items on your list:");
  for (i=0; i<itemsList.length; i++){
    checkBoxes = checkBoxes + "<input class='checkbox' id='check" + i + "' type='checkbox' width='15'>"
    myList = myList + "<p id='item" + i + "'>" + itemsList[i].name.toUpperCase() + "</p>";
    killButtons = killButtons + '<button type="button" name="button" class="btn-danger killMe" id="kill'+i+'"' + '>X</button>';
}
  console.log("items list: " + myList);
  $("#checkBoxes").html(checkBoxes + "<br>")
  $("#listView").html(myList+"<br>");
  $("#killButtons").html(killButtons + "<br>");

}

function addItemToList (name) { // input values from form
  // note program assumes added items are NOT completed.
  var myItem = new Item(name, false);
  itemsList.push(myItem);
  console.log("Added: " + myItem.name);
}

function killClicked(){
  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("Items String is: " + itemsList[x].name);
    console.log("Killbuttons is: " + killButtons);
    itemsList.splice(x, 1);
    showItemsByName();
    clearForm();
    killClicked();
  });
};
// }

$(document).ready(function() {

  $('form#list').submit(function(event){
    event.preventDefault();
    console.log("Got the list item: " + $("#item").val());
    addItemToList($("#item").val());
    showItemsByName();
    clearForm();
    killClicked();
  });

  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("itemsList String is: " + itemsList[x].name);
    itemsList.splice(x, 1);
    showItemsByName();
  });

});
