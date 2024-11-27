const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const mongo = await mongoose.connect("mongodb+srv://katariyamansi25:n2nKRAO779gtWHaj@cluster0.zzqox.mongodb.net/Linkly?retryWrites=true&w=majority&appName=Cluster0")
        if(mongo){
            console.log("Connected");
        }
    } catch(error) {
        console.log(error)
    }

}
module.exports = connectDb