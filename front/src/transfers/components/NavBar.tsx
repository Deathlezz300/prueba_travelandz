import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";


export const NavBar = () => {

  const {onLogout,user}=useAuth();

  return (
    <header className="w-[100%] flex shadow-md items-center justify-between bg-white p-4">
        <span className="ml-2 font-medium">{user}</span>
        <div className="flex gap-2 mr-4">
            <Link to="/transfers/list" className="font-medium">My transfers</Link>
            <Link to="/transfers/home" className="font-medium">Transfers</Link>
            <button onClick={onLogout} className="font-medium" type="button">Logout</button>
        </div>
    </header>
  )
}
