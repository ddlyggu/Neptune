module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/index');
    });
    app.use('/register', require('./register'));
    app.use('/login', require('./login'));
    app.use('/logout', require('./logout'));
    app.use('/index', require('./index'));
};