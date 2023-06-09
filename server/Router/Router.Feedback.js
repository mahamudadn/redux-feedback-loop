const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET/Feedback')
    pool.query(`SELECT * FROM  "feedback";`)
        .then((result) => {
        res.send(result.rows)
        })
        .catch((error)=> {
            console.log('error getting get', error);
        })
})








module.exports = router;