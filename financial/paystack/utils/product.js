import paystackSDK from './init'
import endpoints from './endpoints'

const CreateProduct =  async (data) => {

    const response = await paystackSDK("POST",endpoints.product,data);

    return response
}

const GetProduct =  async (id) => {

    const response = await paystackSDK("GET",`${endpoints.product}/${id}`,{});

    return response
}


export {CreateProduct,GetProduct};