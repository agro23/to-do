// initialization

var itemsList = [];

// Business Logic

function Item (name, done) { // Place constructer
  this.name = name;
  this.done = done;
};

function clearForm(){
  $("#name").val("");
}

function showItemByName(){
// if item.done is true then strikethrough the text via CSS by adding the class "done" to it
  var itemsList = "";
  var killButtons = "";
  console.log ("These are the places you've visited:");
  for (i=0; i<places.length; i++){
    // placesList = placesList + "<col-lg-11><p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p>"+"<col-lg-1 id='kill'>X</col>";
    placesList = placesList + "<p class='clickable' id='place" + i + "'>" + places[i].name.toUpperCase() + "</p>";
    killButtons = killButtons + '<button type="button" name="button" class="btn-danger killMe" id="kill'+i+'"' + '>X</button>';
}
  console.log("places list: " + placesList);
  $("#viewport").html(placesList+"<br>");
  $("#killButtons").html(killButtons + "<br");
}

// function nameClicked(index){
//   var myLocation = "";
//     myLocation = myLocation + places[index].name + "<br>"
//     myLocation = myLocation + places[index].date + "<br>"
//     myLocation = myLocation + places[index].landmark + "<br>"
//     myLocation = myLocation + places[index].season + "<br>"
//     myLocation = myLocation + places[index].note + "<br>"
//   $("#recordView").html(myLocation);
// }

function addItemToList (name) { // input values from form
  var myPlace = new Place(index, name, date, landmark, season, note);
  places.push(myPlace);
  console.log("Added: " + myPlace.name);
}

function placeClicked(){
  $(".clickable").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1];
    var record = "";
      record = record + places[x].name + "<br>"
      record = record + places[x].date + "<br>"
      record = record + places[x].landmark + "<br>"
      record = record + places[x].season + "<br>"
      record = record + places[x].note + "<br>"
    $('#recordView').html(record);
  });
}

function killClicked(){
  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("Places String is: " + places[x].name);
    console.log("Killbuttons is: " + killButtons);
    places.splice(x, 1);
    showPlacesByName();
    killClicked();
  });
};
// }

$(document).ready(function() {

  $('form#list').submit(function(event){
    event.preventDefault();
    console.log("Got the list item: " + $("#item").val());
    // addItemToList($("#item").val());
    // show the list
  });

  $(".killMe").click(function(event){
    event.preventDefault();
    x = this.id[this.id.length -1]; // x is the index of the kill button
    console.log("killButtons x: " + x);
    console.log("Places String is: " + places[x].name);
    places.splice(x, 1);
    showPlacesByName();
  });

});
