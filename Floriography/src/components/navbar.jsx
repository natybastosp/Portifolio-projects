import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-cream p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-burgundy font-yeseva text-5xl ">Floriography</h1>

        <div>
          <ul className="flex space-x-4 font-bold ">
            <li>
              <a
                href="#"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Significados
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Combinações
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-burgundy font-josefin font-xl hover:underline"
              >
                Buquês
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
