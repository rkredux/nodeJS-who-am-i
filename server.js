//set up the app
const express = require('express'), 
      app = express();

// route
app.get("/", function (request, response) {
  const ipaddress = request.connection.remoteAddress.split(":")[3], 
        language = request.headers["accept-language"].split(",")[0],
        soft = request.headers['user-agent'],
        software = new RegExp(/\(([^}]+)\)/).exec(soft)[1].split(")")[0];  
  response.send({ipaddress, language, software }); 
});

//listen to the request
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

