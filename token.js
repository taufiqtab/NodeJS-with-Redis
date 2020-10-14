var redis = require('redis'),
    client = redis.createClient();

client.on('error', function(err){
    console.log('Error ' + err);
});

let theToken;
let dummyToken = "eyOKsdkawodOAsdoakwdoaksdoakwdo.KksjhfasdpoqwkdpoaksfoOKSFoksd1ok23,aosdoaijroqwIOWDAPSdokaPSO";

client.get('token', function(err, result){
    validateToken(result);
});

function validateToken(val){
    if(val == null){
        getNewToken();
    }else{
        showToken(val);
    }
}

function getNewToken(){
    console.log("Token is null, requesting a new one..");
    client.set('token', dummyToken, redis.print);
    console.log("Success");
    client.get('token', function(err, result){
        showToken(result);
    });
}

function showToken(val){
    theToken = val;
    console.log("The Token : " + theToken);
}


