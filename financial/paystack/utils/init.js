// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import transact from 'sauveur_core/fetch/fetch.js'

const endpoint = "https://api.paystack.co/"

let key = process.env.PAYSTACK_SECRET;

const payStackAPi =  async (method, type, data = null) => {

  const response = await transact(`${endpoint + type}`,method,false,data,key);

  return response
}

export default payStackAPi;