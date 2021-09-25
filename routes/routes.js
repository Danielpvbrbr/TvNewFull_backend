const Router = require('router');
const router = Router();
const tv = require('./tv');
const filmes = require('./filmes');

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "API EXECUTANDO!"
    })
})

router.get('/api/list/canais/:id', tv);
router.get('/api/list/grupo', tv);

router.get('/api/list/filmes/:id', filmes);
router.get('/api/list/grupo/filmes', filmes);

module.exports = router;