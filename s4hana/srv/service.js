const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

    const bp = await cds.connect.to('OP_API_BUSINESS_PARTNER_SRV');

    this.on('READ', 'BusinessPartners', async (req) => {
        return bp.run(req.query);
    });

});