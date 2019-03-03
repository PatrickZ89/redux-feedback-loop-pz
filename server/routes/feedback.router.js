const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// router.get('/', (req, res) => {
//     pool.query('SELECT * FROM "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error with GET', error);
//         res.sendStatus(500);  
//     });
// })


router.post('/', (req, res) => {
    console.log('post route was hit');
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ( $1, $2, $3, $4 );`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(() => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error with insert:', error);
        res.sendStatus(500);
    });
});