# Hypesquad Changer

# How does it works ?
First, you have to download and configure [nodejs](https://nodejs.org/en/). Once done, download dependencies using ``npm i --save``. Then, at the repository's root, create a new file called ``.env`` in which you can write the following line :

```dotenv
TOKEN=<your_discord_account_token_here>
```

This file will store your Discord account's token in order let to nobody else than you know it's value.
Finally, you can change the house in the ``index.js`` file.

# Example :
```js
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
```

# Supported hypesquads :
<div style="display:flex">
<img width="15" src="https://discord.com/assets/64ae1208b6aefc0a0c3681e6be36f0ff.svg">&nbsp;&nbsp;Bravery,
</div>

<div style="display:flex">
<img width="15" src="https://discord.com/assets/48cf0556d93901c8cb16317be2436523.svg">&nbsp;&nbsp;Brillance,

</div>
<div style="display:flex">
<img width="15" src="https://discord.com/assets/9fdc63ef8a3cc1617c7586286c34e4f1.svg">&nbsp;&nbsp;Balance.
</div>
