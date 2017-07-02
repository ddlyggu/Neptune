module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });
    app.use('/register', require('./register'));
    app.use('/login', require('./login'));
    app.use('/logout', require('./logout'));
    app.use('/home', require('./home'));
    app.use(function (req, res) {
        if (!res.headerSent) {
            res.status(404).render('404');
        }
    })
};