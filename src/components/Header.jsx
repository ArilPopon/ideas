import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logosuitmedia.png";

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) setShow(false);
            else setShow(true);
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    const isActive = (path) =>
        location.pathname === path || location.pathname.startsWith(path);

    const activeClass = "font-semibold border-b-2 border-white pb-1";
    const linkClass = "hover:opacity-80";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${show ? "" : "-translate-y-full"
                } bg-[#f15623]`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <img src={logo} alt="logo" className="h-6 md:h-8" />

                {/* Mobile Toggle Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Nav Menu - Desktop */}
                <nav className="hidden md:flex gap-6 text-white">
                    <Link
                        to="/work"
                        className={`${linkClass} ${isActive("/work") ? activeClass : ""}`}
                    >
                        Work
                    </Link>
                    <Link
                        to="/about"
                        className={`${linkClass} ${isActive("/about") ? activeClass : ""}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        className={`${linkClass} ${isActive("/services") ? activeClass : ""}`}
                    >
                        Services
                    </Link>
                    <Link
                        to="/ideas"
                        className={`${linkClass} ${isActive("/ideas") ? activeClass : ""}`}
                    >
                        Ideas
                    </Link>
                    <Link
                        to="/careers"
                        className={`${linkClass} ${isActive("/careers") ? activeClass : ""}`}
                    >
                        Careers
                    </Link>
                    <Link
                        to="/contact"
                        className={`${linkClass} ${isActive("/contact") ? activeClass : ""}`}
                    >
                        Contact
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#f15623] text-white px-4 pb-4 space-y-2">
                    <Link
                        to="/work"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/work") ? activeClass : ""}`}
                    >
                        Work
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/about") ? activeClass : ""}`}
                    >
                        About
                    </Link>
                    <Link
                        to="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/services") ? activeClass : ""}`}
                    >
                        Services
                    </Link>
                    <Link
                        to="/ideas"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/ideas") ? activeClass : ""}`}
                    >
                        Ideas
                    </Link>
                    <Link
                        to="/careers"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/careers") ? activeClass : ""}`}
                    >
                        Careers
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`${linkClass} block ${isActive("/contact") ? activeClass : ""}`}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;
