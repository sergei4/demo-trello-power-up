/* global TrelloPowerUp */

// we can access Bluebird Promises as follows
const Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize(
    {
        "card-buttons": function (t, options) {
            return [
                {
                    icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                    text: "Summary",
                    callback: function () {}
                }
            ];
        },
    });