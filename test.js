var multichain = require("multichain-node")({
    port: 32769,
    host: "127.0.0.1",
    user: "multichainrpc",
    pass: "89CML14DkgsCQKR4t2T3MAg6CyoysCEr7ye32W1ZaMEZ"
});

multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }
    console.log(info);
})
