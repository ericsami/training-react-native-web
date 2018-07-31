const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
	Object.assign(mock, require('./mock/' + file))
	console.log(file)
})

console.log(mock)

export default mock;
