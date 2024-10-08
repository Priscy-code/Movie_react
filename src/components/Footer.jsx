import React from "react" 
import {FaTwitter, FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"

const Footer = () => {
    return(
        <footer className="bg-black text-white py-4 mt-10">
            <div className="container mx-auto text-center w-full">
                <p className="text-sm">Movie &copy; 2024 . All rights reserved.| crafed by <a href="https://github.com/Priscy-code/" className="text-pink-400 font-bold">Akwetey Priscilla </a></p>

                <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://www.linkedin.com/in/akwetey-priscilla-0aa552268/" target="_blank" rel="noopener noreferrer" className="hover:text-customBlue">
                        <FaLinkedin size= {24}/>
                    </a>
                    <a href="https://www.instagram.com/priscy_akwetey03/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-customeBlue">
                    <FaInstagram size = {24}/>
                    </a>
                    <a href="https://x.com/Akwetey_pri" target="_blank" rel="noopener noreferrer" className="hover:text-customerBlue">
                    <FaTwitter size= {24}/>
                    </a>
                    <a href="https://github.com/Priscy-code/" target="_blank" rel="noopener noreferrer" className="hover:text-customeBlue">
                    <FaGithub size= {24}/>
                    </a>
                </div>
                <ul className="flex justify-center space-x-4 mt-2 ">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of Service</a></li>
                    <li><a href="#" className="hover:underline">Conatct us</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;