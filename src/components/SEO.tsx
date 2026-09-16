import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.tagline,
  canonical = window.location.href,
  schema
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.businessName}`
    : `${SITE_CONFIG.businessName} | Rajgir, Bihar`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Description & Open Graph
    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical;

    // Inject JSON-LD
    let script = document.getElementById('jsonld-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const defaultLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["MedicalClinic", "Pharmacy", "LocalBusiness"],
      "name": SITE_CONFIG.businessName,
      "alternateName": "Aanand Homeo Clinic",
      "description": SITE_CONFIG.tagline,
      "telephone": SITE_CONFIG.phone,
      "url": "https://aanandhomeoclinic.in",
      "logo": "https://aanandhomeoclinic.in/icons/icon-512.png",
      "image": "https://images.unsplash.com/photo-1586015555751-63c23057e930?auto=format&fit=crop&w=1000&q=80",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BLOCK MORE, near SHIVANI CINEMA HALL, Ashok Nagar",
        "addressLocality": "Rajgir",
        "addressRegion": "Bihar",
        "postalCode": "803116",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.030018,
        "longitude": 85.412497
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:30",
          "closes": "20:30"
        }
      ],
      "sameAs": [
        SITE_CONFIG.social.justdial,
        SITE_CONFIG.social.whatsapp
      ]
    };

    script.textContent = JSON.stringify(schema || defaultLocalBusinessSchema);
  }, [fullTitle, description, canonical, schema]);

  return null;
};
