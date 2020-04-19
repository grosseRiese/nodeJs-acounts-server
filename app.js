const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./database/acounts.json');
const db = low(adapter);
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const myRoute= require('./modules/routingModules');
app.use(express.json());


const initDatabase=()=>{
     db.has('acounts').value()
                        ? (console.log(`Already have this database ...!`) )
                        : ( db.defaults({ acounts: []}).write(),
                            console.log('New DB has been created ... ') );
}
myRoute(app,db);
app.listen(port,()=> {
    initDatabase();
    console.log(`Listening on port ${port} ...`);
    });