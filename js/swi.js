
// Moving in same page
$(function(){
  $("#nav a").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash);
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


// Form Validation
  function validate(e) {
    var fname = document.getElementById("fName").value;
    var sname = document.getElementById("sName").value;
    var emailid = document.getElementById("Email").value;
    var ccode = document.getElementById("cCode").value;
    var cnumber = document.getElementById("cNumber").value;
    if (fname.length === 0) {
        alert("You must enter a First Name !!!");
        e.preventDefault();
        return;
    }

    if (emailid.length === 0) {
        alert("You must enter a valide Email-ID !!!");
        e.preventDefault();
        return;
    }

    if (ccode.length === 0) {
      alert("You must enter a valide Country Code !!!");
      e.preventDefault();
      return;
    }
      var phoneno = /^\d{10}$/;
    if (cnumber.length === 0 ||  cnumber != (cnumber.match(phoneno)) ) {
        alert("You must enter a valide Contact Number !!!");
        e.preventDefault();
        return;
    }

  }

window.onload = function() {
    document.getElementById("Form1").addEventListener("submit", function(e){
        validate(e);
    });

  }


  $(function(){
      $("#Bttn").click( function () {
          setTimeout(function(){
              document.getElementById('fName').value = "";
              document.getElementById("sName").value = "";
              document.getElementById("Email").value = "";
              document.getElementById("cCode").value = "";
              document.getElementById("cNumber").value = "";
              document.getElementById("exampleFormControlTextarea1").value = "";
          }, 1000);
      });
  });
