module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    MongoURI: 'mongodb://eddu:waya8000@ds163354.mlab.com:63354/projo',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1' 
}