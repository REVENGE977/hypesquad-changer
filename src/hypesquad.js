const axios = require('axios').default,
    squads = ['bravery', 'brillance', 'balance']

/**
 * @param {string} house House you want to integrate : Bravery, Brillance or Balance.
 * @param {string} token Your DISCORD account's token.
 * @returns null
 */
module.exports.handler = (house = '', token) => {
    if (!token) return
    if (!squads.includes(house.toLowerCase())) return
    axios({
        method: 'POST',
        url: 'https://discord.com/api/v9/hypesquad/online',
        data: {
            house_id: squads.indexOf(house.toLowerCase()) + 1,
        },
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
    })
        .then((_) => {
            console.log('House changed !')
        })
        .catch((_) =>
            console.log(
                'An error occured, please, check the provided token, and slow down !'
            )
        )
}
