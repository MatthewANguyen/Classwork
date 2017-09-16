// Initialize Firebase
var config = {
  apiKey: "AIzaSyC9RWIaZk2CJoSn8rnQ-0b-im7mKraIZcM",
  authDomain: "employeedatabase-f8ea4.firebaseapp.com",
  databaseURL: "https://employeedatabase-f8ea4.firebaseio.com",
  projectId: "employeedatabase-f8ea4",
  storageBucket: "",
  messagingSenderId: "73250094484"
};
firebase.initializeApp(config);
var database = firebase.database();

$("#submit").on("click", function() {
  event.preventDefault();
  database.ref().push({
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    date: $("#date").val().trim(),
    rate: $("#rate").val().trim(),
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

database.ref().limitToLast(10).on("child_added", function(snapshot) {
  var months = 9 - parseInt(snapshot.val().date.substring(0,2));
  var years = 0; 
  if (parseInt(snapshot.val().date.substring(6)) <= 17){
    years = 12 * (17 - parseInt(snapshot.val().date.substring(6)));
  } else {
    years = 12*17 + (12* (100 - parseInt(snapshot.val().date.substring(6))));
  };
  var monthsWorked = months + years;
    $("<tr>")
      .append($("<td>").html(snapshot.val().name))
      .append($("<td>").html(snapshot.val().role))
      .append($("<td>").html(snapshot.val().date))
      .append($("<td>").html(monthsWorked))
      .append($("<td>").html(parseInt(snapshot.val().rate)))
      .append($("<td>").html(monthsWorked * parseInt(snapshot.val().rate)))
      .appendTo("tbody");
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });