const mongoose = require("mongoose")
const connectDB = () =>{
mongoose.connect("mongodb://localhost:27017/todolist",{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})
}

module.exports = {connectDB}
