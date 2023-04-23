import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        <meta
          property="description"
          content="Google DSC web Co-lead | Web Dev | DevOps | AI-ML | Figma Design | Student with a love for all things colorful & creative ..."
        />
        <meta
          name="keywords"
          content="YASIER ANSARI, YASIER NORU, MH SABOO SIDDIK, GOOGLE DSC WEB, GDSC WEB LEAD, ANSARI MD YASIER, YASIER.IN , NEXTJS WEB DEVELOPER, REACTJS WEB DEV, TAILWINDCSS WEB DEVELOPER, INDIAN WEB DEVELOPER, INDIAN GDSC LEAD, INDIAN GOOGLE DEVELOPER STUDENT CLUB LEAD"
        />

        {/* facebook card */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:title" content="Yasier Ansari | Web Dev" />
        <meta property="og:site_name" content="yasier.in" />
        <meta property="og:url" content="https://www.yasier.in" />
        <meta
          property="og:description"
          content="Google DSC web Co-lead | Web Dev | DevOps | AI-ML | Figma Design | Student with a love for all things colorful & creative ..."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_945,q_50,w_1800/v1676054986/seo/card_fj8hfc.jpg"
        />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:width" content="800" />

        {/* twitter card */}

        <meta property="twitter:domain" content="https://www.yasier.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="yasier.in" />
        <meta property="twitter:creator" content="@Yasier_noru" />
        <meta property="twitter:title" content="Yasier Ansari | Noru  " />
        <meta
          property="twitter:description"
          content="Google DSC web Co-lead | Web Dev | DevOps | AI-ML | Figma Design | Student with a love for all things colorful & creative ..."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/yasier/image/upload/c_fill,e_auto_saturation,g_center,h_784,q_50,w_1500/v1676054986/seo/card_fj8hfc.jpg"
        />

        {/* canonical links */}

        <link rel="canonical" href="https://www.yasier.in/" />
        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="Yasier Ansari"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Quicksand:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="back font-out mx-auto bg-[#fffdfd] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
