import NewQuestForm from "../../components/CreateQuestPage/NewQuestForm/NewQuestForm";

export default function CreateQuest() {
  return (
    <main className="mq-bg">
      <div className="flex justify-center text-center">
        <h1 className="mq-title border-b-4 border-black border-dashed inline-block w-full 2xl:w-1/3 md:w-1/2 pb-5 ">🗺️ Create Quest 🗺️</h1>
      </div>
      <NewQuestForm />
    </main>
  );
}