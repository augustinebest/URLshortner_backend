const service = require('../Services/UrlDetailsService');
const validate = require('../Factories/validate');

exports.shortLink = async (req, res) => {
    const request = req.body;
    const data = {
        old_url: request.old_url,
        new_url: null,
        customise_url: request.customise_url
    }
    const validateUrl = await validate('url', data.old_url);
    const validateString = data.customise_url.length > 0 ? await validate('string', data.customise_url) : true;
    try {
        if(!validateUrl) {
            return res.json({message: 'Invalid Url format', code: 10});
        } else if(!validateString) {
            return res.json({message: 'Invalid customised name format', code: 11});
        } else if(validateUrl == true && validateString == true) {
            return service.shortLink(req, res, data);
        }
    } catch(error) {
        return res.json({message: error, code: 12});
    }
}

exports.redirectLink = async (req, res) => {
    try {
        const link = req.body.link;
        const validateUrl = await validate('url', link);
        if(validateUrl == true) {
            return service.redirectLink(req, res, link);
        } else {
            return res.json({message: 'This Url is invalid!', code: 10})
        }
    } catch(error) {
        return res.json({message: error, code: 11});
    }
}

exports.re = async (req, res) => {
    try {
        const link = req.params.link;
        const validateString = await validate('string', link);
        if(validateString == true) {
            return service.re(req, res, link);
        } else {
            res.json({message: 'Invalid Url format', code: 10})
        }
    } catch (error) {
        return res.json({message: error, code: 11});
    }
}