const { Router } = require('express');

const router = Router();

//New user creation
router.post('/new', (req, resp) => {
    return resp.json({
        ok:true,
        msg: "user creation /new"
    })
});

//User login
router.post('/', (req, resp) => {
    return resp.json({
        ok:true,
        msg: "user login/"
    })
});

//Token validation
router.get('/renew', (req, resp) => {
    return resp.json({
        ok:true,
        msg: "Renew"
    })
});

module.exports = router;