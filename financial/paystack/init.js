// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'

const endpoint = "https://api.paystack.co/"


export default async (method, type, data = null) => {

  const response = await getData(`${endpoint + type}`,method,false,data,process.env.PAYSTACK_SECRET);

  return response
}
