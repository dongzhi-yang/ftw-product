const { getSdk, handleError, serialize } = require('../api-util/sdk');

module.exports = (req, res) => {
    const sdk = getSdk(req, res);

    sdk.listings.query().then(ress => {
        res.status(200).send(ress.data)
    }).catch(err => {
        handleError(res, err)
    })
};
