module.exports = (type, value) => {
    const urlRegex = /(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z?_0-9A-Z&#/@-]+/ //|| /(http:\/\/localhost:4000\/)[a-z?_0-9A-Z&#/@-]+/;
    const stringRegex = /^[a-zA-Z0-9-_]+$/;
    if(type == 'url') {
        if(urlRegex.test(value)) return true;
            return false;
    } else if(type == 'string') {
        if(stringRegex.test(value)) return true;
            return false;
    }
}