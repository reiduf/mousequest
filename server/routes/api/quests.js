const express = require('express')
const router = express.Router();
const questsCtrl = require('../../controllers/api/quests');
const upload = require('multer')();


//all got to /quests/...
router.get('/', questsCtrl.search)
router.get('/liked-quests', questsCtrl.getLikedQuests)
router.get('/created-quests', questsCtrl.getCreatedQuests)
router.post('/new', upload.single('photo'), questsCtrl.create);
router.get('/mostpopular', questsCtrl.getMostPopularQuest);
router.post('/accepted-quests', questsCtrl.acceptQuest);
router.get('/accepted-quests', questsCtrl.getAcceptedQuests);
router.put('/accepted-quests/:questId', questsCtrl.updateTask);
router.get('/accepted-quests/:questId', questsCtrl.getAcceptedQuestById);
router.delete('/accepted-quests/:questId', questsCtrl.unacceptQuest);
router.put('/completed-quests/:questId', questsCtrl.restartQuest);
router.post('/:questId', questsCtrl.updateLikes);
router.get('/:questId', questsCtrl.getQuestById);


module.exports = router;