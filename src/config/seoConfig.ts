// config/seoConfig.ts
export const SEO_DEFAULTS = {
    title: 'Default Title',
    description: 'Default description',
    keywords: 'default, keywords',
    canonicalUrl: 'https://www.example.com/',
    og: {
      title: 'Default OG Title',
      description: 'Default OG Description',
      url: 'https://www.example.com/',
      image: 'https://www.example.com/default-image.jpg',
      locale: 'en_US',
      author: '@author_handle',
      type: "website",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@site_handle',
      creator: '@creator_handle',
    },
    jsonLD: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Default Site Name',
      url: 'https://www.example.com/',
    },
    themeColor: '#000000',
  };
