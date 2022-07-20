const _m_connection = process.env.MONGO_CONNECTION || 'mongo-db';
const _m_port = process.env.MONGO_PORT || '27017';
const _m_database = process.env.MONGO_DATABASE || 'example';
module.exports = {
    // url: "mongodb://127.0.0.1:27017/example", // if work on localhost, don't forget to start MongoDB
    //url: "mongodb://mongo-db:27017/example"
    url: `mongodb://${_m_connection}:${_m_port}/${_m_database}`
};