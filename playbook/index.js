// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getData from 'sauveur_core/fetch/fetch.js'

export default async (req, res) => {

  var data = await getData("http://api.sauveur.cloud/data/playbooks","GET",true)
  console.log(data);
  res.statusCode = 200
  res.json(data)
}
