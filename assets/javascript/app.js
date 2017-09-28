var config = {
    apiKey: "AIzaSyDR7s1Wj7LKfZi1kZsEgrU0kr4DFsgDae8",
    authDomain: "original-project-bd8d1.firebaseapp.com",
    databaseURL: "https://original-project-bd8d1.firebaseio.com",
    projectId: "original-project-bd8d1",
    storageBucket: "original-project-bd8d1.appspot.com",
    messagingSenderId: "1084030885291"
  };

  firebase.initializeApp(config);


var database = firebase.database();

var player1 = $("player1");
var player2 = $("player2");
var name = "";
var wins = "";
var losses = "";

player1.empty();
player2.empty().

player1.text("Waiting for Player 1");
player2.text("Waiting for Player 2");


$("#submit").on("click", function() {
  event.preventDefault();

if ("player1").text() === "Waiting for Player 1"
  database().ref().set(){
    clicks:name;
  }

 database().ref().on("value", function(snapshot){
  

 }) 

});
