// components/Analytics.tsx
import Script from 'next/script';
import { ANALYTICS_CONFIG } from '../../config/analyticsConfig';

const Analytics: React.FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS_CONFIG.GA_TRACKING_ID}');
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={ANALYTICS_CONFIG.AB_TESTING_SCRIPT}
      />
    </>
  );
};

export default Analytics;
