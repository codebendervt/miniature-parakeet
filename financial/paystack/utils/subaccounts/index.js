import paystackSDK from '../init'
import endpoints from '../endpoints'


const CreateSubAccount =  async (data) => {

    const response = await paystackSDK("POST",`${endpoints.account}`, data);

    return response
}




export {CreateSubAccount};