
var config = {
  apiKey: "AIzaSyCqV6kTTwa0E6n7qg5my2vwHPP2-IGIvaw",
  authDomain: "stockwrapinfo-5ec9e.firebaseapp.com",
  databaseURL: "https://stockwrapinfo-5ec9e.firebaseio.com",
  projectId: "stockwrapinfo-5ec9e",
  storageBucket: "",
  messagingSenderId: "737116197699"
};

// Initialize your Firebase app
firebase.initializeApp(config);

var user_data = firebase.database().ref("user_data");
var submitData = function () {
  var fname = $("#fName").val();
  user_data.push({
    "First_Name": fname,
    "Second_Name": sname,
    "EmailID": email,
    "Country_Code": ccode,
    "Contact_Number": cnumber
  });
};


$(window).load(function(){
  $("#userdataForm").submit(submitData);
})
