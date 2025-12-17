'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  
  // Pages où le footer ne doit pas être affiché
  const noFooterPages = [
    '/login',
    '/forgot-password', 
    '/reset-password',
    '/confirm-email'
  ]
  
  // Masquer le footer sur les pages d'authentification
  if (noFooterPages.includes(pathname)) {
    return null
  }
  return (
    <footer className="bg-black text-white py-4 px-8 mt-6 lg:px-36">
      <div className="flex flex-col items-start w-full gap-10 md:p-6 lg:flex-row   lg:justify-between lg:text-[14px] xl:text-base">
        {/* Left Column */}
        <div className="flex flex-col gap-3 w-full  lg:w-60">
          <div className="flex items-center gap-2">
            <Image src="/logo-seul-couleur.svg" alt="Younivibe" width={24} height={24} />
            <span className="text-xl font-bold">Younivibe</span>
          </div>
          <p className="text-sm text-white">
            La plateforme qui révèle les talents engagés et crée des opportunités qui ont du sens.
          </p>
          <div className=" text-lg lg:text-xl font-black">We are social ! 🚀</div>
          <div className="flex gap-3 items-center">
            <Image src="/form-icons/bx-instagram-white.svg" alt="Instagram" width={24} height={24} />
            <Image src="/form-icons/bx-facebook-white.svg" alt="Facebook" width={24} height={24} />
            <Image src="/form-icons/bx-linkedin-white.svg" alt="LinkedIn" width={24} height={24} />
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="text-lg lg:text-xl font-black">À propos</div>
            <div className="text-sm">Comment ça marche ?</div>
            <div className="text-sm">Mission</div>
            <div className="text-sm">Contact</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-lg lg:text-xl font-black">Services</div>
            <div className="text-sm">Recruteurs</div>
            <div className="text-sm">Universités partenaires</div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-lg lg:text-xl font-black">Besoin d&apos;aide</div>
            <div className="text-sm">FAQ</div>
            <div className="text-sm">Mentions légales</div>
            <div className="text-sm">Politique de confidentialité</div>
          </div>
        </div>
      </div>
    </footer>
  )
}


