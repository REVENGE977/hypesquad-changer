
   exports.changer = function(house, token) {
    const request = require("request");
    
        var selection = house
        if(selection == "Bravery") {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/hypesquad/online",
            body: {'house_id': 1},
            json: true,
            headers: {
                authorization: token
            }
        }, function(error, response, body) {
            if(error) console.log(error);
            return console.log("Changed");
        })
    }

    if(selection == "Brilliance") {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/hypesquad/online",
            body: {'house_id': 2},
            json: true,
            headers: {
                authorization: token
            }
        }, function(error, response, body) {
            if(error) console.log(error);
            return console.log("Changed");
        })
    }

    if(selection == "Balance") {
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/hypesquad/online",
            body: {'house_id': 3},
            json: true,
            headers: {
                authorization: token
            }
        }, function(error, response, body) {
            if(error) console.log(error);
            return console.log("Changed");

        })
    }

    if(selection == "Random") {
        var houses = [1,2,3]
        request({
            method: "POST",
            url: "https://discordapp.com/api/v6/hypesquad/online",
            body: {'house_id': houses[Math.floor(Math.random() * houses.length)]},
            json: true,
            headers: {
                authorization: token
            }
        }, function(error, response, body) {
            if(error) console.log(error);
            return console.log("Changed");

        })
    }
         }
        
    


