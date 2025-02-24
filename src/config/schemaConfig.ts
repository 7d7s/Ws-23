// config/schemaConfig.ts
export const schemaDefaults = {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Your Company Name',
      url: 'https://yourwebsite.com',
      logo: 'https://yourwebsite.com/logo.png',
      sameAs: [
        'https://www.facebook.com/yourhandle',
        'https://twitter.com/yourhandle',
        'https://www.instagram.com/yourhandle',
      ],
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Your Website Name',
      url: 'https://yourwebsite.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://yourwebsite.com/search?query={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    breadcrumb: (breadcrumbs: string[]) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: breadcrumb,
        item: `https://yourwebsite.com/${breadcrumb.toLowerCase().replace(/ /g, '-')}`,
      })),
    }),
  };
