import Link from 'next/link';

export default function Header(props) {
    return (
      <header className="flex items-center justify-between p-4 bg-green-500 text-gray-50">

        <h1 className="text-4xl">Cookie Stand Admin</h1>
        <Link className="p-2 font-semibold text-black bg-gray-200 rounded-md" href={props.lin}>
        {props.nav}
        </Link>
      </header>

    )
  }