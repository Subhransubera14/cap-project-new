
// // using { PurchasingService } from '../../srv/purchasing-service';

// // // ═══════════════════════════════════════════════════
// // // PURCHASE ORDERS — List Report + Object Page
// // // ═══════════════════════════════════════════════════

// // annotate PurchasingService.PurchaseOrders with @UI: {

// //   // ─── FILTER BAR ────────────────────────────────
// //   SelectionFields: [ poNumber, status, priority, supplier_ID, orderDate ],

// //   // ─── TABLE COLUMNS ─────────────────────────────
// //   LineItem: [
// //     { Value: poNumber, Label: 'PO Number' },
// //     { Value: supplier.name, Label: 'Supplier' },
// //     { Value: orderDate, Label: 'Order Date' },
// //     { Value: totalAmount, Label: 'Amount' },
// //     // { Value: priority, Label: 'Priority' },
// //     // { Value: status, Label: 'Status'}
// //     { Value: priority, Label: 'Priority', Criticality: priorityCriticality },
// //     { Value: status, Label: 'Status', Criticality: statusCriticality }
// //   ],

// //   // ─── OBJECT PAGE HEADER ────────────────────────
// //   HeaderInfo: {
// //     TypeName: 'Purchase Order',
// //     TypeNamePlural: 'Purchase Orders',
// //     Title: { Value: poNumber },
// //     Description: { Value: supplier.name }
// //   },

// //   // HeaderFacets: [
// //   //   {
// //   //       $Type: 'UI.ReferenceFacet',
// //   //       Label: 'Overview',
// //   //       Target: '@UI.FieldGroup#HeaderDetails'
// //   //   }
// // //],

// // FieldGroup#HeaderDetails: {
// //     Data: [
// //         { Value: status, Label: 'Status' },
// //         { Value: priority, Label: 'Priority' },
// //         { Value: totalAmount, Label: 'Total Amount' }
// //     ]
// // },

// //   // ─── HEADER KPIs ──────────────────────────────
// //   HeaderFacets: [
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Amount' },
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Status' },
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Priority' }
// //   ],
// //   DataPoint#Amount: { Value: totalAmount, Title: 'Total Amount' },
// //   DataPoint#Status: { Value: status, Title: 'Status', Criticality: statusCriticality },
// //   DataPoint#Priority: { Value: priority, Title: 'Priority', Criticality: priorityCriticality },

// //   // ─── PAGE SECTIONS ─────────────────────────────
// //   Facets: [
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#General', Label: 'General Information' },
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.FieldGroup#Dates', Label: 'Dates & Delivery' },
// //     { $Type: 'UI.ReferenceFacet', Target: 'items/@UI.LineItem', Label: 'Line Items' }
// //   ],

// //   FieldGroup#General: {
// //     Data: [
// //       { Value: poNumber, Label: 'PO Number' },
// //       { Value: supplier_ID, Label: 'Supplier' },
// //       { Value: status, Label: 'Status' },
// //       { Value: priority, Label: 'Priority' },
// //       { Value: totalAmount, Label: 'Total Amount' },
// //       { Value: notes, Label: 'Notes' }
// //     ]
// //   },
// //   FieldGroup#Dates: {
// //     Data: [
// //       { Value: orderDate, Label: 'Order Date' },
// //       { Value: expectedDate, Label: 'Expected Delivery' },
// //       { Value: createdAt, Label: 'Created On' },
// //       { Value: createdBy, Label: 'Created By' }
// //     ]
// //   },

// //   // ─── ACTIONS (Buttons on Object Page) ──────────
// //   Identification: [
// //     { $Type: 'UI.DataFieldForAction', Action: 'PurchasingService.submit', Label: 'Submit for Approval' },
// //     { $Type: 'UI.DataFieldForAction', Action: 'PurchasingService.approve', Label: 'Approve' },
// //     { $Type: 'UI.DataFieldForAction', Action: 'PurchasingService.reject', Label: 'Reject' }
// //   ]
// // };

