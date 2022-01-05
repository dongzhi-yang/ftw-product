const { getSdk, handleError, serialize, integrationSdk } = require('../api-util/sdk');
module.exports = (req, res) => {
    integrationSdk.listings.query().then(ress => {
        res.status(200).send(ress.data)
    }).catch(err => {
        handleError(res, err)
    })
};
