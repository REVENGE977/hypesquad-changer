exports.changer = function(house, token) {
    const request = require("request");
    var RandomSquad = [1,2,3];
    request({
        method: "POST",
        url: "https://discord.com/api/v8/hypesquad/online",
        body: { "house_id": house == "Bravery" ? 1 : house == "Brilliance" ? 2 : house == "Balance" ? 3 : house == "Random" ? RandomSquad[Math.floor(Math.random() * RandomSquad.length)] : undefined },
        json: true,
        headers: { "Authorization": token }}, (error) => { error ? console.log(error) : console.log("House changed !") 
    })
}
