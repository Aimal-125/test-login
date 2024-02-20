window.fbAsyncInit = function() {
    FB.init({
        appId      : '1367467613894184',
        xfbml      : true,
        version    : 'v19.0'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    // The response object provides information about the user's login status
    if (response.status === 'connected') {
        // User logged in successfully
        const accessToken = response.authResponse.accessToken;
        const userID = response.authResponse.userID;

        // Send access token and user ID to your server for authentication and further actions
        console.log("Logged in with Facebook:", accessToken, userID);
    } else {
        // User not logged in
        console.log("User not logged in");
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}