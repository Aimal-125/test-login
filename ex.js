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
     FB.api('/me', {fields: "name, email, picture"}, function(response) {
      document.querySelector("#name").innerHTML = "Name: " + response.name;
      document.querySelector("#email").innerHTML = "Email: " + response.email;
      document.querySelector("#pic").innerHTML = '<img src="response.picture.data.url" alt="aimal" />';
    });
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }
 }, {scope: "public_profile, email"});
}