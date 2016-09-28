'use strict';

// Connection URL
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
 var database = {
        'connectionString': process.env.MONGO_HOST ? process.env.MONGO_HOST : 'localhost',
        'connectionOptions': process.env.MONGO_OPTIONS ? process.env.MONGO_OPTIONS : '' /* To use with Replica Set "?replicaSet=rs0&readPreference=primaryPreferred&w=majority" */ ,
        'connectionPort': process.env.MONGO_PORT ? process.env.MONGO_PORT : 27017,
        'name': process.env.MONGO_DATABASE ? process.env.MONGO_DATABASE : 'mongo-node-bench'
};

// var url = 'mongodb://localhost:27017/mongo-node-bench';
var url = 'mongodb://' + database.connectionString + ':' + database.connectionPort + '/' + database.name + database.connectionOptions;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
          db.close(); 
});