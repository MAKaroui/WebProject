const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://webproject:azerty123@cluster0.k3u6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('connected successfully');
}).catch(err => {
    console.log(err);
    console.log('an error occured');
})

module.exports = mongoose;