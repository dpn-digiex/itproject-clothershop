// connect model voi database
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://duyphong-admin:duyphong123456@cluster0.ph4pq.mongodb.net/clothes_itproject', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("SUCESS");
    } catch (error) {
        console.log("FAIL");
    }
}

module.exports = { connect };