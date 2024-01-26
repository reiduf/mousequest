import { useState } from "react";
import MostPopList from "../../components/FindQuestsPage/MostPopList";

export default function FindQuests() {
  const [popQuests, setPopQuests] = useState([
    {
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
        _id: 1
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
        _id: 2
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
        _id: 3
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
        _id: 4
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
  ])

  return (
    <main className="mq-bg">
      <div className="flex justify-center">
        <h1 className="mq-title">Most Popular Quests</h1>
      </div>
      <MostPopList popQuests={popQuests} /> 
    </main>
  );
}