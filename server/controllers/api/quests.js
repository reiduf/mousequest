const AcceptedQuest = require('../../models/acceptedQuest');
const Quest = require('../../models/quest')

module.exports = {
  create,
  getMostPopularQuest,
  getQuestById,
  acceptQuest,
  getAcceptedQuests,
  getAcceptedQuestById,
  updateTask,
  unacceptQuest,
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
}

async function getAcceptedQuestById(req, res) {
  const quest = await AcceptedQuest.findById({ _id: req.params.questId})
  await quest.populate('quest')
  res.json(quest)
}

async function getAcceptedQuests(req, res) {
  try {
    const acceptedQuests = await AcceptedQuest.find({ user: req.user._id }).populate('quest').exec()
    const activeQuests = acceptedQuests.filter(quest => !quest.isComplete)
    const completedQuests = acceptedQuests.filter(quest => quest.isComplete)
    const response = {
      activeList: activeQuests,
      completedList: completedQuests,
    };
    res.json(response);
  } catch(err) {
    res.status(400).json({ err });
  }
}

async function acceptQuest(req, res) {
  try {
    const reffdQuest = await Quest.findOne({_id: req.body})
    const newQuest = {
      user: req.user._id,
      quest: reffdQuest._id,
      taskProgress: Array(reffdQuest.tasks.length).fill(false)
    }
    await AcceptedQuest.create(newQuest)
    res.sendStatus(204)
  } catch(err) {
    res.status(400).json({ err });
  }  
}

async function updateTask(req, res) {
  try {
    const quest = await AcceptedQuest.findById({ _id: req.params.questId})
    quest.taskProgress = req.body.taskProgress;
    quest.save();
    res.sendStatus(204);
  } catch(err) {
    res.status(400).json({ err });
  }
}

async function unacceptQuest(req, res) {
  try {
    await AcceptedQuest.findOneAndDelete({ _id: req.body })
    res.sendStatus(204);
  } catch(err) {
    res.status(400).json({ err });
  }
}