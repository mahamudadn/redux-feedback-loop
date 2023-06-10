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


router.post('/', (req, res) => {
    let newFeedback = req.body
    console.log('adding a feedback', newFeedback);
    let sqlText = `INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`
    pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            console.log('Succesfully Postes');
            res.sendStatus(201)
        })
        .catch(error => {
            console.log('error in posting', error);
            res.sendStatus(500)
        })

})





module.exports = router;