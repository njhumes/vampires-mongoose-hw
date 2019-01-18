// 1. Require your node modules
const express = require('express');
const app = express();
const mongoose = require('mongoose');


// 2. Require your model (and possibly your extra data source);
const Vampire = require('../vampire_app/models/vampire');
const vampireData = require('../vampire_app/populateVampires')
//Vampire.find((err, response) => {if err, then send err else res.send....})

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampiredb';

// 4. Open your mongoose connection
mongoose.connect(connectionString);
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.collection.insertMany(vampireData, (err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close(connectionString);
// });

// ### Add some new vampire data

// Vampire.create({
//     name: 'Nick',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1990, 12, 20),
//     loves: ['snowboarding', 'guitars'],
//     location: 'Boulder',
//     gender: 'm',
//     victims: 2
// }, (err, vampireNick) => {
//     if (err) { //if there's an error, log it
//         console.log(err);
//     } else { //else log the created article
//         console.log(vampireNick);
//         mongoose.connection.close();
//     }
// });
// Vampire.create([{
//     name: 'Frankenstein',
//     hair_color: 'black',
//     eye_color: 'brown',
//     dob: new Date(1823, 5, 12),
//     loves: ['lightning', 'monster mash'],
//     location: 'Nowheresville',
//     gender: 'm',
//     victims: 100
//     },
//     {
//     name: 'Kate Beckinsale',
//     hair_color: 'black',
//     eye_color: 'blue',
//     dob: new Date(1973, 7, 26),
//     loves: ['underworld', 'van helsing'],
//     location: 'Los Angeles',
//     gender: 'f',
//     victims: 33
//     },
//     {
//     name: 'Drusilla',
//     hair_color: 'brown',
//     eye_color: 'hazel',
//     dob: new Date(1997, 8, 22),
//     loves: ['buffy', 'vampire slayers'],
//     location: 'Sunnydale',
//     gender: 'f',
//     victims: 42
//     }], (err, vampireCreated) => {
//         if (err) { //if there's an error, log it
//         console.log(err);
//     }   else { //else log the created article
//         console.log(vampireCreated);
//         mongoose.connection.close();
//     }
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find Females
// Vampire.find(
//     {gender: 'f'},
//     (err, findVampire) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log(findVampire)
//             mongoose.connection.close();
//         }
//     })

//  find greater than 500 victims
// Vampire.find({victims: {$gt: 500}},
//     (err, findVampire)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(findVampire)
//             mongoose.connection.close()
//         }
//     })

// finder fewer or equal to 150 victims
// Vampire.find({victims: {$lte: 150}},
//     (err, findVampire)=>{
//         if(err){
//             console.log(findVampire)
//         } else {
//             console.log(findVampire)
//         }
//     })

// have a victim count is not equal to 210234
// Vampire.find({ victims: {$ne: 210234}},
//     (err, findVampire) => {
//         if(err){
//             console.log(findVampire)
//         } else {
//             console.log(findVampire)
//         }
//     })

// have greater than 150 and fewer than 500 
// Vampire.find({victims: {$gt: 150, $lte: 500}},
//     (err, findVampire)=>{
//         if(err){
//             console.log(err)
//         } else {
//             console.log(findVampire)
//         }
//     })
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
