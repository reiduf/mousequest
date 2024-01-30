const AcceptedQuest = require('../../models/acceptedQuest');
const Quest = require('../../models/quest')

module.exports = {
  create,
  getMostPopularQuest,
  getQuestById,
  acceptQuest,
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
  await quest.populate('author')
  res.json(quest)
  console.log
}

async function acceptQuest(req, res) {
  try {
    const reffdQuest = await Quest.findOne({_id: req.body})
    const newQuest = {
      user: req.user._id,
      quest: reffdQuest._id,
      taskProgress: Array(reffdQuest.length).fill(false)
    }
    await AcceptedQuest.create(newQuest)
  } catch(err) {
    console.error("Error", err);
  }  
}