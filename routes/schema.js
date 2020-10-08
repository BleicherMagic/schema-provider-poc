var express = require('express');
var router = express.Router();
const ROOT_DIR = require('../consts')
const fs = require('fs');
const {join} = require('path');
/* GET users listing. */
router.get('/', function (req, res, next) {
    let content = ""
    fs.readdirSync(join(ROOT_DIR, 'schema')).filter(file => file.endsWith("graphql")).forEach(file => {
        content += fs.readFileSync(join(ROOT_DIR, 'schema', file),{"encoding":"utf-8"}) + "\n"
    })
    res.send(content);
});

module.exports = router;