// // // ─── VALUE HELPS ─────────────────────────────────
// // annotate PurchasingService.PurchaseOrders with {
// //   supplier @(
// //     Common: {
// //       Text: supplier.name,
// //       TextArrangement: #TextOnly,
// //       ValueList: {
// //         CollectionPath: 'Suppliers',
// //         Parameters: [
// //           { $Type: 'Common.ValueListParameterInOut', LocalDataProperty: supplier_ID, ValueListProperty: 'ID' },
// //           { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'name' },
// //           { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'city' }
// //         ]
// //       }
// //     }
// //   );
// //   status @Common.ValueListWithFixedValues;
// //   priority @Common.ValueListWithFixedValues;
// // };

// // // ═══════════════════════════════════════════════════
// // // PO ITEMS — Table in PO + Sub-Object Page
// // // ═══════════════════════════════════════════════════

// // annotate PurchasingService.PurchaseOrderItems with @UI: {

// //   // Shown as table in PO Object Page
// //   LineItem: [
// //     { Value: productName, Label: 'Product' },
// //     { Value: quantity, Label: 'Quantity' },
// //     { Value: unitPrice, Label: 'Unit Price' },
// //     // { Value: totalPrice, Label: 'Total' },
// //     // { Value: receivedQty, Label: 'Received' }
// //   ],

// //   // When item has its own detail page
// //   HeaderInfo: {
// //     TypeName: 'PO Item',
// //     TypeNamePlural: 'PO Items',
// //     Title: { Value: productName },
// //     Description: { Value: quantity }
// //   },

// //   Facets: [
// //     { $Type: 'UI.ReferenceFacet', Target: '@UI.LineItem#Items' }
// //   ],
// //   FieldGroup#ItemDetail: {
// //     Data: [
// //       { Value: productName, Label: 'Product' },
// //       { Value: quantity, Label: 'Ordered Qty' },
// //       { Value: unitPrice, Label: 'Unit Price' },
// //     //   { Value: totalPrice, Label: 'Line Total' },
// //     //   { Value: receivedQty, Label: 'Received Qty' },
// //     //   { Value: notes, Label: 'Notes' }
// //     ]
// //   }
// // };

// // // Product value help for items
// // annotate PurchasingService.PurchaseOrderItems with {
// //   product @(
// //     Common: {
// //       Text: product.name,
// //       TextArrangement: #TextOnly,
// //       ValueList: {
// //         CollectionPath: 'Products',
// //         Parameters: [
// //           { $Type: 'Common.ValueListParameterInOut', LocalDataProperty: product_ID, ValueListProperty: 'ID' },
// //           { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'name' },
// //           { $Type: 'Common.ValueListParameterDisplayOnly', ValueListProperty: 'price' }
// //         ]
// //       }
// //     }
// //   );
// // };












// using { PurchasingService } from '../../srv/purchasing-service';

// annotate PurchasingService.PurchaseOrders with @UI: {

//   SelectionFields: [
//     poNumber,
//     status,
//     supplier,
//     priority,
//     orderDate,
//     expectedDate
//   ],

//   LineItem: [
//     { Value: poNumber, Label: 'PO Number' },
//     { Value: supplier.name, Label: 'Supplier' },
//     { Value: priority, Label: 'Priority' },
//     { Value: orderDate, Label: 'Order Date' },
//     { Value: expectedDate, Label: 'Expected Date' },
//     { Value: totalAmount, Label: 'Total Amount' },
//     { Value: currency.code, Label: 'Currency' },
//     { Value: status, Label: 'Status', Criticality: statusCriticality },
//     {
//       $Type: 'UI.DataFieldForAnnotation',
//       Target: '@UI.DataPoint#Progress',
//       Label: 'Progress'
//     }
//   ],

//   HeaderInfo: {
//     TypeName: 'Purchase Order',
//     TypeNamePlural: 'Purchase Orders',
//     Title: { Value: poNumber },
//     Description: { Value: supplier.name }
//   },

