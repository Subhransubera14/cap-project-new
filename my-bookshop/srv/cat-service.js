// module.exports = class CatalogService extends cds.ApplicationService {
//     async init() {
//         this.after('READ', 'Books', (results) => {
//             for (const b of results) {
//                 if (b.stock === 0) b.stockCriticality = 1;
//                 else if (b.stock < 10) b.stockCriticality = 2;
//                 else b.stockCriticality = 3;
//             }
//         });
//         return super.init();
//     }
// };
