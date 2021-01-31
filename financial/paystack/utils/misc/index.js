import paystackSDK from '../init'
import endpoints from '../endpoints'


const GetBanks =  async () => {

    const response = await paystackSDK("GET",`${endpoints.bank}?country=South Africa`);

    return response
}


export {GetBanks};