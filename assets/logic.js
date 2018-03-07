 $(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBxkkFYLEXpJWPfrwACgu2c1lT-CRiMsP4",
    authDomain: "trainscheduler-aa6f3.firebaseapp.com",
    databaseURL: "https://trainscheduler-aa6f3.firebaseio.com",
    projectId: "trainscheduler-aa6f3",
    storageBucket: "trainscheduler-aa6f3.appspot.com",
    messagingSenderId: "190914099169"
};

firebase.initializeApp(config);

var database = firebase.database();


var trainInfo = {
  name: "",
  destination: "",
  firstTrain: 0000,
  frequency: 0
}

  // on submit adds value to trainInfo obj properties
   $("#trainAddForm").on("submit", function (event) {
    event.preventDefault();

    trainInfo.name = $("#trainName").val().trim();
    trainInfo.destination = $("#trainDestination").val().trim();
    trainInfo.firstTrain = $("#firstTrainTime").val().trim();
    trainInfo.frequency = $("#trainFrequency").val().trim();

    database.ref().push(trainInfo);

     $('#trainAddForm :input').val('');

    console.log(trainInfo);
    

    


   });


   database.ref().on("child_added", function(childSnapshot, prevChildKey){
     console.log(childSnapshot.val());

     trainInfo.name = childSnapshot.val().name;
     trainInfo.destination = childSnapshot.val().destination;
     trainInfo.firstTrain = childSnapshot.val().firstTrain;
     trainInfo.frequency = childSnapshot.val().frequency;

     console.log(trainInfo.name);
     console.log(trainInfo.destination);
     console.log(trainInfo.firstTrain);
     console.log(trainInfo.frequency);
     
     $("#trainRows").append("<tr><td>" + trainInfo.name + "</td><td>" + trainInfo.destination + "</td><td>" +
       trainInfo.firstTrain + "</td><td>" + trainInfo.frequency + "</td><td>" + "next arrival" + "</td><td>" + "minutes away" + "</td></tr>");

     
   });
  //  When adding trains, administrators should be able to submit the following:

  //  Train Name

  //  Destination

  //  First Train Time-- in military time

  //  Frequency-- in minutes

  //  Code this app to calculate when the next train will arrive; this should be relative to the current time.

  //  Users from many different machines must be able to view same train times.











 });