//   HeaderFacets: [
//     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Amount' },
//     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Status' },
//     { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Progress' }
//   ],

//   DataPoint#Amount: {
//     Value: totalAmount,
//     Title: 'Total Amount'
//   },

//   DataPoint#Status: {
//     Value: status,
//     Title: 'Status',
//     Criticality: statusCriticality
//   },

//   DataPoint#Progress: {
//     Value: progressValue,
//     TargetValue: 100,
//     Title: 'Progress',
//     Visualization: #Progress
//   },

//   Facets: [
//     {
//       $Type: 'UI.ReferenceFacet',
//       Target: '@UI.FieldGroup#General',
//       Label: 'General Information'
//     },
//     {
//       $Type: 'UI.ReferenceFacet',
//       Target: 'items/@UI.LineItem',
//       Label: 'Purchase Order Items'
//     }
//   ],

//   FieldGroup#General: {
//     Data: [
//       { Value: poNumber, Label: 'PO Number' },
//       { $Type: 'UI.DataField', Value: supplier_ID, Label: 'Supplier' },
//       { Value: priority, Label: 'Priority' },
//       { Value: orderDate, Label: 'Order Date' },
//       { Value: expectedDate, Label: 'Expected Date' },
//       { Value: currency, Label: 'Currency' },
//       { Value: status, Label: 'Status', Criticality: statusCriticality },
//       { Value: totalAmount, Label: 'Total Amount' },
//       { Value: taxAmount, Label: 'Tax Amount' },
//       { Value: netAmount, Label: 'Net Amount' },
//       {
//         $Type: 'UI.DataFieldForAnnotation',
//         Target: '@UI.DataPoint#Progress',
//         Label: 'Progress'
//       }
//     ]
//   },

//   Identification: [
//     {
//       $Type: 'UI.DataFieldForAction',
//       Action: 'PurchasingService.submit',
//       Label: 'Submit for Approval',
//       ![@UI.Hidden]: submitHidden
//     },
//     {
//       $Type: 'UI.DataFieldForAction',
//       Action: 'PurchasingService.approve',
//       Label: 'Approve',
//       ![@UI.Hidden]: approveHidden
//     },
//     {
//       $Type: 'UI.DataFieldForAction',
//       Action: 'PurchasingService.reject',
//       Label: 'Reject',
//       ![@UI.Hidden]: rejectHidden
//     }
//   ]
// };

// annotate PurchasingService.PurchaseOrders with {
//   poNumber     @Common.Label : 'PO Number'     @Common.FieldControl : poFieldControl;
//   supplier     @Common.FieldControl : poFieldControl;
//   priority     @Common.Label : 'Priority'      @Common.FieldControl : poFieldControl;
//   orderDate    @Common.Label : 'Order Date'    @Common.FieldControl : poFieldControl;
//   expectedDate @Common.Label : 'Expected Date' @Common.FieldControl : poFieldControl;
//   currency     @Common.FieldControl : poFieldControl;

//   status        @Common.Label : 'Status';
//   totalAmount   @Common.Label : 'Total Amount';
//   taxAmount     @Common.Label : 'Tax Amount';
//   netAmount     @Common.Label : 'Net Amount';
//   progressValue @Common.Label : 'Progress';

//   supplier @(
//     Common.Label : 'Supplier',
//     Common.Text : supplier.name,
//     Common.TextArrangement : #TextOnly,
//     Common.ValueList : {
//       CollectionPath : 'Suppliers',
//       Parameters : [
//         {
//           $Type : 'Common.ValueListParameterInOut',
//           LocalDataProperty : supplier,
//           ValueListProperty : 'ID'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'name'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'city'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'email'
//         }
//       ]
//     }
//   );

//   currency @(
//     Common.Label : 'Currency',
//     Common.Text : currency.code,
//     Common.TextArrangement : #TextOnly
//   );
// };

