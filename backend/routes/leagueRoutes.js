const express = require('express');
// const { route } = require('express/lib/application');
const router = express.Router();
const {
  getLeagueInfo,
  setLeagueInfo,
  updateLeagueInfo,
  deleteLeagueInfo
} = require('../controllers/leagueController');

router.route('/').get(getLeagueInfo).post(setLeagueInfo);
router.route('/:id').delete(deleteLeagueInfo).put(updateLeagueInfo);

module.exports = router;