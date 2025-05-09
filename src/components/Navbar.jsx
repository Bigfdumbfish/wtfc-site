import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">WTFC</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/apply" className="hover:underline">Apply</Link>
      </div>
    </nav>
  );
}
