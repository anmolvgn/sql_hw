//sql connection setup
var sql = require('mysql');

var connection = sql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password: 'Stapleton2240',
    database: 'b_amazon'
});

connection.connect(function(err){
    if (err) throw err;
//    console.log('connect as id'+ connection.threadId);
    connection.end()
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
]).then(function lookup(item){
    var item = item.itemId;
    console.log(JSON.stringify(itemId));
});