const Urls = require("../Models/Urls")

module.exports.getUrl =async (req,res) => {
    try {
        const {originalUrl , shortUrl } = req.body
        if(!originalUrl || !shortUrl){
        return res.status(404).send("Data not found")
    }
    const saveUrl = await Urls({
        originalUrl: originalUrl,
        shortUrl: shortUrl
    }).save()
    if(saveUrl){
        return res.status(200).send("Urls added successfully")
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