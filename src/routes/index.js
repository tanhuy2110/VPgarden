const newsRouter = require('./new');
const homeRouter = require('./home');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/', homeRouter);
    
    app.get('/search', (req, res) => {
        res.render('search');
    })
}

module.exports = route;
