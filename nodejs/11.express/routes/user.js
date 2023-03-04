const router = require("express").Router();

router.get("/hello", (req, resp) => {
  resp.send("hello");
});

module.exports = router;
