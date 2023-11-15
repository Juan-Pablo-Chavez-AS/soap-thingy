
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
soap.createClient(url, function (err, client) {
  if (err) {
    throw err;
  }
  /*
  * Parameters of the service call: they need to be called as specified
  * in the WSDL file
  */
  let args = {
    message: "id1:12:34:56:out42",
    splitter: ":"
  };

  let joinArgs = {
    strings: ['Hola', 'Mundo', '!!!']
  }
  // call the service
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
    // print the service returned result
    console.log(res);
  });
  client.MessageConcatter(joinArgs, function (err, res) {
    if (err) {
      console.log('Failed: ', err.statusMessage);
      return;
    }
    // print the service returned result
    console.log(res);
  });
});