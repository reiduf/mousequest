import LoginForm from "../../components/AuthPage/LoginForm/LoginForm";
import SignUpForm from "../../components/AuthPage/SignUpForm/SignUpForm";
import { User } from "../../utilities/users-service";

interface Props {
  setUser: (user: User | null) => void,
}

export default function AuthPage({setUser}: Props) {
  return (
    <>
      <div className="py-5 flex justify-center">
        <h1 className="text-4xl mb-5">Auth Page</h1>
      </div>
      <main className="p-5 gap-8 flex justify-center">
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </main>
    </>
  );
}