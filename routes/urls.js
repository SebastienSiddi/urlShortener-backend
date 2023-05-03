var express = require('express');
var router = express.Router();
const crypto = require('crypto');
const Url = require("../models/urls");
const { checkUrl } = require('../modules/checkUrl');

router.post("/", (req, res) => { 
if (!checkUrl(req.body.URL)) {
    return res
      .status(400)
      .json({ error: "Merci de renseigner une URL valide :)" });
  } else {
    const suffixLength = 3; 
    const randomBytes = crypto.randomBytes(suffixLength); 
    const suffix = randomBytes.toString('hex'); 
    const newUrl = new Url({
      URL: req.body.URL,
      suffix: suffix,
      dateCreated: new Date(),
      nbClicks: 0,
    });
    newUrl.save().then((data) => {
    const shortenedUrl = 'http://localhost:3000/urls/'+ data.suffix;
    res.json({ result: true, shortenedUrl: shortenedUrl });
    });
  }
});

router.get("/:suffix", (req, res) => {
  Url.findOne({suffix:req.params.suffix}).then(data => {
		res.redirect({ urls: data.URL });
	});



});

module.exports = router;