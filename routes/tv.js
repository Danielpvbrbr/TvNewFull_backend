const router = require('express').Router()
const { connection } = require('../services/db')

router.get('/api/list/canais/:id', (req, res) => {
    const search = req.params.id
    connection.query(`SELECT * FROM Lista_Canais_TB WHERE group_title  LIKE '%%${search}%%'`,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
})

router.get('/api/list/grupo', (req, res) => {
    connection.query("SELECT DISTINCT group_title FROM Lista_Canais_TB",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
})

module.exports = router;