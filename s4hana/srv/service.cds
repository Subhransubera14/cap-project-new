using { OP_API_BUSINESS_PARTNER_SRV as external }
from './external/OP_API_BUSINESS_PARTNER_SRV';

service BusinessPartnerService {

    entity BusinessPartners
        as projection on external.A_BusinessPartner;

}