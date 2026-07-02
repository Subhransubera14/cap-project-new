const cds = require("@sap/cds");
const axios = require("axios");

module.exports = cds.service.impl(async function () {

    this.on("triggerLeaveProcess", async (req) => {

        const {
            employeeID,
            employeeName,
            leaveDate,
            approvalEmail,
            leaveType,
            comments
        } = req.data;

        try {

            // ===== OAuth Details =====
            const clientId = "sb-d45c5e36-af3e-41fb-ae1d-d87077049096!b128717|xsuaa!b34447";
            const clientSecret = "68c390a5-473e-4d6e-a773-ab62f02518c2$WyJqN2m-fjRQWjNWyG9rMA_3wbkOBtPsyE7E-ZOxx9U=";
            const tokenUrl = "https://1f419b0btrial.authentication.ap21.hana.ondemand.com/oauth/token";

            // ===== Generate Access Token =====
            const tokenResponse = await axios.post(
                tokenUrl,
                "grant_type=client_credentials",
                {
                    auth: {
                        username: clientId,
                        password: clientSecret
                    },
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }
            );

            const accessToken = tokenResponse.data.access_token;

            // ===== Trigger Workflow =====
            const workflowUrl =
                "https://spa-api-gateway-bpi-ap-prod.cfapps.ap21.hana.ondemand.com/workflow/rest/v1/workflow-instances";

            const payload = {
                definitionId: "ap21.1f419b0btrial.leaveapproval2.leaveApproval",
                context: {
                    employeeID,
                    employeeName,
                    leaveDate,
                    approvalEmail,
                    leaveType,
                    comments
                }
            };

            const workflowResponse = await axios.post(
                workflowUrl,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            return workflowResponse.data;

        } catch (err) {

            console.error(err.response?.data || err.message);

            req.error({
                code: 500,
                message: JSON.stringify(err.response?.data || err.message)
            });

        }

    });

});