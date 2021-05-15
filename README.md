# Hypesquad Changer

# How does it works ?
First, you have to download and configure [nodejs](https//:nodejs.org/en/). ONce done, download dependencies using ``npm i --save`` and change ``TOKEN`` by your own Discord token's account. Then, replace ``HOUSE`` by the house's name in the ``index.js`` file. Finally, run the following command:
```bash
node index.js
```

# Example :
```js
const { handler } = require("./src/hypesquad")
handler("brilliance", "TOKEN")
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
