sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/epm/purchaseorders/purchaseordersapp/test/integration/pages/PurchaseOrdersList",
	"com/epm/purchaseorders/purchaseordersapp/test/integration/pages/PurchaseOrdersObjectPage"
], function (JourneyRunner, PurchaseOrdersList, PurchaseOrdersObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/epm/purchaseorders/purchaseordersapp') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrdersList: PurchaseOrdersList,
			onThePurchaseOrdersObjectPage: PurchaseOrdersObjectPage
        },
        async: true
    });

    return runner;
});

