var fls = require('./filtered_ls_module')

fls(process.argv[2], process.argv[3], function(err, list) {
	if(err)
		console.error('There was an error:', err)

	list.forEach(function(element){
		console.log(element)
	})
})