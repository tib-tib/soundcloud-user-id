const request = require('request');

const getSoundcloudUserId = (soundcloudUsername, callback) => {
    request({
        url: `https://soundcloud.com/${soundcloudUsername}`,
        headers: {
            accept: '*/*',
            Host:'soundcloud.com',
            Referer:'https://soundcloud.com/',
            'Upgrade-Insecure-Requests':1,
            'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36',
            Accept:'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language':'fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4,es;q=0.2',
            'Cache-Control':'max-age=0',
            Connection:'keep-alive'
        }
    }, (error, {body}) => {
        if (error)
            callback(error);

        const url = 'https://api.soundcloud.com/users/'
        const idIndex = body.indexOf(url);
        const bodySubstring = body.substring(idIndex);
        const idEndIndex = bodySubstring.indexOf('"');
        const userId = bodySubstring.substring(url.length, idEndIndex);
        callback(null, userId);
    });

}

module.exports = {getSoundcloudUserId};
