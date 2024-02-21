window.fbAsyncInit = function() { 
  FB.init({
    appId: '1367467613894184', 
    xfbml: true,
    version: 'v19.0'
  });
};

function loginWithFacebook() {
  FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api("/me", "GET", {"fields": "name, email, gender, id"}, function(response) {
      document.querySelector("#name").innerHTML = "Name: " + response.name;
      document.querySelector("#email").innerHTML = "Email: " + response.email;
      document.querySelector("#gender").innerHTML = "Gender: " + response.gender;
      document.querySelector("#id").innerHTML = "ID: " + response.id;
    });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 });
}