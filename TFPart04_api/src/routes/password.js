const { Router } = require("express");
const router = Router();
const {
  sendMail,
  changePassword
} = require("../controllers/paswd.js")

router.get("/:mail", sendMail);
router.put("/:mail/:password", changePassword);

module.exports = router;