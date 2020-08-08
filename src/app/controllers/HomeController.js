const Home = require('../models/Home');
const { render } = require('node-sass');
const { mutipleMongooseToObj } = require('../../util/mongoose');

class HomeController {
    
    // [GET] 
    index(req, res, next) {
        Home.find({})
            .then(items => {
                res.render('home', { 
                    items: mutipleMongooseToObj(items)
                })
            })
            .catch(next)
        // res.render('home)
    }

    // [GET] 
    show(req, res) {
        res.send('NEW DETTAIL');
    }
}

module.exports = new HomeController;