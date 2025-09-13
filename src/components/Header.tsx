import Link from 'next/link';
import { IoRocketSharp } from 'react-icons/io5';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-900 flex items-center gap-2"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-2 rounded-lg">
              <IoRocketSharp className="text-white text-xl" />
            </div>
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              UniverseEx
            </span>
          </Link>

            <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-400 
              transition-all duration-300 font-medium"
            >
              Início
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-700 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-400 
              transition-all duration-300 font-medium"
          >
              Galeria
          </Link>
           
          </nav>


        </div>


      </div>
    </header>
  );
}