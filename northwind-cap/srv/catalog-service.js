const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {

    const northwind = await cds.connect.to('NorthWind')

    this.on('READ', 'Products', async (req) => {
        return northwind.run(req.query)
    })

    this.on('READ', 'Categories', async (req) => {
        return northwind.run(req.query)
    })

    this.on('READ', 'Suppliers', async (req) => {
        return northwind.run(req.query)
    })

    this.on('READ', 'Persons', async (req) => {
        return northwind.run(req.query)
    })

    

})