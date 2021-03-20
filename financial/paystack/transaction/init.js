import paystackSDK from '../utils/init'
import endpoints from '../utils/endpoints'


const transaction = async(data) => {
    const response = await paystackSDK("POST",endpoints.initialize,data);

    return response
}

export default transaction;