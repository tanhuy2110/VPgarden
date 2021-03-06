const Home = require('../models/Home');
const { render } = require('node-sass');
const { mutipleMongooseToObj } = require('../../util/mongoose');
const { ArrChunk } = require('../../util/array');

class HomeController {
    
    // [GET] 
    index(req, res, next) {
        Home.find({}).lean()
            .then(items => {
                res.render('home', { 
                    items: ArrChunk(items, 2),
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