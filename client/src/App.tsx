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


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="font-primary flex flex-col-reverse lg:flex-col">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <header className="lg:hidden order-1 p-1 flex justify-center items-center">
            <Link to="/quests"><Logo /></Link>
          </header>
          <Routes>
            <Route path="/quests" element={<FindQuests />} />
            <Route path="/quests/:questId" element={<QuestDetail />} />
            <Route path="/quests/new" element={<CreateQuest />} />
            <Route path="/quests/myquests" element={<MyQuests />} />
            <Route path="/myprofile" element={<MyProfile />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
