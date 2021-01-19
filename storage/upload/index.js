// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
    BlobServiceClient,
    StorageSharedKeyCredential,
    newPipeline
} = require('@azure/storage-blob');
import getData from 'sauveur_core/fetch/fetch.js'

export const config = {
    api: {
      bodyParser: false,
      sizeLimit: '2mb',
    },
  }

const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');
const getStream = require('into-stream');
const containerName = 'images';
const TWO_MEGABYTE = 2048 * 2048;
const uploadOptions = { bufferSize: 4 * TWO_MEGABYTE, maxBuffers: 20 };

const sharedKeyCredential = new StorageSharedKeyCredential(
    process.env.AZURE_STORAGE_ACCOUNT_NAME,
    process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
    `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
    pipeline
);

const getBlobName = originalName => {
    // Use a random number to generate a unique file name, 
    // removing "0." from the start of the string.
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
};


const uploading = async (req) => {
    

    const blobName = getBlobName(req.file.originalname);
    let headers = {
        'Content-Type': req.file.mimetype,
        'Content-Length': req.file.buffer.byteLength,
        'x-ms-version' : "2019-12-12",
        'x-ms-blob-type': "BlockBlob",
        "Origin":"https://.sauveur.cloud"
      }
      let options = {
        method:"PUT",
        headers: headers,
        body : getStream(req.file.buffer)
      }

    console.log("uploading file...")
    let status =  await getData(`https://sauveurstore.blob.core.windows.net/images/${blobName}?sv=2019-12-12&ss=b&srt=sco&sp=rwdlacx&se=2020-12-31T17:37:49Z&st=2020-12-22T09:37:49Z&spr=https&sig=QQPj0GJvP7ENXNHyetv9AOXt6sXHwW4Y99JDR%2BXLMTA%3D`,"PUT",true,false,false,options)
    
    console.log(status)
      

      

    
      // Default options are marked with *
   
      //   {
      //   method: method, // *GET, POST, PUT, DELETE, etc.
      //   // mode: 'cors', // no-cors, *cors, same-origin
      //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   //credentials: 'same-origin', // include, *same-origin, omit
      //   headers: headers,
      //   //redirect: 'follow', // manual, *follow, error
      //   //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   //body: JSON.stringify(data) // body data type must match "Content-Type" header
      // }
    
   

   
   
    // const containerClient = blobServiceClient.getContainerClient(containerName);;
    // const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // try {
    //     blockBlobClient.uploadStream(stream,
    //         uploadOptions.bufferSize, uploadOptions.maxBuffers,
    //         { blobHTTPHeaders: { blobContentType: "image/jpeg" } });
    //     console.log('success', { message: 'File uploaded to Azure Blob storage.' })

    // } catch (err) {
    //     console.log('error', { message: err.message });
    // }
    // res.json({ status: "creating upload api" });

    ; // do something with the file

}


export default async (req, res) => {



    await uploadStrategy(req, {}, err => uploading(req));

    res.json({"status":"uploading some content"})

}
