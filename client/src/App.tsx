import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage";
import CreateQuest from './pages/CreateQuest/CreateQuest';
import FindQuests from './pages/FindQuests/FindQuests';
import MyQuests from './pages/MyQuests/MyQuests';
import NavBar from "./components/NavBar/NavBar";
import MyProfile from './pages/MyProfile/MyProfile';


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="font-primary">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/quests" element={<FindQuests />} />
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
