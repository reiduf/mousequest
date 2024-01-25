import NewQuestForm from "../../components/CreateQuestPage/NewQuestForm/NewQuestForm";

export default function CreateQuest() {
  return (
    <main className="mq-bg">
      <div className="flex justify-center">
        <h1 className="mq-title">Create Quest</h1>
      </div>
      <NewQuestForm />
    </main>
  );
}