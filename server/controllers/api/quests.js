const Quest = require('../../models/quest')

module.exports = {
  create,
  getMostPopularQuest,
  getQuestById,
}

async function create(req, res) {
  try {
    console.log("User", req.user);
    req.body.author = req.user._id
    const quest = await Quest.create(req.body);
    console.log("Quest", quest);
    res.json(quest._id);
  } catch(err) {
    console.error("Error", err);
    res.status(400).json({ err });
  }
}

async function getMostPopularQuest(req, res) {
  const popQuests = await Quest.find({ likes: { $gte: 50 }}).exec();
  res.json(popQuests);
}

async function getQuestById(req, res) {
  const quest = await Quest.findById({ _id: req.params.questId})
}