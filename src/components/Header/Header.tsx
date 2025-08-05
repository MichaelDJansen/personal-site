/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { getAssetPath } from "@/utils";
import Button from "../Button/Button";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";

type THeaderProps = {
  className?: string;
}

const Header: React.FC<THeaderProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`bg-secondary text-white px-4 py-4 w-full flex justify-between items-center gap-2 sticky top-0 z-10 ${className ?? ""}`} role="banner">
        <img className="header-logo cursor-pointer" alt="site logo" src={getAssetPath("/assets/MJ-logo.png")} width={64} height={64} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4" role="navigation" aria-label="Main navigation">
          <a href="#skills-section" aria-label="Navigate to skills section" className="nav-link hover:text-primary-300 transition-colors px-2 py-1">Skills</a>
          <a href="#experience-section" aria-label="Navigate to experience section" className="nav-link hover:text-primary-300 transition-colors px-2 py-1">Experience</a>
        </nav>
        
        {/* Desktop Contact Button */}
        <a href="mailto:michaeldjansen35@gmail.com" aria-label="Send email to Michael David Jansen" className="hidden md:block">
          <Button text="Contact Me"/>
        </a>

        {/* Mobile Hamburger Button */}
        <HamburgerButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu}
          className="text-white"
        />
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;