// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
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

// Reference to your entire Firebase database
var myFirebase = firebase.database().ref();

// Get a reference to the recommendations object of your Firebase.
// Note: this doesn't exist yet. But when we write to our Firebase using
// this reference, it will create this object for us!
var recommendations = myFirebase.child("recommendations");

// Push our first recommendation to the end of the list and assign it a
// unique ID automatically.
recommendations.push({
    "title": "The danger of a single story",
    "presenter": "Chimamanda Ngozi Adichie",
    "link": "https://www.ted.com/talks/chimamanda_adichie_the_danger_of_a_single_story"
});
