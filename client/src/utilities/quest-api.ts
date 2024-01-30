import sendRequest from "./send-request"
const BASE_URL = '/api/quests'



export async function createQuest(quest: NewQuest): Promise<void> {
  return sendRequest(`${BASE_URL}/new`, 'POST', quest)
}

export async function getMostPopQuests(): Promise<Quest[]> {
  return sendRequest(`${BASE_URL}/mostpopular`, 'GET')
}

export async function getQuestById(questId: string): Promise<Quest> {
  return sendRequest(`${BASE_URL}/${questId}`);
}

export async function acceptQuest(questId: string): Promise<void>{
  return sendRequest(`${BASE_URL}/accepted-quests`, 'POST', questId)
}

// types
interface NewQuest {
  title: string,
  description: string,
  tags: {
    kids: boolean,
    adults: boolean,
    families: boolean,
    ca: boolean,
    disneyland: boolean,
    short: boolean,
    easy: boolean,
    hard: boolean,
    mickeys: boolean,
    queue: boolean,
    riddles: boolean,
  },
  tasks: Task[],
}

export interface Quest {
  _id: string,
  title: string,
  description: string,
  tags: {
    kids: boolean,
    adults: boolean,
    families: boolean,
    ca: boolean,
    disneyland: boolean,
    short: boolean,
    easy: boolean,
    hard: boolean,
    mickeys: boolean,
    queue: boolean,
    riddles: boolean,
  },
  tasks: Task[],
  likes: number,
  accepted: number,
  author: {
    name: string,
  },
}

export interface Task {
  description: string,
  hint?: string,
}




// dummy data
// const dummy = [
//   {
//     _id: "1",
//     title: "Disneyland historical Quest for newbies",
//     description: "Embark on an enchanting Disneyland scavenger hunt where the magic is in the details! Your journey begins at Sleeping Beauty's Castle, with a whimsical map guiding you through hidden nooks and crannies. Seek out elusive characters like the mischievous Cheshire Cat and collect enchanted tokens from iconic attractions. Uncover secret passages, solve riddles, and discover the hidden treasures that make this fantastical scavenger hunt a truly spellbinding adventure for all ages.",
//     tags: {
//       kids: true,
//       adults: true,
//       families: true,
//       ca: false,
//       disneyland: true,
//       short: true,
//       easy: true,
//       hard: false,
//       mickeys: false,
//       queue: false,
//       riddles: false,
//     },
//     tasks: [
//       "Find the castle",
//       "Eat a corndog",
//       "ride the main street horse cart"
//     ],
//     likes: 154,
//     accepted: 107,
//     author: "Reina DuFrene"
//   },
//   {
//     _id: "2",
//     title: "Disney foodie quest",
//     description: "Travel around disneyland and learn about its history!",
//     tags: {
//       kids: true,
//       adults: true,
//       families: true,
//       ca: false,
//       disneyland: true,
//       short: true,
//       easy: true,
//       hard: false,
//       mickeys: false,
//       queue: false,
//       riddles: false,
//     },
//     tasks: [
//       "Find the castle",
//       "Eat a corndog",
//       "ride the main street horse cart"
//     ],
//     likes: 154,
//     accepted: 107,
//     author: "Reina DuFrene"
//   },
//   {
//     _id: "3",
//     title: "People watching quest",
//     description: "Travel around disneyland and learn about its history!",
//     tags: {
//       kids: true,
//       adults: true,
//       families: true,
//       ca: false,
//       disneyland: true,
//       short: true,
//       easy: true,
//       hard: false,
//       mickeys: false,
//       queue: false,
//       riddles: false,
//     },
//     tasks: [
//       "Find the castle",
//       "Eat a corndog",
//       "ride the main street horse cart"
//     ],
//     likes: 154,
//     accepted: 107,
//     author: "Reina DuFrene"
//   },
//   {
//     _id: "4",
//     title: "Characters race",
//     description: "Travel around disneyland and learn about its history!",
//     tags: {
//       kids: true,
//       adults: true,
//       families: true,
//       ca: false,
//       disneyland: true,
//       short: true,
//       easy: true,
//       hard: false,
//       mickeys: false,
//       queue: false,
//       riddles: false,
//     },
//     tasks: [
//       "Find the castle",
//       "Eat a corndog",
//       "ride the main street horse cart"
//     ],
//     likes: 154,
//     accepted: 107,
//     author: "Reina DuFrene"
//   },
// ]