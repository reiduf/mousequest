import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage";
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import NavBar from "./components/NavBar/NavBar";


function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="font-primary">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
