import React, { useEffect, useState } from 'react';
import HeaderSidebarMenu from './HeaderSidebarMenu';
import MainMenu from './MainMenu';
import HeaderSearch from './HeaderSearch';
import HeaderLogoV1 from './HeaderLogoV1';
import { Link } from 'react-router-dom';
import { getUser, isLoggedIn, logout } from '../../utils/auth';
import LoginModal from '../auth/LoginModal';
import AuthModal from '../auth/LoginModal';

const HeaderV1 = ({ headerClass, logoColor = false }) => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
    const [auth, setAuth] = useState(isLoggedIn());
    const user = getUser();

    const handleLogout = () => {
  logout();
  setAuth(false);
  window.location.href = "/"; 
};



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Search Bar
    const [openSearch, setOpenSearch] = useState(false);

    const searchOpen = (event) => {
        event.preventDefault();
        setOpenSearch(!openSearch)
    }

    const searchClose = () => {
        setOpenSearch(false)
    }

    // Sidebar Menu
    // eslint-disable-next-line no-unused-vars
    const [navbarClass, setNavbarClass] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const addClasses = () => {
        setNavbarClass(true);
        setIsSidebarOpen(true);
        document.body.classList.add('on-side');
    };

    const removeClasses = () => {
        setNavbarClass(false);
        setIsSidebarOpen(false);
        document.body.classList.remove('on-side');
    };

    // Mobile Menu 
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        document.body.classList.add('no-fade');
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-fade');
    };

    // Mobile DropDown 
    const toggleSubMenu = (e) => {
        e.preventDefault();
        const listItem = e.target.parentElement;
        const subMenu = listItem.querySelector('ul.dropdown-menu');
        if (subMenu) {
            listItem.classList.toggle('on');
            subMenu.style.maxHeight = subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
        }
    };

    const toggleMegaMenu = (e) => {
        e.preventDefault();
        const listItem = e.target.parentElement;
        const megaMenu = listItem.querySelector('.content');
        if (megaMenu) {
            megaMenu.classList.toggle('d-block');
            listItem.classList.toggle('on');
        }
    };

    return (
        <>
            <header>
                <nav className={`${isSticky ? "sticked" : "no-background"}  ${isOpen ? "navbar-responsive" : ""} navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full ${headerClass} ${openSearch ? "smooth-search" : ""} `}>
                    <HeaderSearch openSearch={openSearch} searchClose={searchClose} />
                    <div className="container-fill d-flex justify-content-between align-items-center">
                        <HeaderLogoV1 logoColor={logoColor} openMenu={openMenu} />
                        <MainMenu isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        {/* <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} searchOpen={searchOpen} /> */}
<ul className="header-auth">
  {!auth ? (
    <li>
<button onClick={() => setShowAuth(true)} className='bg-dark px-3 py-2'>Login</button>
    </li>
  ) : (
    <li>
     
      <button onClick={handleLogout} className="logout-btn bg-dark px-3 py-2 ">
        Logout
      </button>
    </li>
  )}
</ul>

<AuthModal
  isOpen={showAuth}
  onClose={() => setShowAuth(false)}
  onAuthSuccess={() => window.location.reload()}
/>


                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;