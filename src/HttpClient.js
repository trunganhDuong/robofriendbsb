var http = require('http');


exports.makeGetRequest = (options, callback) =>{
	http.request(options, function(response){
		var data= "";
		response.on('data', function(chunk){
			data+= chunk;
		});
		response.on("end", function(){
			callback(JSON.parse(data));
		})
	}).end();
};