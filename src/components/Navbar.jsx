// src/components/Navbar.jsx
import { useState } from 'react';
import { Phone, User, FileText, Menu, X, CircleUser, MessageCircleQuestionMark } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState("home");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            {/* Top bar avec informations de contact */}
            <div className="bg-red-primary px-10 py-2 text-white shadow-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-y-2">
                        <div className="flex flex-col items-start">
                            <h1 className="text-2xl font-bold tracking-wider">GO-MAKKAH</h1>
                            <span className="text-white/90 text-sm font-medium">Quand foi et prestige se rencontrent</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span className="font-semibold">01 49 87 70 21</span>
                        </div>
                        <span className="text-xs text-white/80">32 avenue Pierre Semard, 94200</span>
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <div className="px-10 pt-1 bg-white">
                <div className="flex justify-between items-center">

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div
                            className={`text-sm font-medium ${selectedSection === 'home' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('home')}  href='#'>Accueil</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'omra' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('omra')} href='#'>Omra</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'omra_c' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('omra_c')} href='#'>Omra combinée</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'hajj' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('hajj')} href='#'>Hajj</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'travel' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('travel')} href='#'>Voyages Monde</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'service' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('service')} href='#'>Nos services</a>
                            </div>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center space-x-2 py-2">
                            <CircleUser className="w-6 h-6 stroke-gray-600" />
                            <span className="text-sm font-medium">Mon compte</span>
                        </button>
                        <button className="flex items-center space-x-2 py-2">
                            <MessageCircleQuestionMark className="w-6 h-6 fill-gray-600 stroke-white" />
                            <span className="text-sm font-medium">Espace client</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex justify-start'>
            <button 
            className="lg:hidden p-2 hover:bg-red-600 rounded transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
            {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col items-center space-y-2 mt-4">
              <div
                            className={`text-sm font-medium ${selectedSection === 'home' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('home')}  href='#'>Accueil</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'omra' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('omra')} href='#'>Omra</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'omra_c' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('omra_c')} href='#'>Omra combinée</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'hajj' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('hajj')} href='#'>Hajj</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium  h-16" ${selectedSection === 'travel' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('travel')} href='#'>Voyages Monde</a>
                            </div>
                        </div>
                        <div
                            className={`"text-sm font-medium h-16" ${selectedSection === 'service' ? 'border-b-4 border-red-primary' : 'border-b-4 border-transparent'}`}
                        >
                            <div className='px-2 py-2'>
                                <a onClick={()=> setSelectedSection('service')} href='#'>Nos services</a>
                            </div>
                        </div>
              
              {/* Mobile User Actions */}
              <div className="mt-4 pt-4 space-y-2">
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-red-600 rounded transition-colors duration-200 w-full text-left">
                  <User className="w-4 h-4" />
                  <span>Mon compte</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-2 hover:bg-red-600 rounded transition-colors duration-200 w-full text-left">
                  <FileText className="w-4 h-4" />
                  <span>Espace client</span>
                </button>
              </div>
            </div>
          </div>
        )}
        </nav>
    );
};

export default Navbar;