const { getSdk, handleError, serialize, integrationSdk } = require('../api-util/sdk');
let { types } = require('sharetribe-flex-sdk');
const { UUID } = types;

module.exports = (req, res) => {
    if (req.body.session && req.body.session.status && req.body.session.status === "COMPLETE") {
        let getResult = req.body.session;
        integrationSdk.listings.query().then(ress => {
            let newArray = ress.data.data || []
            let findList = newArray.filter(ele => (ele.attributes.publicData.session_key === getResult.session_key))[0]
            let updateObj = {
                id: new UUID(findList.id.uuid),
                // brand: getResult.vehicle && getResult.vehicle.make,
                title: getResult.vehicle.year + getResult.vehicle.make + getResult.vehicle.model,
                description: Object.values(getResult.vehicle).join(", "),
                publicData: { ...getResult }
            }
            integrationSdk.listings.update(updateObj).then(out => {
                res.status(200).send(out.data)

            }).catch(e => {
                handleError(res, e)
            })
        }).catch(err => {
            handleError(res, err)
        })

    }

    // if (req.body.session && req.body.session.status && req.body.session.status === "COMPLETE") {
    //     let getResult = req.body.session;
    //     let createObj = {
    //         ...getResult,
    //         brand: getResult.vehicle.make,
    //         title: getResult.vehicle.year + getResult.vehicle.make + getResult.vehicle.model,
    //         description: Object.values(getResult.vehicle).join(", ")
    //     };
    //     sdk.ownListings.create(createObj, { expand: true }).then(ress => {
    //         res.status(200).send(ress.data)
    //     }).catch(err => {
    //         handleError(res, err)
    //     })
    // } else {
    //     res.status(500).send("No Session found.")
    // }
};
