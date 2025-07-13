const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB CONNECTED');
    }
    catch(err){
        console.error("DB ERROR NOT CONNECTED");
        process.exit(1);
    }
};
module.exports=connectDB;