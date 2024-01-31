const express = require('express')
const router = express.Router();
const questsCtrl = require('../../controllers/api/quests');

//all got to /quests/...
router.post('/new', questsCtrl.create);
router.get('/mostpopular', questsCtrl.getMostPopularQuest);
router.post('/accepted-quests', questsCtrl.acceptQuest);
router.get('/accepted-quests', questsCtrl.getAcceptedQuests);
router.get('/:questId', questsCtrl.getQuestById);

module.exports = router;