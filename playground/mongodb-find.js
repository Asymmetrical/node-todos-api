
//const MongoClient = require('mongodb').MongoClient;
// using object destructuring
const {MongoClient, ObjectID} = require('mongodb');

// url can be amazon or whatever
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    // since "return" above is there we don't need an else statement
    console.log('Connection to MongoDb server successful');

    const db = client.db('TodoApp');
    
    // find specific values
    // db.collection('Todos').find({completed: false}).toArray().then((docs) => {

    // db.collection('Todos').find({
    //     _id: new ObjectID('5afc96a253724b5783d3ebc7')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Could not find any Todos', err);
    // });

    // count number of docs
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // }, (err) => {
    //     console.log('Could not find any Todos', err);
    // });

     db.collection('Users').find({
         name: 'Johan Wastring'
     }).toArray().then((docs) => {
         console.log('Users');
         console.log(JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('Could not find any Todos', err);
     });

    //client.close();
});