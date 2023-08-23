import Link from 'next/link';
import { useAuth } from "@/contexts/auth"

export default function Header(props) {
  
  const { logout, user, token } = useAuth()
  
  return (
    <header className="flex items-center justify-between p-4 bg-green-500 text-gray-50">

      <h1 className="text-4xl">Cookie Stand Admin</h1>
      <div className='flex items-center justify-between w-200px'>{user?(
        <button className="p-2 font-semibold text-black bg-gray-200 rounded-md" onClick={()=>logout()}>
        Logout
      </button>
      ): null}
        
        {props.nav && props.lin ?
          (
            <Link className="p-2 font-semibold text-black bg-gray-200 rounded-md" href={props.lin}>
              {props.nav}
            </Link>
          ) : null
        }
      </div>

    </header>

  )
}