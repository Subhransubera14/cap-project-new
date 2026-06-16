// // srv/sales-service.cds
// using { com.epm as db } from '../db/schema';

// service SalesService @(path: '/sales') {

//   entity SalesOrders as projection on db.SalesOrders;
//   entity Customers as projection on db.Customers;

//   // Bound action — tied to SalesOrders entity
//   // "You can call this action ON a specific order"
//   action confirmOrder() returns {
//     status  : String(20);
//     message : String(200);
//   };

//   action cancelOrder(
//     reason : String(500)       // Why are you cancelling?
//   ) returns {
//     status  : String(20);
//     message : String(200);
//     refundAmount : Decimal(12,2);
//   };

//   action shipOrder(
//     trackingNumber : String(50);
//     carrier        : String(50)
//   ) returns {
//     status       : String(20);
//     message      : String(200);
//     estimatedDelivery : Date;
//   };

// }



using com.epm from '../db/schema';

service SalesService @(path: '/sales') {

    entity Products as projection on epm.Products {
        ID, name, description, currency, stock, rating, category
    };

    entity Customers as projection on epm.Customers;

    entity SalesOrders as projection on epm.SalesOrders
        actions {
            action confirm() returns {
                status  : String(20);
                msg     : String(200);
            };
            action cancel(
                reason : String(500)
            ) returns {
                status       : String(20);
                msg          : String(200);
                refundAmount : Decimal(12,2);
            };
            action ship(
                trackingNumber : String(50),
                carrier        : String(50)
            ) returns {
                status   : String(20);
                msg      : String(200);
                delivery : String(20);
            };
        };

    entity SalesOrderItems as projection on epm.SalesOrderItems;

}