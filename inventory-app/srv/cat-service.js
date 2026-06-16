const cds = require('@sap/cds');
module.exports = cds.service.impl(function () {
  this.after('READ', 'Products', (results) => {
    const rows = Array.isArray(results) ? results : [results];
    for (const p of rows) {
      if (p.stock === 0) p.stockCriticality = 1;
      else if (p.stock < 10) p.stockCriticality = 2;
      else p.stockCriticality = 3;
    }
  });
});