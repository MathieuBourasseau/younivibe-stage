'use client'

import { useState, useEffect } from 'react';

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<'jobs' | 'hire' | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const hostname = window.location.hostname;
    
    // Gestion spéciale pour localhost et développement
    if (hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.includes('localhost')) {
      // En local, on peut tester avec des sous-domaines comme hire.localhost
      const parts = hostname.split('.');
      if (parts.length >= 2) {
        const subdomainPart = parts[0];
        if (subdomainPart === 'hire') {
          setSubdomain('hire');
        } else if (subdomainPart === 'jobs') {
          setSubdomain('jobs');
        } else {
          // Pas de sous-domaine valide en local, retourner null
          setSubdomain(null);
        }
      } else {
        // Pas de sous-domaine en local (ex: localhost seul)
        setSubdomain(null);
      }
      return;
    }
    
    // Gestion pour les domaines de production
    const parts = hostname.split('.');
    
    // Pour les domaines de production, on s'attend à au moins 3 parties (sous-domaine.domaine.com)
    if (parts.length >= 3) {
      const subdomainPart = parts[0];
      if (subdomainPart === 'hire') {
        setSubdomain('hire');
      } else if (subdomainPart === 'jobs') {
        setSubdomain('jobs');
      } else {
        // Sous-domaine non reconnu, retourner null
        setSubdomain(null);
      }
    } else {
      // Domaine principal sans sous-domaine (ex: younivibe.com)
      setSubdomain(null);
    }
  }, []);

  return { subdomain };
}
