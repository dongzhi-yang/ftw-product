let crypto = require('crypto');
const axios = require('axios');

const { getSdk, handleError, getTrustedSdk, serialize } = require('../api-util/sdk');

module.exports = (req, res) => {
  let date = new Date();
  date = date.toUTCString();
  let hmac = crypto.createHmac('sha256', process.env.PAVE_SECRET);
  hmac.setEncoding('hex');
  hmac.end(`${process.env.PAVE_USERNAME}:${process.env.PAVE_API_KEY}@${date}`, function() {
    let config = {
      method: 'post',
      url: 'https://openapi.paveapi.com/v1/sessions',
      headers: {
        'API-Key': process.env.PAVE_API_KEY,
        'API-Token': hmac.read(),
        'API-Timestamp': date,
      },
    };
    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        let sdk = getSdk(req, res);
        let getResult = response.data;
        let createObj = {
          title: getResult.session_key,
          description: 'new description',
          publicData: {
            session_key: getResult.session_key,
          },
        };
        sdk.ownListings
          .createDraft(createObj, { expand: true })
          .then(ress => {
            const data = {
              ...response.data,
              listingData: ress.data.data,
            };
            res.status(200).send(data);
          })
          .catch(err => {
            handleError(res, err);
          });
      })
      .catch(function(error) {
        handleError(res, error);
      });
  });
};
