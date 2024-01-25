import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

interface Props {
  user: userService.User,
  setUser: (user: null) => void;
}


export default function NavBar({user, setUser}: Props) {
  function handleLogOut() {
    userService.logout();
    setUser(null)
  }

  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <span>Whaddup, {user.name} </span>
      &nbsp; | &nbsp;
      <Link to="#" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}