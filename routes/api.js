var express = require('express');
var router = express.Router();


/*
 * TODO: Separate these functions
 */

/**
 * Gets opportunity costs for two different items to get
 * the opportunity cost for going for the first item
 * @param  {int} qA first option and the one that the function will calculate the opp cost for
 * @param  {int} qB second option
 * @return {dictionary}    Opportunity Cost for qA
 */
function oppCostForFirstItem(qA, qB)
{
	return qB/qA;
}

function absoluteAdvantage(q1A, q1B, q2A, q2B)
{
	var absAdv;

	if(q2A * q1B > q1A * q2B)
	{
		absAdv = q2A * q1B;
	}
	else
	{
		absAdv = q1A * q2B;
	}
	return absAdv;
}

/*
 * Gets opportunity costs for two different items
 */
router.get('/oppcost', function(req, res, next) {
	var oppcosta = oppCostForFirstItem(req.query.quantitya,req.query.quantityb);
	var oppcostb = oppCostForFirstItem(req.query.quantityb,req.query.quantitya);
	res.send({oppcosta: oppcosta, oppcostb : oppcostb});
});

/*
 * Gets two opportunity costs for two items for two doers to get which one has
 * the absolute advantage/comparative advantage
 */
router.get('/absadv', function(req, res, next) {
	var absAdv = absoluteAdvantage(
		req.query.quantity1a,
		req.query.quantity1b,
		req.query.quantity2a,
		req.query.quantity2b);
	res.send({absAdv: absAdv});
});

module.exports = router;
