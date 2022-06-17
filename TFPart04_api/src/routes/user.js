const router = require('express').Router();
const { getUser, addUser, delUser, updateUser } = require('../controllers/users.js');


router.get("/", getUser);
router.post("/", addUser);
router.delete('/delete/:emailUser', delUser);
router.put('/update/:emailUser', updateUser);

module.exports = router;

