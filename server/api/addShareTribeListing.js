const { getSdk, handleError, serialize } = require('../api-util/sdk');

module.exports = (req, res) => {
    const sdk = getSdk(req, res);
    if (req.body.session && req.body.session.status && req.body.session.status === "COMPLETE") {
        let getResult = req.body.session;
        let createObj = {
            ...getResult,
            brand: getResult.vehicle.make,
            title: getResult.vehicle.year + getResult.vehicle.make + getResult.vehicle.model,
            description: Object.values(getResult.vehicle).join(", ")
        };
        ["inspect_ended_at",
            "source",
            "brand",
            "user_account",
            "theme",
            "updated_at",
            "status",
            "language",
            "active",
            "redirect_url",
            "vehicle",
            "options",
            "session_key",
            "created_at",
            "inspect_started_at"].forEach((ele) => delete createObj[ele])
        sdk.ownListings.create(createObj, { expand: true }).then(ress => {
            res.status(200).send(ress.data)
        }).catch(err => {
            handleError(res, err)
        })
    } else {
        res.status(500).send("No Session found.")
    }
};
