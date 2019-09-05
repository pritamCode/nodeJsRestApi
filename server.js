var app = require('./app');
var port = process.env.PORT || 5002;

var server = app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});