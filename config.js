//Configuration for the various DBs and logging elements in the system
module.exports = {
  "db": {
		"mongodb": "mongodb://username:password@dsXXXXX.mongolab.com:45077/databasename"
	},
	"logger": {
		"api": "logs/api.log",
		"exception": "logs/exceptions.log"
	}
};