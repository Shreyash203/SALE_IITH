// Amazon Cognito Configuration
const cognitoConfig = {
    domain: "https://saleiith.auth.ap-south-1.amazoncognito.com", // Cognito domain
    clientId: "583h62mgns7iaojkp6t6hnhmfm",                      // Client ID
    redirectUri: window.location.href,                           // Use the current URL as the redirect URI
};

// Get the authentication token from the URL
const getToken = () => new URLSearchParams(window.location.hash.substring(1)).get("id_token");

// Ensure the user is authenticated
const ensureAuthenticated = () => {
    const token = getToken();
   
        console.log("Authenticated with token:", token);
        
    
};

// Check authentication on page load
ensureAuthenticated();
