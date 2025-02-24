// components/MetaTags.tsx
import Head from 'next/head';
import { useEffect } from 'react';

// Define the structure of metaData
type OGMetaData = {
    title: string;
    description: string;
    url: string;
    image: string;
    locale: string;
    author: string;
    type: string;
};

type TwitterMetaData = {
    card: string;
    site: string;
    creator: string;
};

type JSONLDMetaData = {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
};

type MetaTagsProps = {
    metaData: {
        title: string;
        description: string;
        keywords?: string;
        canonicalUrl?: string;
        og?: OGMetaData;
        twitter?: TwitterMetaData;
        jsonLD?: JSONLDMetaData;
        themeColor?: string;
    };
};

export default function MetaTags({ metaData }: MetaTagsProps) {
    const {
        title,
        description,
        keywords,
        canonicalUrl,
        og,
        twitter,
        jsonLD,
        themeColor
    } = metaData;

    useEffect(() => {
        // For CSR, update title dynamically
        if (title) document.title = title;
    }, [title]);

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {themeColor && <meta name="theme-color" content={themeColor} />}

            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

            {/* Open Graph Meta Tags */}
            {og && (
                <>
                    <meta property="og:title" content={og.title} />
                    <meta property="og:description" content={og.description} />
                    <meta property="og:url" content={og.url} />
                    <meta property="og:image" content={og.image} />
                    <meta property="og:locale" content={og.locale} />
                    <meta property="og:site_name" content={og.author} />
                    <meta property="og:type" content={og.type} />
                </>
            )}

            {/* Twitter Meta Tags */}
            {twitter && (
                <>
                    <meta name="twitter:card" content={twitter.card} />
                    <meta name="twitter:site" content={twitter.site} />
                    <meta name="twitter:creator" content={twitter.creator} />
                </>
            )}

            {/* JSON-LD Schema */}
            {jsonLD && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLD)}
                </script>
            )}
        </Head>
    );
}
