var faunadb = require('faunadb'),
  query = faunadb.query

const create = async (data,col="theplug") => {

    return await faunaSDK.query(
        q.Create(
            q.Collection(col),
            data
        )
    )
}

const read = async (id,col="theplug") => {

    //console.log("id tp read",id)
    return await faunaSDK.query(
        q.Get(
            q.Ref(
                q.Collection(col), id)
        )

    )
}

const update = async (data, id,col="theplug") => {

    return await faunaSDK.query(
        q.Update(
            q.Ref(q.Collection(col), id),
            data
        )
    )
}

const remove = async (id,col="theplug") => {

    console.log("removing the data",id)
    return await faunaSDK.query(
        q.Delete(q.Ref(q.Collection(col), id))
      )
}

const findById = async (id, index ="identity") =>{

    return await faunaSDK.query(
        q.Get(q.Match(q.Index(index), id))
      )
}


const findByIndex = async (id, index ="identity") =>{

    let result = await faunaSDK.query(
        q.Paginate(q.Match(q.Index(index), id)),
      )

      let exp = result.data.map((i) => q.Get(i))


      let data = await faunaSDK.query(exp)

      return data;
}

const getAll = async (index = "genus") => {

    let result = await faunaSDK.query(
        q.Paginate(q.Documents(q.Collection(index))),
        )

    let exp = result.data.map((i) => q.Get(i))
    let data = await faunaSDK.query(exp)

    return data;
}

  
const faunaSDK = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

const q = query;

export {create, update, read, remove,findById, getAll, findByIndex}
