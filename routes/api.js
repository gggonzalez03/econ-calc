var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/oppcost/:quantitya/:quantityb', function(req, res, next) {
	var oppcosta = req.params.quantityb / req.params.quantitya;
	var oppcostb = req.params.quantitya / req.params.quantityb;
	res.send({oppcosta: oppcosta, oppcostb : oppcostb});
});

module.exports = router;
