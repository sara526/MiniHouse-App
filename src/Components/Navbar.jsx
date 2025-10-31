import { Link } from "react-router-dom";
import { ShoppingCart, User, Heart, Search, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className=" bg-opacity-20 backdrop-blur-md text-white w-full shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/mlogo-r.png" alt="Logo" className="w-14 h-14 object-contain" />
          <h1 className="text-3xl font-bold tracking-wide">MiniHouse</h1>
        </div>

        {/* ✅ Search Box - أبيض وواضح */}
        <div className="flex items-center w-1/2 bg-white rounded-full overflow-hidden shadow-inner">
          <input
            type="text"
            placeholder="Enter your keywords"
            className="w-full outline-none text-gray-700 px-4 py-2"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-full transition">
            <Search className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-300">Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-gray-300"><Heart size={20} /></button>
          <button className="hover:text-gray-300"><ShoppingCart size={20} /></button>
          <button className="hover:text-gray-300"><User size={20} /></button>
          <button 
            className="md:hidden hover:text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-emerald-950 bg-opacity-90 backdrop-blur-sm border-t border-gray-700">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
      <div className="navbar_middle flex items-center justify-center bg-[#f0f2f3] w-full h-[84px]">
                <div className="lg:container grid grid-cols-3 items-center">

                    <div className="logo_wrapper">
                        <Link to='/' className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"><Armchair size='2rem' color="#029fae" /> comforty</Link>
                    </div>

                    <div className="search_box">
                        <form action="#" className="max-w-[443px] h-11 relative">
                            <input type="text" placeholder="Search here..." className="max-w-[443px] w-full h-full bg-white rounded-lg  pl-4" />

                            <button className="absolute to-50% right-4 translate-y-1/2"><Search size='22px' color="#272343" /></button>
                        </form>
                    </div>

                    {/* navbar middle right  */}
                    <div className="navbar_middle_right flex items-center gap-4">

                        <button className="btn capitalize">
                            <ShoppingCart /> cart <div className="badge badge-sm bg-[#029fae]">2</div>
                        </button>
                        <button className="btn capitalize">
                            <Heart />
                        </button>

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1"><User /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a><Link>Account</Link></a></li>
                                <li><a><Link>Logout</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    </nav>
  );
}

export default Navbar;
