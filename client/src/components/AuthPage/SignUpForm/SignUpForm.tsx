import {useState} from 'react';
import { User, signUp } from '../../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

interface Props {
  setUser: (user: User | null) => void,
}

export default function SignUpForm({ setUser }: Props): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    confirm: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const disable = formData.password !== formData.confirm;

  function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
    setError("");
  }

  async function handleSubmit(evt: React.FormEvent): Promise<void> {
    evt.preventDefault();

    try {
      const submittedData: any = {...formData}
      delete submittedData.confirm;
      const user = await signUp(formData)
      setUser(user)
      navigate('/quests');
    } catch {
      setError('Sign Up Failed - Try Again');
    }
  }

  const inputStyle = "bg-slate-100 mb-3 rounded-md text-center p-1"
  const labelStyle = "font-semibold"


  return (
    <div className="w-1/3">
      <form className="flex flex-col text-center" autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-semibold">Sign Up</h2>
        <hr className="my-4 mb-7"/>
        <label className={labelStyle}>Name</label>
        <input className={inputStyle} type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label className={labelStyle}>Email</label>
        <input className={inputStyle} type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label className={labelStyle}>Password</label>
        <input className={inputStyle} type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label className={labelStyle}>Confirm</label>
        <input className={inputStyle} type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
        <label className={labelStyle}>What's your favorite part about visiting Disneyland?</label>
        <textarea className={inputStyle} name="bio" value={formData.bio} onChange={handleChange} required />
        <button className="bg-purple-50 p-1 my-4 w-1/3 mx-auto" type="submit" disabled={disable}>SIGN UP</button>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}