export default function Header() {
    return (
      <header className="bg-amber-600 md:hidden text-white px-6 py-4 shadow">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-bold">My Reiki Site</h1>
          <ul className="flex space-x-4 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  