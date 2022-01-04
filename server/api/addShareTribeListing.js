const { getSdk, handleError, serialize } = require('../api-util/sdk');

module.exports = (req, res) => {
    const sdk = getSdk(req, res);

    if (req.body.session && req.body.session.status && req.body.session.status === "COMPLETE") {
        let getResult = req.body.session
        let createObj = {
            ...getResult,
            brand: getResult.vehicle.make,
            title: getResult.vehicle.year + getResult.vehicle.make + getResult.vehicle.model,
            description: Object.values(getResult.vehicle).join(", ")
        }
        sdk.ownListings.create(createObj, { expand: true }).then(ress => {
            res.status(200).send(ress.data)
        }).catch(err => {
            handleError(res, err)
        })
    }
};
