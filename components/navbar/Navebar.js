import Link from 'next/link';

const Navebar = () => {
  return (
    <div className="">
        <nav className="flex justify-between items-center bg-gray-800 p-4">
            <Link href="/" legacyBehavior>
              <a className="text-white text-lg hover:text-gray-300">home</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="text-white text-lg hover:text-gray-300">about</a>
            </Link>
            <Link href="/filename" legacyBehavior>
              <a className="text-white text-lg hover:text-gray-300">filename</a>
            </Link>
        </nav>
    </div>
  )
}

export default Navebar;
