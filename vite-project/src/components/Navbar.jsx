import {
   FaHome,
   FaInfoCircle,
   FaServicestack,
   FaEnvelope
} from "react-icons/fa"


const navLink = [
    {
        name: "Home",
        icon: <FaHome/>,
        href: "#"
    },
    {
        name: "About",
        icon: <FaInfoCircle/>,
        href: "#"
    },
    {
        name: "Services",
        icon: <FaServicestack/>,
        href: "#"
    },
    {
        name: "Contact",
        icon: <FaEnvelope/>,
        href: "#"
    },
];

function Navbar(){
   return (
    <nav className="bg-black text-white p-4">
   <div className="container mx-auto flex items-center justify-between">
     <h1 className="text-2xl font-bold text-white transition-transform duration-300 hover:scale-110 cursor-pointer">
        WebTech
    </h1>
    <ul className="flex gap-6">
        
        {navLink.map((link, index) => (
            <li key={index}>
                <a href={link.href} className="flex items-center gap-1 transform hover:-translate-y-1 transition-all duration-500 ease-in-out">{link.icon} {link.name}</a>
            </li>
        ))}

    </ul>
   </div>
    </nav>
   )
}



export default Navbar;