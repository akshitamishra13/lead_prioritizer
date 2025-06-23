
import React,{useState} from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-purple-800 to-pink-700 p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                    <ul className="hidden md:flex space-x-6">
                        <li className="text-gray-100 glow-hover">HOME</li>
                        <li className="text-gray-100 glow-hover">ABOUT</li>
                        <li className="text-gray-100 glow-hover">CONTACT</li>
                    </ul>
                    <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
                    <div className="text-gray-100 glow-hover">LOGIN</div>
            </div>
            {open && (
        <ul className="absolute left-4 top-full mt-2 bg-purple-800 rounded shadow-md p-2 space-y-2 md:hidden w-40">
          <li className="text-gray-100 glow-hover">Home</li>
          <li className="text-gray-100 glow-hover">About</li>
          <li className="text-gray-100 glow-hover">Contact</li>
        </ul>
      )}

        </nav>
    )
}

export default Navbar