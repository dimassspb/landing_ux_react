import { Link } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const path = window.location.pathname;
    const menuItems = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Rotated",
            path: "/rotated",
        },
        {
            title: "Glowing",
            path: "/glowing",
        },
        {
            title: "Marketing",
            path: "/marketing",
        },
        {
            title: "Colors",
            path: "/colors",
        },
        {
            title: "Parallax",
            path: "/parallax",
        },
        {
            title: "StarBucks",
            path: "/starbucks",
        },
        {
            title: "Cars",
            path: "/cars",
        },
    ];
    return (
        <>
            <div className='menu-switch'>
                {" "}
                {showMenu ? (
                    <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
                ) : (
                    <HiOutlineMenuAlt1 onClick={() => setShowMenu(!showMenu)} />
                )}
            </div>
            {showMenu ? (
                <ul className='menu-items' data-aos="slide-down">
                    {menuItems.map((menuItem) => (
                        <li>
                            <Link to={`${menuItem.path}`} className={`${path===menuItem.path && 'active'}`}>
                                {menuItem.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
        </>
    );
};

export default Header;
