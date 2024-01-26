const dummy = [
  {
    _id: "1",
    title: "Disney historical Quest for the newbies",
    description: "Travel around disneyland and learn about its history!",
    tags: {
      kids: true,
      adults: true,
      families: true,
      ca: false,
      disneyland: true,
      short: true,
      easy: true,
      hard: false,
      mickeys: false,
      queue: false,
      riddles: false,
    },
    tasks: [
      "Find the castle",
      "Eat a corndog",
      "ride the main street horse cart"
    ],
    likes: 154,
    accepted: 107,
    author: "Reina DuFrene"
  },
  {
    _id: "2",
    title: "Disney foodie quest",
    description: "Travel around disneyland and learn about its history!",
    tags: {
      kids: true,
      adults: true,
      families: true,
      ca: false,
      disneyland: true,
      short: true,
      easy: true,
      hard: false,
      mickeys: false,
      queue: false,
      riddles: false,
    },
    tasks: [
      "Find the castle",
      "Eat a corndog",
      "ride the main street horse cart"
    ],
    likes: 154,
    accepted: 107,
    author: "Reina DuFrene"
  },
  {
    _id: "3",
    title: "People watching quest",
    description: "Travel around disneyland and learn about its history!",
    tags: {
      kids: true,
      adults: true,
      families: true,
      ca: false,
      disneyland: true,
      short: true,
      easy: true,
      hard: false,
      mickeys: false,
      queue: false,
      riddles: false,
    },
    tasks: [
      "Find the castle",
      "Eat a corndog",
      "ride the main street horse cart"
    ],
    likes: 154,
    accepted: 107,
    author: "Reina DuFrene"
  },
  {
    _id: "4",
    title: "Characters race",
    description: "Travel around disneyland and learn about its history!",
    tags: {
      kids: true,
      adults: true,
      families: true,
      ca: false,
      disneyland: true,
      short: true,
      easy: true,
      hard: false,
      mickeys: false,
      queue: false,
      riddles: false,
    },
    tasks: [
      "Find the castle",
      "Eat a corndog",
      "ride the main street horse cart"
    ],
    likes: 154,
    accepted: 107,
    author: "Reina DuFrene"
  },
]

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
  tasks: string[],
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
  tasks: string[],
  likes: number,
  accepted: number,
  author: string,
}

export async function createQuest(quest: NewQuest): Promise<void> {
  // TODO
}

export async function getMostPopQuests(): Promise<Quest[]> {
  // TODO
  return dummy;
}

export async function getQuestById(questId: string): Promise<Quest> {
  //TODO
  const quest = await dummy.find(quest => quest._id === questId)
  return quest!
}
