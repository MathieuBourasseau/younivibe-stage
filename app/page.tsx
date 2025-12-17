'use client'

import { Explanations } from "./showcase/Explanations";
import HomeCandidate from '@/components/candidate/HomeCandidate';
import Missions from "./showcase/Missions";
import { Navigation } from './showcase/Navigation';
import { useState } from 'react';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSubdomain } from '@/hooks/useSubdomain'
import { Role } from "./types/auth";

export default function Home() {
  const { subdomain } = useSubdomain();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState('home');
  const [role, setRole] = useState<Exclude<Role, 'ADMIN'>>('STUDENT');

  useEffect(() => {
    // Si on est sur un sous-domaine "jobs" ou "hire", rediriger vers /login
    if (subdomain === 'jobs' || subdomain === 'hire') {
      router.push('/login');
    }
  }, [subdomain, router]);

  // Si on est sur jobs/hire, on redirige (affichage temporaire du loader pendant la redirection)
  if (subdomain === 'jobs' || subdomain === 'hire') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A848E4] mx-auto mb-4" />
          <p className="text-gray-600">Redirection...</p>
        </div>
      </div>
    );
  }

  // Si on est sur le domaine normal (sans sous-domaine), afficher le site vitrine
  return (
    <div>
      <Navigation onNavigate={setActiveSection} onRoleChange={ (newRole) => setRole(newRole as Exclude<Role, 'ADMIN'>)} activeSection={activeSection} role={role} />
      {activeSection === 'home' && <HomeCandidate />}
      {activeSection === 'explanations' && <Explanations role={role} />}
      {activeSection === 'mission' && <Missions role={role} />}
    </div>
  )
}