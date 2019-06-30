const UrlDetailsRepository = require('../Repositories/UrlDetailsRepository');
const functions = require('../Factories/functions');
const baseUrl = require('../Factories/baseUrl').url;

exports.shortLink = (req, res, data) => {
    // checking if the long url exists in the database
    UrlDetailsRepository.get(data.old_url, (err, result) => {
        if(err) return res.json({message: 'error ocurred in obtaining the url', code: 13});
        if(result) return res.json({message: 'Link already exists.', link: result.new_url, ol: result.old_url, code: 14});
        else {
            UrlDetailsRepository.getCustomise(data.customise_url, (err, result) => {
                if(err) return res.json({message: 'error ocurred in obtaining the url', code: 15});
                if(result) return res.json({message: 'Customise name not available!', code: 16})
                else {
                    const uuid = functions.uuid();
                    const newLink = {
                        old_url: data.old_url,
                        new_url: null,
                        customise_url: data.customise_url.length > 0 ? data.customise_url : uuid
                    }
                    newLink.new_url = data.customise_url.length > 0 ? baseUrl+`/${data.customise_url}` : baseUrl+`/${uuid}`;
                    UrlDetailsRepository.add(newLink, (err, result) => {
                        if(err) return res.json({message: 'error ocurred in storing the url', code: 17});
                        return res.json({message: 'URL Created Successfully!', link: result.new_url, code: 200});
                    })
                }
            })
        }
    })
}

exports.re = (req, res, link) => {
    // checking if the long url exists in the database
    UrlDetailsRepository.getCustomise(link, (err, result) => {
        if(err) return res.json({message: 'error ocurred in obtaining the url', code: 13});
        if(!result) return res.json({message: 'This Url does not exists!', code: 14});
        if(result.customise_url == link) {
            res.redirect(result.old_url)
        }
    })
}