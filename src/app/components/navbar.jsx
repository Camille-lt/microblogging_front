'use client';

import Link from 'next/link';
import { Home, LogIn } from 'lucide-react'; 

export default function Navbar() {
  return (
    <>
      {/* --- NAVBAR DESKTOP (Fixe en haut) --- */}
      {/* Modification : Fond émeraude très léger (bg-emerald-50/80) */}
      <nav className="bg-emerald-50/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo : Vert plus foncé (text-emerald-800) */}
            <div className="text-2xl font-extrabold text-emerald-800 tracking-tight">
              <Link href="/">🌍 Travelers</Link>
            </div>

            {/* Liens */}
            <div className="space-x-6 text-gray-700 font-medium flex">
              <Link href="/" className="hover:text-emerald-700 transition">Accueil</Link>
            </div>

            {/* Bouton */}
            <div>
              <Link href="/login" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl shadow-sm transition">
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- NAVBAR MOBILE (Fixe en bas) --- */}
      {/* Modification : Fond émeraude léger et bordure assortie */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-emerald-50/95 backdrop-blur-lg border-t border-emerald-100 z-50 h-16">
        <div className="flex justify-around items-center h-full">
          
          {/* Bouton Accueil */}
          <Link href="/" className="flex flex-col items-center justify-center text-emerald-800 active:text-emerald-600">
            <Home size={24} />
            <span className="text-[10px] mt-1 font-medium">Accueil</span>
          </Link>

          {/* Logo central : Travellers réduit ou Emoji */}
          <div className="flex flex-col items-center">
            <span className="text-xl">🌍</span>
            <span className="text-[8px] font-bold text-emerald-800 uppercase tracking-widest">Travelers</span>
          </div>

          {/* Bouton Connexion */}
          <Link href="/login" className="flex flex-col items-center justify-center text-emerald-700">
            <LogIn size={24} />
            <span className="text-[10px] mt-1 font-bold">Connexion</span>
          </Link>

        </div>
      </nav>
    </>
  );
}