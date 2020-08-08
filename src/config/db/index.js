const mongoose = require('mongoose');

async function connect() {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/garden_vp_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect Monggo OK!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };