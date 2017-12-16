//sql connection setup

var express = require('express');
var app = express();

app.get('/', function(req, res){
    var sql = require('mysql');

    var config = {
        user: 'root',
        host: 'localhost',
        port:3306,
        password: 'Stapleton2240',
        database: 'b_amazon'
    };

    sql.connect(config, function(err){
        if (err) throw err;
    
        var req = new sql.request();
        
        request.query('select * from b_amazon', function(err,itemId){
            if (err) console.log(err);
            res.send(itemId);
        });
    
    });

//    console.log('connect as id'+ connection.threadId);
    
});

var server = app.listen(3306, function(){
    console.log('listening');
});
//logic interface
// var nodeArgs = process.argv;
// var question1 = process.argv[2];
// var question2 = process.argv[3];

var prompt = require('prompt');
var tables = require ('cli-table');
var inquirer = require('inquirer');

inquirer.prompt([
{
    type: 'input',
    message: 'lookup your item by itemId. Enter the ID and press enter',
    name: 'itemId'
}
// {
//     type: 'input',
//     message: 'how many units would you like to purchase?',
//     name: 'stockQuant'
// }
]).then(function (itemId){
    // var item = item.itemId;
    console.log(itemId);
});



// inquirer.prompt([
// {
//     type: 'input',
//     message: 'how many units would you like to purchase?',
//     name: 'stockQuant'
// }
// ]).then(function buy(purchQuant){
//     var purchase = purchQuant.stockQuant;
//     if( purchase>= stockQuant){
//         console.log('sorry we are unable to fulfill your order at the time.'/n, 'Please come again at a later time.' /n, 'Thank you!');
//     }
//     else console.log('thanks for your order. Please visit us again soon!');
// });