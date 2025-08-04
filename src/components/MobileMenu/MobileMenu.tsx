'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      menuRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    // Add a small delay to allow menu to close before navigating
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        tabIndex={-1}
      >
        {/* Close button */}
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-4 py-6" role="navigation" aria-label="Mobile navigation">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleNavClick('#skills-section')}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('#experience-section')}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              >
                Experience
              </button>
            </li>
          </ul>
        </nav>

        {/* Contact button */}
        <div className="p-4 border-t border-gray-200">
          <a href="mailto:michaeldjansen35@gmail.com" aria-label="Send email to Michael David Jansen">
            <Button 
              text="Contact Me" 
              variant="primary" 
              size="lg" 
              className="w-full"
              onClick={onClose}
            />
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;