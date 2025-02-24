// pages/_app.tsx
import { AppProps } from 'next/app';
import MetaTags from '@/components/web/MetaTags';
import Analytics from '@/components/web/Analytics';
import { SEO_DEFAULTS } from '@/config/seoConfig';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <MetaTags metaData={SEO_DEFAULTS} />
            <Analytics />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
