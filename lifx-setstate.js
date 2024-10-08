//Replace only the zeroes with your LIFX API access token obtained from https://cloud.lifx.com/settings
let auth = 'Bearer 0000000000000000000000000000000000000000000000000000000000000000';

/*Selector can be 'all' or a device, group or location's "id". Get them with the list lights request.
https://api.developer.lifx.com/reference/list-lights Run in browser using your auth string.
The id of a light can also be found in the LIFX app -> Light Setting -> Serial
*/
let deviceSelector = 'all';

/*
This turns your choice of lights on or off using fast mode and minimum fade duration.
It's a basic implementation of https://api.developer.lifx.com/reference/set-state
Use the LIFX documentation and modify for your needs.
*/
function setState(selector, power) {
    Shelly.call(
        "HTTP.Request", {
            "method": "PUT",
            "headers": {
                'Authorization': auth
            },
            "url": 'https://api.lifx.com/v1/lights/' + selector + '/state',
            "body": JSON.stringify({
                fast: true,
                power: power ? 'on' : 'off',
                //brightness: 0.5, //Example for adding the brightness param
                duration: 0
            })
        },
        function(response, code, message, userdata) {

        }
    );
};

//If your auth token is correct and deviceSelector is all,
//uncomment the call below to turn all available lights on.
//setState(deviceSelector, true);
