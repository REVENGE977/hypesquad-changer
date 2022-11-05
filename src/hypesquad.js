const axios = require('axios').default,
    houses = ['bravery', 'brillance', 'balance']

/**
 * @param {string} token DISCORD account's token.
 * @param {string} house House to get into : Bravery, Brillance or Balance.
 * @returns object
 */
function __build_axios_params(token, house)
{
    return {
        method: "POST",
        url: "https://discord.com/api/v9/hypesquad/online",
        data: {
                house_id: houses.indexOf(house) + 1
        },
        headers: {
            "Authorization": token,
            "Content-Type": "application/json"
        }
    };
}

/**
 * @param {string} token DISCORD account's token.
 * @param {string} house House to get into : Bravery, Brillance or Balance.
 * @returns number
 */
async function change_house(token, house)
{
    var response = null;

    if (!token || !house)
        return 0;
    house = house.toLowerCase();
    if (!houses.includes(house))
        return 0;
    try {
        response = (await axios(__build_axios_params(token, house)));
    } catch (error) {
        throw error;
    }
    if (response.status == 204)
        return 1;
    throw new Error(`Unknown error occured, traceback : \n${response.data}`);
}

module.exports = { change_house };
