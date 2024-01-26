
interface Quest {
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

export async function createQuest(quest: Quest): Promise<void> {
  // TODO
}

