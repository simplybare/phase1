import React, { useState, useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Footer } from '../footer';
import { AgeGate } from '../age-gate';
import useSiteMetadata from '../SiteMetadata';
import {
  isWindowDefined,
  clearProvinceSelection,
  getProvinceSelection,
  setProvinceSelection,
} from '../../utils';
import './index.scss';
import '../../styles/index.scss';
import '../../styles/tailwind.generated.css';

const TemplateWrapper = ({ hideFooter = false, children }) => {
  const { title, description } = useSiteMetadata();
  const [validated, setValidated] = useState(false);

  useLayoutEffect(() => {
    setValidated(!!getProvinceSelection());

    // For testing
    window.addEventListener('keyup', e => {
      if (e.which === 8 && e.shiftKey) {
        clearProvinceSelection();
        window.location.reload(false);
      }
    });
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${withPrefix('/')}img/site.webmanifest`} />
          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#b2614d"
          />
          <meta name="theme-color" content="#b2614d" />
          <link rel="canonical" href="https://www.simplybare.com/" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content={`${withPrefix('/')}img/og-image.png`} />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153579544-1" />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', 'UA-153579544-1');
            `}
          </script>

          {/* Google Tag Manager */}
          <script>
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NN56CP5');
              `}
          </script>

          {/* HubSpot */}
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/5419881.js"
          />
        </Helmet>
        <main className="bg-light text-brown font-display min-h-screen">
          {!validated && isWindowDefined() && (
            <AgeGate
              onValidate={province => {
                setProvinceSelection(province);
                setValidated(true);
              }}
            />
          )}
          {validated && isWindowDefined() && (
            <>
              {children}
              {!hideFooter && <Footer />}
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default TemplateWrapper;
