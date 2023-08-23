import Hhead from '../components/Hhead';
import Body from "../components/Body";
import { useAuth } from "@/contexts/auth"
import Login from './login';

export default function CookieStandAdmin() {
  const { login, user, logout } = useAuth()
  return (

    <>
      {user ? (
      <>
      <Hhead data={"Home"} />
      <Body/>
      </>
      ):(
        <Login/>
      )
    }

    </>

  )
}