exports.changer = function(house, token) {
    const request = require("request")

    request({method: "POST",
    url: "https://discordapp.com/api/v6/hypesquad/online",
    body: { "house_id": house == "Bravery" ? 1 : house == "Brilliance" ? 2 : house == "Balance" ? 3 : undefined },
    json: true,
    headers: { "Authorization": token }}, (error, _, _) => { error ? console.log(error) : console.log("House changed !") })

}
