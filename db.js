var moongoose = require('mongoose');

moongoose.connect('mongodb://<username>:<password>@gettingstarted-shard-00-00-9m0av.mongodb.net:27017,gettingstarted-shard-00-01-9m0av.mongodb.net:27017,gettingstarted-shard-00-02-9m0av.mongodb.net:27017/studentDB?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority',{useNewUrlParser: true},(err,db)=>{
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});