var apiRoot = require('app-root-path');
var sqlServer = require('mssql');
var formatEntries = require ('./format.js');
var authenticate = require(apiRoot + '/credentials.json');

module.exports = async function(data) {
    let entries = formatEntries(data);
    try {
    	console.log(entries);
        let pool = await sql.connect(authenticate);
	console.log("Connection Established");
        await pool.request()
            .query(entries)
	console.log(`INSERT: ${entries}`);
            
    } catch (err) {
	console.log("ERROR: Failed to insert into SQL Server");
    }
}; 
