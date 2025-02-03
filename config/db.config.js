require('dotenv').config();

module.exports = {
	hotsname: process.env.HOSTNAME || 'localhost',
	user: process.env.USERNAME || 'root',
	password: process.env.PASSWORD || '',
	database: process.env.DATABASE || 'MiniProject1',
	dialect: 'postgres',
	port: process.env.PORT || 5432,
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}