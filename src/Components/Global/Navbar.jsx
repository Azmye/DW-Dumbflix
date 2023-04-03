import { Link } from 'react-router-dom';
import navBrand from '../../assets/img/nav-brand.png';

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 bg-zinc-900 text-white py-3 z-50">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Nav Links */}
        <div className="flex gap-3 items-center text-white font-semibold">
          <Link>Home</Link>
          <Link>TV Shows</Link>
          <Link>Movies</Link>
        </div>

        {/* Nav Brand */}
        <div>
          <img src={navBrand} alt="" />
        </div>

        {/* Nav Buttons */}
        <div className="flex gap-3 font-semibold">
          <button className="bg-white text-red-700 px-4 py-1 rounded-md">Register</button>
          <button className="bg-red-700 text-white px-4 py-1 rounded-md">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
