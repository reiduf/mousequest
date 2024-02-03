import LoginForm from "../../components/AuthPage/LoginForm/LoginForm";
import SignUpForm from "../../components/AuthPage/SignUpForm/SignUpForm";
import About from "../../components/AuthPage/About/About"
import { User } from "../../utilities/users-service";
import Logo from "../../assets/logo-mobile.svg?react"
import { useState } from "react";

interface Props {
  setUser: (user: User | null) => void,
}

export default function AuthPage({setUser}: Props) {
  const [showAbout, setShowAbout] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  function handleShowLogin() {
    setShowSignup(false);
    setShowAbout(false);
    setShowLogin(true);
  }
  
  function handleShowSignup() {
    setShowLogin(false);
    setShowAbout(false);
    setShowSignup(true);
  }
  
  function handleShowAbout() {
    setShowLogin(false);
    setShowSignup(false);
    setShowAbout(true);
  }

  return (
    <main>
      <header className="pt-5 pb-3 flex lg:flex-row flex-col lg:px-16 px-4 shadow-xl justify-between items-center">
        <Logo />
        <hr className="w-full mt-4 lg:hidden"/>
        <div className="right-10 lg:my-0 mt-3 inline-flex items-center lg:gap-8 gap-12">
          <span onClick={handleShowAbout} className={`border-b-2 border-transparent ${showAbout && "border-b-mq-purple"} transition duration-300 font-black tracking-wider cursor-pointer uppercase`}>About</span>
          <span onClick={handleShowSignup} className={`border-b-2 border-transparent ${showSignup && "border-b-mq-purple"} transition duration-300 font-black tracking-wider cursor-pointer uppercase`}>Sign-Up</span>
          <span onClick={handleShowLogin} className={`border-b-2 border-transparent ${showLogin && "border-b-mq-purple"} transition duration-300 font-black tracking-wider cursor-pointer uppercase`}>Login</span>
        </div>
      </header>
      {showAbout && <About />}

      {(showLogin || showSignup) &&    
        <section className="flex flex-col items-center lg:justify-center justify-start mq-bg">
          {showSignup && <SignUpForm setUser={setUser} />}
          {showLogin && <LoginForm setUser={setUser} />}
        </section>
      }
    </ main>
  );
}