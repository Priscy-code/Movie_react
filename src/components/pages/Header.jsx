import React from "react";
import { Link } from "react-router-dom";

const Header = ()=> {
    return(
        <header className=" dark:text-white light:text-dark p-4">
            <nav className=" mx-auto flex justify-between items-center">
                <ul className="flex space-x-6">
                    <li>
                        <Link to='/' className={`hover:text-customBlue font-bold text-1xl `}>Home</Link>
                    </li>

                    <li>
                        <Link to="/about" className="hover:text-customBlue text-1xl font-bold">About Me</Link>
                    </li>

                    <li>
                        <Link to='/categories' className="hover:text-customBlue text-1xl font-bold">Categories </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:text-customBlue font-bold text-1xl">Contact us </Link>
                    </li>
                </ul>

            </nav>

        </header>
    )
}

export default Header;