// annotate PurchasingService.PurchaseOrderItems with @UI: {

//   LineItem: [
//     { Value: product.name, Label: 'Product' },
//     { Value: quantity, Label: 'Quantity' },
//     { Value: unitPrice, Label: 'Unit Price' },
//     { Value: totalPrice, Label: 'Total Price' }
//   ],

//   HeaderInfo: {
//     TypeName: 'Purchase Order Item',
//     TypeNamePlural: 'Purchase Order Items',
//     Title: { Value: product.name },
//     Description: { Value: quantity }
//   },

//   Facets: [
//     {
//       $Type: 'UI.ReferenceFacet',
//       Target: '@UI.FieldGroup#ItemDetail',
//       Label: 'Item Detail'
//     },
//     {
//       $Type: 'UI.ReferenceFacet',
//       Target: 'product/@UI.FieldGroup#ProductInfo',
//       Label: 'Product Details'
//     }
//   ],

//   FieldGroup#ItemDetail: {
//   Data: [
//     { $Type: 'UI.DataField', Value: product_ID, Label: 'Product' },
//     { $Type: 'UI.DataField', Value: quantity, Label: 'Quantity' },
//     { $Type: 'UI.DataField', Value: unitPrice, Label: 'Unit Price' },
//     { $Type: 'UI.DataField', Value: totalPrice, Label: 'Total Price' }
//   ]
// }
// };

// annotate PurchasingService.PurchaseOrderItems with {
//   product @(
//     Common.Label : 'Product',
//     Common.Text : product.name,
//     Common.TextArrangement : #TextOnly,
//     Common.ValueListWithFixedValues : false,
//     Common.ValueList : {
//       Label : 'Products',
//       CollectionPath : 'Products',
//       Parameters : [
//         {
//           $Type : 'Common.ValueListParameterInOut',
//           LocalDataProperty : product_ID,
//           ValueListProperty : 'ID'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'name'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'price'
//         },
//         {
//           $Type : 'Common.ValueListParameterDisplayOnly',
//           ValueListProperty : 'stock'
//         }
//       ]
//     }
//   );

//   quantity   @Common.Label : 'Quantity';
//   unitPrice  @Common.Label : 'Unit Price';
//   totalPrice @Common.Label : 'Total Price';
// };

// annotate PurchasingService.Products with @UI: {

//   LineItem: [
//     { Value: name, Label: 'Product Name' },
//     { Value: description, Label: 'Description' },
//     { Value: price, Label: 'Price' },
//     { Value: stock, Label: 'Stock' },
//     { Value: minStock, Label: 'Minimum Stock' },
//     { Value: rating, Label: 'Rating' }
//   ],

//   HeaderInfo: {
//     TypeName: 'Product',
//     TypeNamePlural: 'Products',
//     Title: { Value: name },
//     Description: { Value: description }
//   },

//   Facets: [
//     {
//       $Type: 'UI.ReferenceFacet',
//       Target: '@UI.FieldGroup#ProductInfo',
//       Label: 'Product Information'
//     }
//   ],

//   FieldGroup#ProductInfo: {
//     Data: [
//       { Value: name, Label: 'Product Name' },
//       { Value: description, Label: 'Description' },
//       { Value: price, Label: 'Price' },
//       { Value: stock, Label: 'Stock' },
//       { Value: minStock, Label: 'Minimum Stock' },
//       { Value: rating, Label: 'Rating' },
//       { Value: supplier.name, Label: 'Supplier' }
//     ]
//   }
// };

// annotate PurchasingService.Products with {
//   name        @Common.Label : 'Product Name';
//   description @Common.Label : 'Description';
//   price       @Common.Label : 'Price';
//   stock       @Common.Label : 'Stock';
//   minStock    @Common.Label : 'Minimum Stock';
//   rating      @Common.Label : 'Rating';
// };

// annotate PurchasingService.Suppliers with @UI: {

