const AcceptedQuest = require('../../models/acceptedQuest');
const Quest = require('../../models/quest');
const User = require('../../models/user')

module.exports = {
  create,
  getMostPopularQuest,
  getQuestById,
  acceptQuest,
  getAcceptedQuests,
  getAcceptedQuestById,
  updateTask,
  unacceptQuest,
  restartQuest,
  updateLikes,
  search,
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
  const popQuests = await Quest.find({}).populate('author').limit(12).exec();
  
  res.json(popQuests);
}

async function getQuestById(req, res) {
  const quest = await Quest.findById({ _id: req.params.questId})
  const user = await User.findById({ _id: req.user._id })
  const acceptedQuests = await AcceptedQuest.find({ quest: req.params.questId, user: user._id }).exec()
  const isAccepted = acceptedQuests.length > 0
    
  await quest.populate('author')
  
  const response = {
    quest,
    userLiked: user.likedQuests.includes(req.params.questId),
    isAccepted, 
  }
  res.json(response)
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
    const reffdQuest = await Quest.findOne({_id: req.body});
    reffdQuest.accepted += 1;
    await reffdQuest.save();
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
    await quest.save();
    res.sendStatus(204);
  } catch(err) {
    res.status(400).json({ err });
  }
}

async function unacceptQuest(req, res) {
  try {
    const accptdQuest = await AcceptedQuest.findOne({_id: req.body}).populate('quest');
    const reffdQuest = accptdQuest.quest
    reffdQuest.accepted -= 1;
    await reffdQuest.save();
    await AcceptedQuest.findOneAndDelete({ _id: req.body })
    res.sendStatus(204);
  } catch(err) {
    res.status(400).json({ err });
  }
}

async function restartQuest(req, res) {
  try {
    const quest = await AcceptedQuest.findById({ _id: req.params.questId})
    quest.taskProgress = quest.taskProgress.fill(false)
    await quest.save();
    res.sendStatus(204);
  } catch(err) {
    res.status(400).json({ err });
  }
}

async function updateLikes(req, res) {
  try {
    const quest = await Quest.findById({ _id: req.params.questId });
    const user = await User.findById({ _id: req.user._id })
    
    if (user.likedQuests.includes(req.params.questId)) {
      console.log(user.likedQuests)
      user.likedQuests = user.likedQuests.filter(id => id.toString() !== req.params.questId)
      console.log(user.likedQuests)
      quest.likes -= 1
      quest.userLiked = false;
    } else {
      user.likedQuests.push(req.params.questId);
      quest.likes += 1
      quest.userLiked = true;
    }
    await user.save();
    await quest.save();
    await quest.populate('author')

    const response = {
      quest,
      userLiked: user.likedQuests.includes(req.params.questId),
    }

    res.json(response)
  } catch(err) {
    console.log(err)
    res.status(400).json({ err });
  }
}

async function search(req, res) {
  try {
    const search = req.query.search
    const results = await Quest.find({$text: {$search: search}}).populate('author').limit(10).exec();
    res.json(results)
  } catch(err) {
    res.status(400).json({ err });
  }
}