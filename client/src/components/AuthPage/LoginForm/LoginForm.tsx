import { useState } from 'react';
import * as usersService from '../../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

interface Props {
  setUser: (user: usersService.User) => void;
}

export default function LoginForm({ setUser }: Props) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({ 
      ...credentials, 
      [evt.target.name]: evt.target.value 
    });
    setError('');
  }

  async function handleSubmit(evt: React.FormEvent) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/quests');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  const inputStyle = "bg-slate-100 mb-3 rounded-md text-center p-1"
  const labelStyle = "font-semibold"
  

  return (
    <div className="w-1/3">
      <form className="flex flex-col text-center" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold">Log-In</h2>
        <hr className="my-4 mb-7"/>
        <label className={labelStyle}>Email</label>
        <input className={inputStyle} type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label className={labelStyle}>Password</label>
        <input className={inputStyle} type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button className="bg-purple-50 p-1 my-4 w-1/3 mx-auto" type="submit">LOG IN</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}