const Amplify = require('aws-amplify');
const awsconfig = require('./aws-exports');

Amplify.configure(awsconfig);

Amplify.configure({
  Auth: {
    region: 'ap-south-1',
    userPoolId: 'ap-south-1_AjOW47vAT',
    userPoolWebClientId: '583h62mgns7iaojkp6t6hnhmfm',
  },
});
