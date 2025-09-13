import Image from "next/image";
import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/mars-background.jpg"
        alt="Paisagem de Marte"
        fill
        priority
        style={{ 
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        quality={65}
        sizes="100vw"
      />

      <div className="absolute inset-0 backdrop-blur-md bg-black/50"></div>
      
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <div className="text-center text-white bg-gray-900/80 backdrop-blur-lg border border-white/20 
        rounded-3xl shadow-2xl p-12 max-w-2xl w-full min-h-[400px] flex flex-col justify-center">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            UniverseEx
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200">
            Descobrindo os segredos de Marte
          </p>
          
          <div className="mt-10">
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 
            text-white font-bold text-lg py-5 px-16 rounded-xl transition duration-300 transform hover:scale-105 
            shadow-lg cursor-pointer shadow-orange-500/40 min-w-[280px]">
              <Link 
                className="flex items-center justify-center gap-2" 
                href="/gallery">
                Explorar Agora <IoRocketSharp/> 
              </Link>
            </button>
          </div>

          <p className="mt-8 text-sm text-gray-400">
            Visualize imagens exclusivas dos Rovers da NASA
          </p>
        </div>
      </div>
    </div>
  );
}