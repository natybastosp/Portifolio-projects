import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-cream p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-burgundy font-yeseva text-5xl cursor-pointer hover:opacity-80 transition-opacity">
            Floriography
          </h1>
        </Link>

        <div>
          <ul className="flex space-x-4 font-bold">
            <li>
              <Link
                to="/"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/significados"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Significados
              </Link>
            </li>
            <li>
              <Link
                to="/combinacoes"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Combinações
              </Link>
            </li>
            <li>
              <Link
                to="/buques"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Buquês
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
