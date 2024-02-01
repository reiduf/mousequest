import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage";
import CreateQuest from './pages/CreateQuest/CreateQuest';
import FindQuests from './pages/FindQuests/FindQuests';
import MyQuests from './pages/MyQuests/MyQuests';
import NavBar from "./components/NavBar/NavBar";
import MyProfile from './pages/MyProfile/MyProfile';
import Logo from "./assets/logo-mobile.svg?react"
import QuestDetail from "./pages/QuestDetail/QuestDetail"
import StartQuest from "./pages/StartQuest/StartQuest"
import ReviewQuest from './pages/ReviewQuest/ReviewQuest';


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="font-primary flex flex-col-reverse lg:flex-col">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <header className="lg:hidden order-1 p-1 flex justify-center items-center">
            <Link className="py-2" to="/quests"><Logo /></Link>
          </header>
          <Routes>
            <Route path="/quests" element={<FindQuests />} />
            <Route path="/quests/:questId" element={<QuestDetail />} />
            <Route path="/quests/new" element={<CreateQuest />} />
            <Route path="/quests/accepted-quests" element={<MyQuests />} />
            <Route path="/myprofile" element={<MyProfile user={user} />} />
            <Route path="/quests/accepted-quests/:questId" element={<StartQuest />} />
            <Route path="/quests/completed-quests/:questId" element={<ReviewQuest />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
