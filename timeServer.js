var net = require("net");

var zeroFill = function(num) {
	return num < 10 ? "0" + num : num;
};

var server = net.createServer(function(c) {
	// socket.end(data, encoding) == socket.write(data, encoding);
	c.end(now() + "\n");
});

server.listen(process.argv[2] || 8124);

var now =  function() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	return  year + "-" + zeroFill(month) + "-" + zeroFill(day) +
		" " + zeroFill(hour) + ":" + zeroFill(min);
};

server.on("close", function() {
	console.log("server side ended up");
});