//   LineItem: [
//     { Value: name, Label: 'Supplier Name' },
//     { Value: contact, Label: 'Contact Person' },
//     { Value: email, Label: 'Email' },
//     { Value: phone, Label: 'Phone' },
//     { Value: city, Label: 'City' },
//     { Value: country.code, Label: 'Country' },
//     { Value: isActive, Label: 'Active' }
//   ],

//   HeaderInfo: {
//     TypeName: 'Supplier',
//     TypeNamePlural: 'Suppliers',
//     Title: { Value: name },
//     Description: { Value: city }
//   }
// };

// annotate PurchasingService.Suppliers with {
//   name     @Common.Label : 'Supplier Name';
//   contact  @Common.Label : 'Contact Person';
//   email    @Common.Label : 'Email';
//   phone    @Common.Label : 'Phone';
//   city     @Common.Label : 'City';
//   country  @Common.Label : 'Country';
//   isActive @Common.Label : 'Active';
// };

// annotate PurchasingService.PurchaseOrderItems with @(
//   Common.SideEffects: {
//     SourceProperties: ['quantity', 'unitPrice'],
//     TargetProperties: ['totalPrice']
//   }
// );

// annotate PurchasingService.PurchaseOrders with @(
//   Common.SideEffects#TotalRefresh: {
//     SourceEntities: ['items'],
//     TargetProperties: ['totalAmount', 'taxAmount', 'netAmount']
//   }
// );















using { PurchasingService } from '../../srv/purchasing-service';

annotate PurchasingService.PurchaseOrders with @UI: {

  SelectionFields: [
    poNumber,
    status,
    supplier,
    priority,
    orderDate,
    expectedDate
  ],

  LineItem: [
    { Value: poNumber, Label: 'PO Number' },
    { Value: supplier.name, Label: 'Supplier' },
    { Value: priority, Label: 'Priority' },
    { Value: orderDate, Label: 'Order Date' },
    { Value: expectedDate, Label: 'Expected Date' },
    { Value: totalAmount, Label: 'Total Amount' },
    { Value: currency.code, Label: 'Currency' },
    { Value: status, Label: 'Status', Criticality: statusCriticality },
    {
      $Type: 'UI.DataFieldForAnnotation',
      Target: '@UI.DataPoint#Progress',
      Label: 'Progress'
    }
  ],

  HeaderInfo: {
    TypeName: 'Purchase Order',
    TypeNamePlural: 'Purchase Orders',
    Title: { Value: poNumber },
    Description: { Value: supplier.name }
  },

  HeaderFacets: [
    { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Amount' },
    { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Status' },
    { $Type: 'UI.ReferenceFacet', Target: '@UI.DataPoint#Progress' }
  ],

  DataPoint#Amount: {
    Value: totalAmount,
    Title: 'Total Amount'
  },

  DataPoint#Status: {
    Value: status,
    Title: 'Status',
    Criticality: statusCriticality
  },

  DataPoint#Progress: {
    Value: progressValue,
    TargetValue: 100,
    Title: 'Progress',
    Visualization: #Progress
  },

  Facets: [
    {
      $Type: 'UI.ReferenceFacet',
      Target: '@UI.FieldGroup#General',
      Label: 'General Information'
    },
    {
      $Type: 'UI.ReferenceFacet',
      Target: 'items/@UI.LineItem',
      Label: 'Purchase Order Items'
    }
  ],

  FieldGroup#General: {
    Data: [
      { Value: poNumber, Label: 'PO Number' },
      { $Type: 'UI.DataField', Value: supplier_ID, Label: 'Supplier' },
      { Value: priority, Label: 'Priority' },
      { Value: orderDate, Label: 'Order Date' },
      { Value: expectedDate, Label: 'Expected Date' },
      { Value: currency, Label: 'Currency' },
      { Value: status, Label: 'Status', Criticality: statusCriticality },
      { Value: totalAmount, Label: 'Total Amount' },
      { Value: taxAmount, Label: 'Tax Amount' },
      { Value: netAmount, Label: 'Net Amount' },
      {
        $Type: 'UI.DataFieldForAnnotation',
        Target: '@UI.DataPoint#Progress',
        Label: 'Progress'
      }
    ]
  },

  Identification: [
    {
      $Type: 'UI.DataFieldForAction',
      Action: 'PurchasingService.submit',
      Label: 'Submit for Approval',
      ![@UI.Hidden]: submitHidden
    },
    {
      $Type: 'UI.DataFieldForAction',
      Action: 'PurchasingService.approve',
      Label: 'Approve',
      ![@UI.Hidden]: approveHidden
    },
    {
      $Type: 'UI.DataFieldForAction',
      Action: 'PurchasingService.reject',
      Label: 'Reject',
      ![@UI.Hidden]: rejectHidden
    }
  ]
};

