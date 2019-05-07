var n = 0;
process.argv.forEach(function(val, index, array) {
	if (index >= 2) {
		n += Number(val);
	}

});

console.log(n);