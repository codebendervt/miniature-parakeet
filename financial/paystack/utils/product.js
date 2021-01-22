import paystackSDK from './init'
import endpoints from './endpoints'

const productUtil =  async (data) => {

    const response = await paystackSDK("POST",endpoints.product,data);

    return response
}

export default productUtil;