sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"analyticsui/test/integration/pages/AnalyticsList",
	"analyticsui/test/integration/pages/AnalyticsObjectPage"
], function (JourneyRunner, AnalyticsList, AnalyticsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('analyticsui') + '/test/flp.html#app-preview',
        pages: {
			onTheAnalyticsList: AnalyticsList,
			onTheAnalyticsObjectPage: AnalyticsObjectPage
        },
        async: true
    });

    return runner;
});

