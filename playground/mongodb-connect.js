
//const MongoClient = require('mongodb').MongoClient;
// using object destructuring
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// destructure an object
// var user = {name: 'Johan', age: 24};
// var {name} = user;
// console.log(name);

// url can be amazon or whatever
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    // since "return" above is there we don't need an else statement
    console.log('Connection to MongoDb server successful');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something todo',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Johan Wastring',
        age: 52,
        location: 'Limhamn'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }
       // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    });

    client.close();
});