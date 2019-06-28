exports.uuid = () => {
    let uuid = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    for (let i=0; i<5; i++) {
        uuid += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return uuid;
}