annotate PurchasingService.PurchaseOrders with {
 poNumber     @title : 'PO Number'     @Common.Label : 'PO Number'     @Common.FieldControl : poFieldControl;
 priority     @title : 'Priority'      @Common.Label : 'Priority'      @Common.FieldControl : poFieldControl;
 orderDate    @title : 'Order Date'    @Common.Label : 'Order Date'    @Common.FieldControl : poFieldControl;
 expectedDate @title : 'Expected Date' @Common.Label : 'Expected Date' @Common.FieldControl : poFieldControl;

  supplier @(
    Common.Label : 'Supplier',
    Common.Text : supplier.name,
    Common.TextArrangement : #TextOnly,
    Common.ValueList : {
      CollectionPath : 'Suppliers',
      Parameters : [
        {
          $Type : 'Common.ValueListParameterInOut',
          LocalDataProperty : supplier_ID ,
          ValueListProperty : 'ID'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'name'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'city'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'email'
        }
      ]
    }
  );

  currency @(
    Common.Label : 'Currency',
    Common.Text : currency.code,
    Common.TextArrangement : #TextOnly
  );
};

annotate PurchasingService.PurchaseOrderItems with @UI: {

  LineItem: [
    { Value: product.name, Label: 'Product' },
    { Value: quantity, Label: 'Quantity' },
    { Value: unitPrice, Label: 'Unit Price' },
    { Value: totalPrice, Label: 'Total Price' }
  ],

  HeaderInfo: {
    TypeName: 'Purchase Order Item',
    TypeNamePlural: 'Purchase Order Items',
    Title: { Value: product.name },
    Description: { Value: quantity }
  },

  Facets: [
    {
      $Type: 'UI.ReferenceFacet',
      Target: '@UI.FieldGroup#ItemDetail',
      Label: 'Item Detail'
    },
    {
      $Type: 'UI.ReferenceFacet',
      Target: 'product/@UI.FieldGroup#ProductInfo',
      Label: 'Product Details'
    }
  ],

  FieldGroup#ItemDetail: {
  Data: [
    { $Type: 'UI.DataField', Value: product_ID, Label: 'Product' },
    { $Type: 'UI.DataField', Value: quantity, Label: 'Quantity' },
    { $Type: 'UI.DataField', Value: unitPrice, Label: 'Unit Price' },
    { $Type: 'UI.DataField', Value: totalPrice, Label: 'Total Price', ![@Common.FieldControl]: #ReadOnly }
  ]
}
};

