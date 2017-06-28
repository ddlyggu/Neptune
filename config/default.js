module.exports = {
    port:3001,
    session: {
        secret: 'neptune',
        key: 'neptune',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/neptune'
};