const Urls = require("../Models/Urls")
const RandomString = async() => {
    const char =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 6;
    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * char.length);
      randomString += char[randomIndex];
    }
    return randomString;
  };


module.exports.getUrl =async (req,res) => {
    try {
        const {originalUrl } = req.body
        const shortUrl = await RandomString()
        if(!originalUrl || !shortUrl){
        return res.status(404).send("Data not found")
    }
    const saveUrl = await Urls({
        originalUrl: originalUrl,
        shortUrl: shortUrl
    }).save()
    if(saveUrl){
        return res.status(200).send({url:shortUrl})
    }
    } catch(error) {
        return res.status(503).send(error)
    }
    
}

module.exports.getId = async (req,res)=> {
    try {
        const {id } = req.body
        if(!id){
            return res.status(404).send("id not found")
        }
        const findID = await Urls.findOne({shortUrl:id})
        
        if(!findID){
            return res.status(404).send("link not found")
        }
        return res.status(200).send(findID.originalUrl)
    } catch (error) {
        return res.status(503).send(error)
    }
}