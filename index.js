const { change_house } = require("./src/hypesquad.js"),
      dotenv = require("dotenv"),
      house = "Brillance";

// Retrieve variables from the .env file.
// If you don't have one, it's a good practice
// to keep you're Discord account's token secret.
dotenv.config();

change_house(process.env.TOKEN, house)
    .then(function(result) {
        if (result == 1)
            console.log(`The ${house} house has been integrated.`);
        else
            console.log("Invalid paramters may have been provided.");
    })
    .catch(function(error) {
        console.log(`An error occured :\n${error}`);
    })
