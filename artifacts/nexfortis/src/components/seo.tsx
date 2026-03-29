import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

const SITE_NAME = "NexFortis IT Solutions";
// Set VITE_SITE_URL to the live deployment domain (e.g. https://nexfortis.com)
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://nexfortis.com";
const DEFAULT_IMAGE = "/opengraph.png";

export function SEO({ title, description, path = "/", type = "website", image, noIndex }: SEOProps) {
  const fullTitle = path === "/" ? `${SITE_NAME} — Your Business. Our Technology. Limitless Growth.` : `${title} | ${SITE_NAME}`;
  const fullUrl = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}${DEFAULT_IMAGE}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="alternate" hrefLang="en-ca" href={fullUrl} />
      <link rel="alternate" hrefLang="en" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_CA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexFortis IT Solutions",
    legalName: "17756968 Canada Inc.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-original.svg`,
    description: "NexFortis delivers end-to-end IT solutions for Canadian businesses including managed IT, Microsoft 365, QuickBooks migration, digital marketing, and workflow automation.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "customer service",
      email: "contact@nexfortis.com",
      areaServed: "CA",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 Hill Farm Rd",
      addressLocality: "Nobleton",
      addressRegion: "ON",
      postalCode: "L7B 0A1",
      addressCountry: "CA",
    },
    sameAs: [],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NexFortis IT Solutions",
    image: `${SITE_URL}/images/logo-original.svg`,
    url: SITE_URL,
    telephone: "+1-800-555-0199",
    email: "contact@nexfortis.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "204 Hill Farm Rd",
      addressLocality: "Nobleton",
      addressRegion: "ON",
      postalCode: "L7B 0A1",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.9217,
      longitude: -79.6542,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    description: "NexFortis delivers end-to-end IT solutions for Canadian businesses including managed IT, Microsoft 365, QuickBooks migration, digital marketing, and workflow automation.",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NexFortis IT Solutions",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url || `${SITE_URL}/services`,
    provider: {
      "@type": "Organization",
      name: "NexFortis IT Solutions",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    serviceType: "IT Services",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function ArticleSchema({ title, description, datePublished, dateModified, url }: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    publisher: {
      "@type": "Organization",
      name: "NexFortis IT Solutions",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-original.svg` },
    },
    author: {
      "@type": "Organization",
      name: "NexFortis IT Solutions",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
