$(function(){
   const config = {
    apiKey: "AIzaSyCqV6kTTwa0E6n7qg5my2vwHPP2-IGIvaw",
    authDomain: "stockwrapinfo-5ec9e.firebaseapp.com",
    databaseURL: "https://stockwrapinfo-5ec9e.firebaseio.com",
    projectId: "stockwrapinfo-5ec9e",
    storageBucket: "stockwrapinfo-5ec9e.appspot.com",
    messagingSenderId: "737116197699"
  };
  firebase.initializeApp(config);
  $(".js-form").on('submit', event => {
    event.preventDefault();
    const First_Name = $('#fName').val();
    const Second_Name = $('#sName').val();
    const EmailID = $('#Email').val();
    const Country_Code = $('#cCode').val();
    const Contact_Number = $('#cNumber').val();
    console.log(First_Name,Second_Name,EmailID,Country_Code,Contact_Number);
    firebase.database().ref('Subscriber_Details').push({
      First_Name,Second_Name,EmailID,Country_Code,Contact_Number,
      })
    });
    

});
