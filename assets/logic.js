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


  //  When adding trains, administrators should be able to submit the following:

  //  Train Name

  //  Destination

  //  First Train Time-- in military time

  //  Frequency-- in minutes

  //  Code this app to calculate when the next train will arrive; this should be relative to the current time.

  //  Users from many different machines must be able to view same train times.











 });