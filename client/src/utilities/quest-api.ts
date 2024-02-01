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

export async function getAcceptedQuestById(questId: string): Promise<AcceptedQuest> {
  return sendRequest(`${BASE_URL}/accepted-quests/${questId}`);
}

export async function acceptQuest(questId: string): Promise<void>{
  return sendRequest(`${BASE_URL}/accepted-quests`, 'POST', questId)
}

export async function getAcceptedQuests() {
  return sendRequest(`${BASE_URL}/accepted-quests`, 'GET')
}

export function updateTask(questData: AcceptedQuest, questId: string): Promise <void> {
  return sendRequest(`${BASE_URL}/accepted-quests/${questId}`, 'PUT', questData)
}

export function unacceptQuest(questId: string): Promise <void> {
  return sendRequest(`${BASE_URL}/accepted-quests/${questId}`, 'DELETE', questId)
}

export function restartQuest(questId: string): Promise <void> {
  return sendRequest(`${BASE_URL}/completed-quests/${questId}`, 'PUT')
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

export interface AcceptedQuest {
  quest: Quest,
  taskProgress: boolean[],
  createdAt: string,
  _id: string,
}
