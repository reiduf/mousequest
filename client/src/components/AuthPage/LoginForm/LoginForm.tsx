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
  const labelStyle = "font-black uppercase tracking-wider"
  

  return (
    <div className="xl:w-1/2 w-full bg-mq-boring lg:p-10 py-10 px-4 rounded-lg">
      <form className="flex flex-col text-center" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="text-2xl uppercase font-black tracking-wider text-mq-purple">Log-In</h2>
        <hr className="my-4 mb-7"/>
        <label className={labelStyle}>Email <span className="text-red-400 font-normal">*</span></label>
        <input className={inputStyle} type="text" name="email" value={credentials.email} onChange={handleChange} required />
        <label className={labelStyle}>Password <span className="text-red-400 font-normal">*</span></label>
        <input className={inputStyle} type="password" name="password" value={credentials.password} onChange={handleChange} required />
        <button className="bg-mq-purple text-white rounded-md font-black tracking-wider p-1 my-4 w-1/3 mx-auto" type="submit">LOG IN</button>
      </form>
      {error && <p className="error-message text-center text-sm text-red-400 font-semibold uppercase">*{error}*</p>}
    </div>
  );
}