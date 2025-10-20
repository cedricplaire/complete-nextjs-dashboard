"use client"

import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { useState } from 'react';

export default function SideNav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSB = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={`${isOpen ? 'w-64' : 'w-20'} flex flex-col h-full transition-width duration-500 px-4 py-4 md:px-2`}>
      <div className={`flex items-center justify-between py-4 px-2 ml-1 transition-width duration-500`}>
        <h1 className={`text-lg font-semibold transition-discrete ${isOpen ? 'block' : 'hidden'}`}>Sidebar</h1>
        <button title="switch bar" type="button" onClick={handleSB} className="p-2 rounded-md hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      <div className={`flex items-center justify-between mb-2 ${isOpen ? 'pl-6' : 'pl-2'} py-6 transition-all duration-500 text-gray-200 bg-blue-500`}>
        <AcmeLogo isOpen={isOpen} />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks isOpen={isOpen} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        {children}
      </div>
    </nav>
  );
}