annotate PurchasingService.PurchaseOrderItems with {

  product_ID @(
    Common.Label : 'Product',
    Common.Text : product.name,
    Common.TextArrangement : #TextOnly,
    Common.ValueList : {
      Label : 'Products',
      CollectionPath : 'Products',
      Parameters : [
        {
          $Type : 'Common.ValueListParameterInOut',
          LocalDataProperty : product_ID,
          ValueListProperty : 'ID'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'name'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'price'
        },
        {
          $Type : 'Common.ValueListParameterDisplayOnly',
          ValueListProperty : 'stock'
        }
      ]
    }
  );

 product @(
  Common.Label : 'Product',
  Common.Text : product.name,
  Common.TextArrangement : #TextOnly,
  Common.ValueList : {
    Label : 'Products',
    CollectionPath : 'Products',
    Parameters : [
      {
        $Type : 'Common.ValueListParameterInOut',
        LocalDataProperty : product_ID,
        ValueListProperty : 'ID'
      },
      {
        $Type : 'Common.ValueListParameterDisplayOnly',
        ValueListProperty : 'name'
      },
      {
        $Type : 'Common.ValueListParameterDisplayOnly',
        ValueListProperty : 'price'
      },
      {
        $Type : 'Common.ValueListParameterDisplayOnly',
        ValueListProperty : 'stock'
      }
    ]
  }
);

  quantity   @Common.Label : 'Quantity';
  unitPrice  @Common.Label : 'Unit Price';
  totalPrice @Common.Label : 'Total Price';
};


annotate PurchasingService.Products with @UI: {

  LineItem: [
    { Value: name, Label: 'Product Name' },
    { Value: description, Label: 'Description' },
    { Value: price, Label: 'Price' },
    { Value: stock, Label: 'Stock' },
    { Value: minStock, Label: 'Minimum Stock' },
    { Value: rating, Label: 'Rating' }
  ],

  HeaderInfo: {
    TypeName: 'Product',
    TypeNamePlural: 'Products',
    Title: { Value: name },
    Description: { Value: description }
  },

  Facets: [
    {
      $Type: 'UI.ReferenceFacet',
      Target: '@UI.FieldGroup#ProductInfo',
      Label: 'Product Information'
    }
  ],

  FieldGroup#ProductInfo: {
    Data: [
      { Value: name, Label: 'Product Name' },
      { Value: description, Label: 'Description' },
      { Value: price, Label: 'Price' },
      { Value: stock, Label: 'Stock' },
      { Value: minStock, Label: 'Minimum Stock' },
      { Value: rating, Label: 'Rating' },
      { Value: supplier.name, Label: 'Supplier' }
    ]
  }
};

annotate PurchasingService.Products with {
  name        @Common.Label : 'Product Name';
  description @Common.Label : 'Description';
  price       @Common.Label : 'Price';
  stock       @Common.Label : 'Stock';
  minStock    @Common.Label : 'Minimum Stock';
  rating      @Common.Label : 'Rating';
};

annotate PurchasingService.Suppliers with @UI: {

  LineItem: [
    { Value: name, Label: 'Supplier Name' },
    { Value: contact, Label: 'Contact Person' },
    { Value: email, Label: 'Email' },
    { Value: phone, Label: 'Phone' },
    { Value: city, Label: 'City' },
    { Value: country.code, Label: 'Country' },
    { Value: isActive, Label: 'Active' }
  ],

  HeaderInfo: {
    TypeName: 'Supplier',
    TypeNamePlural: 'Suppliers',
    Title: { Value: name },
    Description: { Value: city }
  }
};

annotate PurchasingService.Suppliers with {
  name     @Common.Label : 'Supplier Name';
  contact  @Common.Label : 'Contact Person';
  email    @Common.Label : 'Email';
  phone    @Common.Label : 'Phone';
  city     @Common.Label : 'City';
  country  @Common.Label : 'Country';
  isActive @Common.Label : 'Active';
};

annotate PurchasingService.PurchaseOrderItems with @(
  Common.SideEffects #TotalPriceSideEffect : {
    SourceProperties : [ 'quantity', 'unitPrice' ],
    TargetProperties : [ 'totalPrice' ]
  }
);

annotate PurchasingService.PurchaseOrderItems with {
  totalPrice @Common.FieldControl : #ReadOnly;
};

annotate PurchasingService.PurchaseOrders with @(
  Common.SideEffects #TotalRefresh : {
    SourceEntities : [ 'items' ],
    TargetProperties : [ 'totalAmount', 'taxAmount', 'netAmount' ]
  }
);