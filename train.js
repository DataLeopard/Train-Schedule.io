  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8p-Fmm0DWi5rw7Jy-t-kHKsijS-OR8zc",
    authDomain: "train-schedule-e61b9.firebaseapp.com",
    databaseURL: "https://train-schedule-e61b9.firebaseio.com",
    projectId: "train-schedule-e61b9",
    storageBucket: "train-schedule-e61b9.appspot.com",
    messagingSenderId: "334264905059"
  };
 
  firebase.initializeApp(config);

  $(document).ready(function(){
    $('#submitButton').on('click', function ());
    alert ('You have clicked');

  });
//this declares the variable which will store data retrieved from firebase server
var database = firebase.database();

//this is not right but the intention is to fill these variables with updated database info
var trainName = snapshot.val();
var trainDestination = snapshot.val();
var firstTrain = snapshot.val();)
var trainFrequency = snapshot.val();

//this actually retrieves the data everytime there is a change
database.on("value", function(snapshot))

// If this is assembled correctly, any changes made to firebase should log
console.log(snapshot.val());

// This should update the html var trainName with database changes
$("#trainName").text(snapshot.val());

// this simply stores any errors 
}, function(errorObject) {

// If there is an error this is how it will present on console.log
  console.log("The read failed: " + errorObject.code);
});

 // $submitButton.(on.click)
//jquery submit listener to create new database entry

$(document).ready(function () {
  var param = {name: "Blue", destination: "London", first: "1200", frequency: "25"};

  $.ajax({
    url: 'https://train-schedule-e61b9.firebaseio.com/.json',
    type: "POST",
    data: JSON.stringify(param),
    success: function () {
      alert("success");
    },
    error: function(error) {
      alert("error: "+error);
    }
  });
});

