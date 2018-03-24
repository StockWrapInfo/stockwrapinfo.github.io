<script>

var config = {
  apiKey: "AIzaSyCqV6kTTwa0E6n7qg5my2vwHPP2-IGIvaw",
  authDomain: "stockwrapinfo-5ec9e.firebaseapp.com",
  databaseURL: "https://stockwrapinfo-5ec9e.firebaseio.com",
  projectId: "stockwrapinfo-5ec9e",
  storageBucket: "",
  messagingSenderId: "737116197699"
};
firebase.initializeApp(config);


// Reference to the recommendations object in your Firebase database
var test_fb = firebase.database().ref("test_fb");

// Save a new recommendation to the database, using the input in the form
var submitTest_fb = function () {

  // Get input values from each of the form elements
  var fname = $("#first_name").val();

  // Push a new recommendation to the database using those values
  test_fb.push({
    "First_Name": fname

  });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#test_fb1").submit(submitTest_fb);

});
</script>
