/**
 * Created by yaojianzhao on 2017/7/26.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/registerForm', function(req, res, next) {
    res.render('registerForm');
});

router.get('/loginForm', function(req, res, next) {
    res.render('loginForm');
});

router.get('/forgetPasswordForm', function(req, res, next) {
    res.render('forgetPasswordForm');
});

module.exports = router;